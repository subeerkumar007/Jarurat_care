export default function Footer() {
  return (
    <footer className="w-full bg-pink-100 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-pink-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
          </svg>
          <span className="text-gray-900 font-semibold">
            Cancer Awareness & Support
          </span>
        </div>
        <div className="text-gray-700 text-sm">
          © 2025 Together We Are Stronger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
