import React from 'react';

export default function AutoRepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auto-repair-layout">
      {/* Auto Repair Navigation could be added here */}
      <main>{children}</main>
    </div>
  );
} 