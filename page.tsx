export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 bg-white border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-slate-900">MahesStore</span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600">Home</a>
            <a href="#" className="text-slate-600">Courses</a>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg">
              Login
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Belajar Skill Baru, Kapan Saja
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Kursus praktis untuk membantumu berkembang di bidang teknologi dan desain.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Jelajahi Kursus
        </button>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Kursus Pilihan</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full mb-4">
              Populer
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Fundamental Pengembangan Web
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Kuasai HTML, CSS, dan JavaScript dari nol hingga siap membangun situs sendiri.
            </p>
            <p className="font-bold text-slate-900 mb-4">Rp 349.000</p>
            <button className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-blue-600">
              Beli / Ikuti
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full mb-4">
              Pemula
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Dasar Analisis Data dengan Python
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Belajar mengolah dan memvisualisasikan data menggunakan Python dan Pandas.
            </p>
            <p className="font-bold text-slate-900 mb-4">Rp 299.000</p>
            <button className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-blue-600">
              Beli / Ikuti
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <span className="inline-block bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full mb-4">
              Terlaris
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              UI/UX Design untuk Pemula
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Rancang antarmuka yang intuitif dan pelajari prinsip desain yang teruji.
            </p>
            <p className="font-bold text-slate-900 mb-4">Rp 279.000</p>
            <button className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-blue-600">
              Beli / Ikuti
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}