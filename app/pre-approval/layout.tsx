import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Pre-Approved | KARS AUTO",
  description:
    "Get pre-approved for your dream car in minutes. Quick and easy approval process with competitive rates.",
};

export default function PreApprovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
