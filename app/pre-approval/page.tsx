"use client";

import { PreApprovalForm } from "@/components/PreApproval/PreApprovalForm";
import { motion } from "framer-motion";

export default function PreApprovalPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <PreApprovalForm />
      </motion.div>
    </main>
  );
}
