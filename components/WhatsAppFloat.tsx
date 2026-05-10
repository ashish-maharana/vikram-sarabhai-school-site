import { site } from "@/data/site";

const message = "Hi I want to know more about admissions";
const whatsappNumber = site.phones[0].replace(/\D/g, "");
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[80] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(37,211,102,0.35)] transition hover:scale-110 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:bottom-8 sm:right-8"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M16.04 3.2A12.73 12.73 0 0 0 5.2 22.6L3.5 28.8l6.35-1.66A12.73 12.73 0 1 0 16.04 3.2Zm0 2.15a10.58 10.58 0 1 1-5.38 19.68l-.38-.23-3.78.99 1.01-3.68-.25-.39A10.58 10.58 0 0 1 16.04 5.35Zm-4.1 4.98c-.23-.51-.47-.52-.69-.53h-.59c-.2 0-.53.08-.81.38-.28.31-1.06 1.04-1.06 2.53 0 1.49 1.09 2.93 1.24 3.13.15.2 2.1 3.36 5.18 4.58 2.56 1.01 3.08.81 3.64.76.56-.05 1.8-.74 2.05-1.45.25-.71.25-1.32.18-1.45-.08-.13-.28-.2-.58-.36-.31-.15-1.8-.89-2.08-.99-.28-.1-.49-.15-.69.15-.2.31-.79.99-.96 1.19-.18.2-.36.23-.66.08-.31-.15-1.29-.48-2.45-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.47.13-.63.14-.14.31-.36.46-.53.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.53-.08-.15-.67-1.65-.94-2.2Z" />
      </svg>
    </a>
  );
}

