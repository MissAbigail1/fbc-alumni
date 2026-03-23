import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero Section */}
      <div className="relative min-h-screen">

        {/* Background Image */}
        <img
          src="/fbc-building.png"
          alt="FBC Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between px-10 py-6">
          <img
            src="/fbc-alumni-logo.png"
            alt="FBC Alumni Logo"
            className="h-24 w-auto object-contain"
          />
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('/directory')} className="text-white text-sm hover:text-fbc-gold transition-colors">Directory</button>
            <button onClick={() => navigate('/events')} className="text-white text-sm hover:text-fbc-gold transition-colors">Events</button>
            <button onClick={() => navigate('/donate')} className="text-white text-sm hover:text-fbc-gold transition-colors">Give back</button>
            <button onClick={() => navigate('/news')} className="text-white text-sm hover:text-fbc-gold transition-colors">News</button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-fbc-gold text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all">
              Join now
            </button>
          </div>
        </nav>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-24">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-white/20">
            Est. 1827 · Fourah Bay College · Freetown, Sierra Leone
          </span>
          <h1 className="text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Connecting the{' '}
            <span className="text-fbc-gold">Fourah Bay</span>
            <br />family worldwide.
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">
            Join 5,000+ FBC graduates across 42 countries. Find mentors,
            attend reunions, and give back to the college that shaped you.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="bg-fbc-gold text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-yellow-600 transition-all flex items-center gap-2 text-sm">
              Create your profile →
            </button>
            <button
              onClick={() => navigate('/directory')}
              className="bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-8 py-3.5 rounded-lg border border-white/30 hover:bg-white/25 transition-all">
              Browse alumni
            </button>
          </div>
        </div>

        {/* Bottom stat chips */}
        <div className="absolute bottom-10 left-10 z-10 flex gap-4">
          {[
            { val: '5,000+', label: 'Alumni worldwide' },
            { val: '42', label: 'Countries' },
            { val: '320+', label: 'Open mentors' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white">
              <div className="text-xl font-bold">{stat.val}</div>
              <div className="text-xs text-white/70 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Content Section Below Hero */}
      <div className="px-16 py-20 grid grid-cols-2 gap-16 items-center border-b border-gray-100">
        <div>
          <span className="text-fbc-green text-xs font-semibold uppercase tracking-widest mb-4 block">
            About the platform
          </span>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            By bringing FBC graduates together, we make it easy to
            <span className="text-fbc-green"> connect, mentor</span> and
            <span className="text-fbc-gold"> give back.</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Fourah Bay College has been shaping Africa's finest minds since 1827.
            This platform exists to keep that community alive — connecting
            graduates across generations, faculties, and continents.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-fbc-green text-white font-semibold px-7 py-3 rounded-lg hover:bg-fbc-green-dark transition-all text-sm flex items-center gap-2 w-fit">
            Join the community →
          </button>
        </div>
        <div className="relative">
          <img
            src="fbc-graduates.jpeg"
            alt="Graduates"
            className="rounded-2xl w-full h-80 object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card-hover px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-fbc-green-light rounded-lg flex items-center justify-center text-fbc-green font-bold text-lg">
              🎓
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">199 years</div>
              <div className="text-xs text-gray-500">of excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Feature Cards */}
      <div className="px-16 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Everything you need to stay connected
        </h2>
        <p className="text-gray-500 text-sm text-center mb-10">
          One platform for every FBC graduate — wherever you are in the world
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: '24/7 networking', desc: 'Connect with FBC graduates across all faculties, graduation years and countries anytime.', link: 'Browse the directory', page: '/directory' },
            { title: 'Events & reunions', desc: 'RSVP to gatherings in Freetown or join virtually from anywhere in the world.', link: 'See upcoming events', page: '/events' },
            { title: 'Give back to FBC', desc: 'Fund scholarships for the next generation of FBC students. Donate in any currency.', link: 'Support a student', page: '/donate' },
          ].map((card, i) => (
            <div
              key={i}
              onClick={() => navigate(card.page)}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-fbc-green-light rounded-lg mb-4"></div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{card.desc}</p>
              <span className="text-sm font-semibold text-fbc-green group-hover:underline">
                {card.link} ↗
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Diaspora Strip */}
      <div className="bg-fbc-green mx-16 mb-16 rounded-2xl px-10 py-10 flex items-center justify-between">
        <div>
          <div className="text-white text-2xl font-bold mb-2">
            Living abroad? You still belong here.
          </div>
          <div className="text-white/70 text-sm">
            Join 1,200+ FBC graduates in the UK, US, Canada and beyond
          </div>
        </div>
        <button
          onClick={() => navigate('/signup')}
          className="bg-fbc-gold text-white font-semibold px-7 py-3 rounded-lg hover:bg-yellow-600 transition-colors whitespace-nowrap">
          Join the diaspora network →
        </button>
      </div>

    </div>
  );
}

export default Home;