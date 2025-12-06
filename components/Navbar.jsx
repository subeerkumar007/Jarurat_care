export default function Navbar() {
  return (
    <nav className="w-full bg-white/60 backdrop-blur-md dark:bg-black/60 border-b">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-pink-600">
          Cancer Awareness & Support
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-300">
          Together we care
        </div>
      </div>
    </nav>
  );
}
