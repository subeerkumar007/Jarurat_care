export default function HeroBanner() {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/banner_cancer.jpg')" }}
    >
      {/* overlay for smooth effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gray-900">Together, We Are</span>
          <br />
          <span className="text-pink-500">Stronger</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Spreading awareness, offering support, and building hope for everyone
          affected by cancer. You are not alone in this journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors">
            Reach Out to Us
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md border border-gray-200 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
