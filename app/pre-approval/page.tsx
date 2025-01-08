import { PreApprovalForm } from "@/components/PreApproval/PreApprovalForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Pre-Approved | RightWay Auto",
  description:
    "Get pre-approved for your dream car in minutes. Quick and easy approval process with competitive rates.",
};

export default function PreApprovalPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <PreApprovalForm />
      </div>
    </main>
  );
}
