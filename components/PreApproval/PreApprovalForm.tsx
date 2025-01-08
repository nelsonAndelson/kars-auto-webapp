"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaCar,
  FaTruck,
  FaCarSide,
  FaPhoneAlt,
  FaHandshake,
  FaSearchDollar,
} from "react-icons/fa";
import {
  BsMinecartLoaded,
  BsCreditCard2FrontFill,
  BsCheckCircleFill,
  BsCarFrontFill,
} from "react-icons/bs";
import { RiCaravanFill, RiTimeLine } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import {
  MdEmail,
  MdPerson,
  MdShoppingCart,
  MdRemoveRedEye,
  MdHome,
} from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiDreamCatcher } from "react-icons/gi";
import { IoArrowBack } from "react-icons/io5";
import ReactConfetti from "react-confetti";
import { submitForm } from "@/services/formSubmission";

import suvImg from "@/app/images/suv2.png";
import truckImg from "@/app/images/truck.png";
import sedanImg from "@/app/images/sedar.webp";
import vanImg from "@/app/images/van.png";
import Link from "next/link";

type FormStep =
  | "vehicle"
  | "stage"
  | "payment"
  | "credit"
  | "email"
  | "name"
  | "phone"
  | "success";

interface FormData {
  vehicleType: string;
  stage: string;
  payment: string;
  creditScore: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export function PreApprovalForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<FormStep>("vehicle");
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState({
    vehicleType: "",
    stage: "",
    payment: "",
    creditScore: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateName = (firstName: string, lastName: string) => {
    if (!firstName.trim()) {
      return "First name is required";
    }
    if (!lastName.trim()) {
      return "Last name is required";
    }
    if (firstName.length < 2) {
      return "First name must be at least 2 characters";
    }
    if (lastName.length < 2) {
      return "Last name must be at least 2 characters";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone) {
      return "Phone number is required";
    }
    if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
      return "Please enter a valid 10-digit phone number";
    }
    return "";
  };

  const handleNext = (value: string) => {
    let validationError = "";

    // Validate based on current step
    if (currentStep === "email") {
      validationError = validateEmail(value);
      if (validationError) {
        setErrors({ email: validationError });
        return;
      }
    }

    if (currentStep === "name") {
      const [firstName, lastName] = value.split(" ");
      validationError = validateName(firstName || "", lastName || "");
      if (validationError) {
        setErrors({ name: validationError });
        return;
      }
    }

    if (currentStep === "phone") {
      validationError = validatePhone(value);
      if (validationError) {
        setErrors({ phone: validationError });
        return;
      }
    }

    // Clear errors if validation passes
    setErrors({});

    // Map the step to the correct form data key
    const stepToFormKey: Record<FormStep, string> = {
      vehicle: "vehicleType",
      stage: "stage",
      payment: "payment",
      credit: "creditScore",
      email: "email",
      name: "firstName", // We'll handle this specially
      phone: "phone",
      success: "phone", // Not used but needed for type safety
    };

    // Special handling for name step which needs to be split into first and last name
    if (currentStep === "name") {
      const [firstName, lastName] = value.split(" ");
      setFormData((prev) => ({
        ...prev,
        firstName: firstName || "",
        lastName: lastName || "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [stepToFormKey[currentStep]]: value }));
    }

    const steps: FormStep[] = [
      "vehicle",
      "stage",
      "payment",
      "credit",
      "email",
      "name",
      "phone",
      "success",
    ];
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: FormStep[] = [
      "vehicle",
      "stage",
      "payment",
      "credit",
      "email",
      "name",
      "phone",
      "success",
    ];
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleSubmit = async () => {
    console.log("Starting form submission");
    setIsSubmitting(true);
    setErrors({});

    // Validate all required fields
    if (
      !formData.vehicleType ||
      !formData.stage ||
      !formData.payment ||
      !formData.creditScore ||
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone
    ) {
      console.log("Missing required fields:", formData);
      setErrors({ form: "Please fill in all required fields" });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Submitting form data:", formData);
      const response = await submitForm({
        vehicleType: formData.vehicleType,
        stage: formData.stage,
        payment: formData.payment,
        creditScore: formData.creditScore,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
      });
      console.log("Form submission response:", response);

      if (!response.success) {
        if (response.validationErrors) {
          console.log("Validation errors:", response.validationErrors);
          setErrors(response.validationErrors);
          return;
        }
        throw new Error(response.error);
      }

      console.log("Form submitted successfully");
      // Show success step
      setCurrentStep("success");
      setShowConfetti(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        form: "An error occurred while submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps: FormStep[] = [
    "vehicle",
    "stage",
    "payment",
    "credit",
    "email",
    "name",
    "phone",
    "success",
  ];

  const getProgress = () => {
    return Math.round(
      ((steps.indexOf(currentStep) + 1) / (steps.length - 1)) * 100
    );
  };

  const vehicleIcons = {
    SUV: <Image src={suvImg} alt="SUV" width={100} height={100} />,
    Truck: <Image src={truckImg} alt="Truck" width={100} height={100} />,
    Car: <Image src={sedanImg} alt="Car" width={100} height={100} />,
    Van: <Image src={vanImg} alt="Van" width={100} height={100} />,
    "No Preference": <BsMinecartLoaded className="w-8 h-8" />,
  };

  const stageIcons = {
    "Ready to buy": <MdShoppingCart className="w-8 h-8" />,
    "Getting serious": <FaHandshake className="w-8 h-8" />,
    "Looking around": <HiMagnifyingGlass className="w-8 h-8" />,
    Daydreaming: <GiDreamCatcher className="w-8 h-8" />,
  };

  const NavigationControls = ({
    onNext,
    showContinue = true,
  }: {
    onNext?: () => void;
    showContinue?: boolean;
  }) => (
    <div className="flex flex-col gap-4">
      {showContinue && onNext && (
        <button
          onClick={onNext}
          disabled={isSubmitting}
          className="w-full bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Submitting...
            </div>
          ) : (
            "Continue"
          )}
        </button>
      )}
      {errors.form && (
        <p className="text-red-500 text-sm text-center">{errors.form}</p>
      )}
    </div>
  );

  const BackButton = () =>
    currentStep !== "vehicle" && (
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-800 bg-white hover:bg-gray-50 px-4 py-2 rounded-xl shadow-lg transition-all duration-200 font-semibold text-lg"
      >
        <IoArrowBack className="w-6 h-6" />
        <span>Back</span>
      </button>
    );

  const renderStep = () => {
    switch (currentStep) {
      case "vehicle":
        return (
          <div className="space-y-6 relative">
            <BackButton />
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-12 pt-20 rounded-3xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full transform translate-x-32 -translate-y-24 opacity-50" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 rounded-full transform -translate-x-24 translate-y-16 opacity-50" />
              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-center mb-6 leading-tight">
                  Find Your <br /> Perfect Match
                </h2>
                <p className="text-center text-orange-100 text-xl mb-2">
                  What type of vehicle excites you?
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(vehicleIcons).map(([type, icon]) => (
                <button
                  key={type}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, vehicleType: type }));
                    handleNext(type);
                  }}
                  className="group relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border-2 border-gray-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative flex flex-col items-center gap-4">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-900 text-center">
                      {type}
                    </span>
                    <div className="h-1 w-10 bg-orange-500 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </button>
              ))}
            </div>
            <NavigationControls showContinue={false} />
          </div>
        );

      case "stage":
        return (
          <div className="space-y-6 relative">
            <BackButton />
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 pt-20 rounded-3xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full transform translate-x-32 -translate-y-24 opacity-50" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full transform -translate-x-24 translate-y-16 opacity-50" />
              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-center mb-6 leading-tight">
                  Your Car Buying <br /> Adventure
                </h2>
                <p className="text-center text-blue-100 text-xl">
                  Tell us where you are in your journey
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(stageIcons).map(([stage, icon], index) => (
                <button
                  key={stage}
                  onClick={() => handleNext(stage)}
                  className="group relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border-2 border-gray-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <div>
                      <span className="text-xl font-bold text-gray-900 block mb-2">
                        {stage}
                      </span>
                      <span className="text-sm text-gray-600 block">
                        {stage === "Ready to buy" &&
                          "You've done your research and ready for the next step"}
                        {stage === "Getting serious" &&
                          "You're narrowing down your options and crunching numbers"}
                        {stage === "Looking around" &&
                          "You're exploring possibilities and gathering information"}
                        {stage === "Daydreaming" &&
                          "You're imagining your future ride and what's possible"}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <NavigationControls showContinue={false} />
          </div>
        );

      case "payment":
        return (
          <div className="space-y-6 relative">
            <BackButton />
            <div className="bg-green-500 p-8 pt-20 rounded-[32px] text-white">
              <h2 className="text-4xl font-bold text-center mb-4">
                Smart Financing That Fits
              </h2>
              <p className="text-center text-white text-xl">
                What monthly payment works best for you?
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  amount: "Under $300",
                  period: "/month",
                  description: "Perfect for budget-conscious buyers",
                },
                {
                  amount: "$300 - $399",
                  period: "/month",
                  description: "Great value for quality vehicles",
                },
                {
                  amount: "$400 - $499",
                  period: "/month",
                  description: "Popular choice for newer models",
                },
                {
                  amount: "$500 - $649",
                  period: "/month",
                  description: "Premium vehicles within reach",
                },
              ].map((option) => (
                <button
                  key={option.amount}
                  onClick={() => handleNext(option.amount)}
                  className="w-full bg-white hover:bg-green-50/50 group transition-all duration-300"
                >
                  <div className="flex items-center gap-6 p-6 rounded-2xl border border-gray-100">
                    <div className="bg-green-100/50 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                      <BsCreditCard2FrontFill className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-semibold text-gray-900">
                          {option.amount}
                        </span>
                        <span className="text-gray-500">{option.period}</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <BsCarFrontFill className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <NavigationControls showContinue={false} />
          </div>
        );

      case "credit":
        return (
          <div className="space-y-6 relative">
            <BackButton />
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-12 pt-20 rounded-3xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full transform translate-x-32 -translate-y-24 opacity-50" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full transform -translate-x-24 translate-y-16 opacity-50" />
              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-center mb-6 leading-tight">
                  Credit Score? <br /> No Stress!
                </h2>
                <p className="text-center text-purple-100 text-xl">
                  We work with all credit situations
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                [
                  "Excellent (720+)",
                  "Prime rates and top-tier options available",
                ],
                ["Good (680 - 719)", "Competitive rates and great choices"],
                ["Fair (600 - 679)", "Flexible options to fit your needs"],
                ["Poor (Below 600)", "We have programs for every situation"],
                ["I'm not sure", "No worries! We'll help you figure it out"],
              ].map(([score, desc]) => (
                <button
                  key={score}
                  onClick={() => handleNext(score)}
                  className="group relative bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-2 border-gray-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative flex items-center gap-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                      <BsCheckCircleFill className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xl font-bold text-gray-900 block">
                        {score}
                      </span>
                      <span className="text-sm text-gray-600">{desc}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <NavigationControls showContinue={false} />
          </div>
        );

      case "email":
        return (
          <div className="space-y-6 relative">
            <BackButton />
            <div className="bg-[#FFF8F1] p-8 pt-20 rounded-[32px]">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 leading-tight">
                What's your <span className="text-orange-500">email</span>?
              </h2>
              <p className="text-center text-gray-600 mb-8 text-lg">
                We'll send your approval details here 📧
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full p-4 pl-12 bg-black/90 border-0 rounded-2xl text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 ${
                    errors.email ? "ring-2 ring-red-500" : ""
                  }`}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  value={formData.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Your information is secure. Continuing here means you agree to
                our privacy policy.
              </p>
              <NavigationControls onNext={() => handleNext(formData.email)} />
            </div>
          </div>
        );

      case "name":
        return (
          <div className="space-y-6 relative">
            <BackButton />
            <div className="bg-[#FFF8F1] p-8 pt-20 rounded-[32px]">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 leading-tight">
                What's your <span className="text-orange-500">name</span>?
              </h2>
              <p className="text-center text-gray-600 mb-8 text-lg">
                Let's get to know each other 👋
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
                  <input
                    type="text"
                    placeholder="First Name"
                    className={`w-full p-4 pl-12 bg-black/90 border-0 rounded-2xl text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 ${
                      errors.name?.includes("First")
                        ? "ring-2 ring-red-500"
                        : ""
                    }`}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    value={formData.firstName}
                  />
                </div>
                <div className="relative">
                  <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`w-full p-4 pl-12 bg-black/90 border-0 rounded-2xl text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 ${
                      errors.name?.includes("Last") ? "ring-2 ring-red-500" : ""
                    }`}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    value={formData.lastName}
                  />
                </div>
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm text-center mb-4">
                  {errors.name}
                </p>
              )}
              <NavigationControls
                onNext={() =>
                  handleNext(`${formData.firstName} ${formData.lastName}`)
                }
              />
            </div>
          </div>
        );

      case "phone":
        return (
          <div className="space-y-6 relative">
            <BackButton />
            <div className="bg-[#FFF8F1] p-8 pt-20 rounded-[32px]">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 leading-tight">
                What's your{" "}
                <span className="text-orange-500">phone number</span>?
              </h2>
              <p className="text-center text-gray-600 mb-8 text-lg">
                We'll text you updates about your approval 📱
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full p-4 pl-12 bg-black/90 border-0 rounded-2xl text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 ${
                    errors.phone ? "ring-2 ring-red-500" : ""
                  }`}
                  onChange={(e) => {
                    const inputValue = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    setFormData((prev) => ({
                      ...prev,
                      phone: inputValue,
                    }));
                  }}
                  value={
                    formData.phone
                      ? formData.phone.replace(
                          /(\d{3})(\d{3})(\d{4})/,
                          "($1) $2-$3"
                        )
                      : ""
                  }
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                By continuing, I agree to receive messages and updates from
                RightWay. Message & data rates may apply.
              </p>
              <NavigationControls onNext={() => handleNext(formData.phone)} />
            </div>
          </div>
        );

      case "success":
        return (
          <div className="text-center">
            <ReactConfetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={500}
              gravity={0.2}
            />
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-12 rounded-3xl shadow-lg text-white relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full transform translate-x-32 -translate-y-24 opacity-50" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500 rounded-full transform -translate-x-24 translate-y-16 opacity-50" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <BsCheckCircleFill className="w-16 h-16 text-teal-600" />
                </div>
                <h2 className="text-5xl font-bold mb-6">You're All Set!</h2>
                <p className="text-xl text-teal-100 mb-8">
                  Your pre-approval application is in good hands. We'll be in
                  touch within 24 hours.
                </p>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-3">
                    Want faster approval?
                  </h3>
                  <p className="text-lg mb-4">
                    Complete your full application now to speed up the process!
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://secure.carsforsale.com/ssfinance.aspx?jesxel=726917",
                        "_blank"
                      )
                    }
                    className="bg-white text-teal-600 px-8 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-colors duration-200"
                  >
                    Complete Full Application
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
              <Link href="/inventory">
                <button
                  onClick={() => router.push("/inventory")}
                  className="bg-teal-600 text-white p-6 rounded-2xl hover:bg-teal-700 transition-colors duration-200 group"
                >
                  <BsCarFrontFill className="w-8 h-8 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-lg block">
                    Browse Inventory
                  </span>
                </button>
              </Link>
              <Link href="/">
                <button
                  onClick={() => router.push("/")}
                  className="bg-gray-100 text-gray-900 p-6 rounded-2xl hover:bg-gray-200 transition-colors duration-200 group"
                >
                  <MdHome className="w-8 h-8 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-lg block">Return Home</span>
                </button>
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {currentStep !== "success" && (
        <div className="mb-12">
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ease-out"
              style={{ width: `${getProgress()}%` }}
            />
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>
              Step {steps.indexOf(currentStep) + 1} of {steps.length - 1}
            </span>
            <span>{getProgress()}% Complete</span>
          </div>
        </div>
      )}
      {renderStep()}
    </div>
  );
}
