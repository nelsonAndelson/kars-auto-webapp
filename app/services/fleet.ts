import emailjs from '@emailjs/browser';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { FleetFormData } from '../types/fleet';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export const submitFleetForm = async (data: FleetFormData) => {
  try {
    // 1. Format data for EmailJS
    const emailParams = {
      to_name: `${data.fleetType} Fleet (${data.vehicleCount} vehicles)`,
      from_name: data.businessName,
      message: `Needs: ${data.maintenanceNeeds ? 'Yes' : 'No'} | Mobile: ${data.mobileService ? 'Yes' : 'No'} | Contact: ${data.email}`
    };

    // 2. Send email notification
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailParams,
      EMAILJS_PUBLIC_KEY
    );

    // 3. Store in Firebase
    const docRef = await addDoc(collection(db, 'fleet_leads'), {
      ...data,
      timestamp: new Date(),
      status: 'new'
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
}; 