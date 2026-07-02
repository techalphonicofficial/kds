import React from "react";
import { Phone, MessageSquare } from "lucide-react";

/**
 * Floating action buttons displayed only on mobile devices.
 * Includes a phone contact and a WhatsApp chat button.
 */
export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-3 lg:hidden z-[9999]">
      {/* Phone Call */}
      <a
        href="tel:+1234567890"
        className="p-3 bg-[#1565c0] rounded-full text-white shadow-lg hover:bg-[#0d47a1] transition-colors"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-[#25D366] rounded-full text-white shadow-lg hover:bg-[#128C7E] transition-colors"
        aria-label="WhatsApp chat"
      >
        <MessageSquare size={20} />
      </a>
    </div>
  );
}
