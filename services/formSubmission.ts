import emailjs from "@emailjs/browser";
import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  Firestore,
} from "firebase/firestore";
import { z } from "zod";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate Firebase config
const validateFirebaseConfig = () => {
  const requiredFields = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  const missingFields = requiredFields.filter(
    (field) => !firebaseConfig[field as keyof typeof firebaseConfig]
  );

  if (missingFields.length > 0) {
    console.error("Missing Firebase config fields:", missingFields);
    return false;
  }
  return true;
};

let app: FirebaseApp | undefined;
let db: Firestore | undefined;

console.log("Firebase Config:", {
  hasApiKey: !!firebaseConfig.apiKey,
  hasAuthDomain: !!firebaseConfig.authDomain,
  hasProjectId: !!firebaseConfig.projectId,
  hasStorageBucket: !!firebaseConfig.storageBucket,
  hasMessagingSenderId: !!firebaseConfig.messagingSenderId,
  hasAppId: !!firebaseConfig.appId,
});

try {
  if (validateFirebaseConfig()) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase initialized successfully:", {
      appInitialized: !!app,
      dbInitialized: !!db,
      projectId: firebaseConfig.projectId,
    });
  } else {
    console.error("Invalid Firebase configuration");
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

// Zod validation schema
export const formSchema = z.object({
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  stage: z.string().min(1, "Please select your buying stage"),
  payment: z.string().min(1, "Please select a payment range"),
  creditScore: z.string().min(1, "Please select a credit score range"),
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\+?1?\d{10,}$/, "Please enter a valid phone number"),
  submittedAt: z.date().optional(),
});

export type FormSubmissionData = z.infer<typeof formSchema>;

export const validateForm = (data: Omit<FormSubmissionData, "submittedAt">) => {
  try {
    formSchema.parse({ ...data });
    return { success: true, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce(
        (acc, curr) => {
          const field = curr.path[0] as string;
          acc[field] = curr.message;
          return acc;
        },
        {} as Record<string, string>
      );
      return { success: false, errors };
    }
    return { success: false, errors: { form: "Invalid form data" } };
  }
};

export const submitForm = async (
  formData: Omit<FormSubmissionData, "submittedAt">
) => {
  try {
    // Validate form data
    const validation = validateForm(formData);
    if (!validation.success) {
      return {
        success: false,
        error: "Validation failed",
        validationErrors: validation.errors,
      };
    }

    // Try EmailJS first since it's more critical for immediate notification
    let emailSent = false;
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          to_email: "karsllcauto@gmail.com",
          subject: "New Pre-Approval Application",
          customer_name: `${formData.firstName} ${formData.lastName}`,
          customer_email: formData.email,
          customer_phone: formData.phone,
          vehicle_type: formData.vehicleType,
          buying_stage: formData.stage,
          payment_range: formData.payment,
          credit_score: formData.creditScore,
        }
      );
      emailSent = true;
    } catch (emailError) {
      console.error("EmailJS error:", emailError);
    }

    // Then try Firebase
    if (!db) {
      console.error("Firebase not initialized");
      if (emailSent) {
        return {
          success: true,
          submissionId: "email-only",
        };
      }
      throw new Error("Services unavailable");
    }

    console.log("Attempting Firebase submission with data:", {
      ...formData,
      submittedAt: new Date(),
    });

    try {
      const submissionData = {
        ...formData,
        submittedAt: new Date(),
      };

      const docRef = await addDoc(
        collection(db, "preApprovalSubmissions"),
        submissionData
      );

      return {
        success: true,
        submissionId: docRef.id,
      };
    } catch (firebaseError) {
      console.error("Firebase error:", firebaseError);
      if (emailSent) {
        return {
          success: true,
          submissionId: "email-only",
        };
      }
      throw firebaseError;
    }
  } catch (error) {
    console.error("Error in submitForm:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
