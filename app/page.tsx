export const dynamic = 'force-dynamic'

export default function HomePage() {
  const destinations = [
    "UAE",
    "Europe",
    "India",
    "Nepal",
    "Thailand",
    "Singapore",
    "Malaysia",
  ];

  return (
    <main className="min-h-screen bg-[#07111F] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Ajanta Travel
            </h1>
          </div>

          <button className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black">
            Coming Soon
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
          New Travel Experiences Launching Soon
        </div>

        <h2 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Explore The World <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Without Limits
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
          We are preparing unforgettable travel experiences, curated tours,
          holiday packages, and seamless journeys across some of the world's
          most loved destinations.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300">
            Notify Me
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-4xl font-bold text-cyan-400">7+</h3>
            <p className="mt-2 text-gray-300">Destinations Supported</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-4xl font-bold text-cyan-400">Coming</h3>
            <p className="mt-2 text-gray-300">Custom Tour Experiences</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
            <p className="mt-2 text-gray-300">Future Travel Assistance</p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-cyan-400 uppercase tracking-[0.3em]">
            Destinations
          </p>

          <h2 className="text-4xl font-bold">
            Countries We Will Support
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Discover handpicked travel experiences across iconic cities,
            mountains, beaches, cultures, and luxury escapes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((country) => (
            <div
              key={country}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 transition duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                ✈️
              </div>

              <h3 className="text-2xl font-semibold">{country}</h3>

              <p className="mt-3 text-gray-400">
                Curated travel experiences and guided tours coming soon for{" "}
                {country}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur lg:grid-cols-2">
          <div>
            <p className="mb-3 text-cyan-400 uppercase tracking-[0.3em]">
              About Us
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              A New Era Of Smart & Comfortable Travel
            </h2>
          </div>

          <div className="space-y-6 text-gray-300">
            <p>
              Our mission is to create memorable travel experiences with
              seamless planning, premium support, and curated destinations for
              every kind of traveler.
            </p>

            <p>
              Whether you're looking for luxury vacations, family trips,
              adventure tours, or cultural escapes — we're building a platform
              designed to simplify your journey from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 backdrop-blur">
          <h2 className="text-4xl font-bold">
            Be The First To Know When We Launch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Join our waitlist and stay updated with destination launches,
            exclusive travel updates, and future tour announcements.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/10 bg-white/10 px-6 outline-none placeholder:text-gray-400 focus:border-cyan-400"
            />

            <button className="h-14 rounded-full bg-cyan-400 px-8 font-semibold text-black transition hover:bg-cyan-300">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-400 md:flex-row">
          <p>© 2026 Ajanta Travel. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>

            <a href="#" className="transition hover:text-white">
              Facebook
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
