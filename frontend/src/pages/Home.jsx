import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-900">
          FBC Alumni
        </div>
        <div className="flex items-center gap-8">
          <a href="/directory" className="text-sm text-gray-500 hover:text-gray-900">Directory</a>
          <a href="/events" className="text-sm text-gray-500 hover:text-gray-900">Events</a>
          <a href="/donate" className="text-sm text-gray-500 hover:text-gray-900">Give back</a>
          <a href="/news" className="text-sm text-gray-500 hover:text-gray-900">News</a>
          <button
            onClick={() => navigate('/signup')}
            className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700">
            Join now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center px-8 py-20">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-4 py-1 rounded-full">
          Est. 1827 · Freetown, Sierra Leone
        </span>
        <h1 className="text-5xl font-semibold text-gray-900 mt-6 mb-4">
          Welcome home, <br /> Fourah Bay family
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          Connect with 5,000+ FBC graduates worldwide. Find mentors,
          attend events, and give back to the college that shaped you.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mb-16 flex-wrap">
          <button
            onClick={() => navigate('/signup')}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-700">
            Create your profile
          </button>
          <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-lg text-sm hover:bg-gray-50">
            Continue with Google
          </button>
          <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-lg text-sm hover:bg-gray-50">
            Continue with LinkedIn
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-16 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-900">5,000+</div>
            <div className="text-sm text-gray-500 mt-1">Alumni worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-900">42</div>
            <div className="text-sm text-gray-500 mt-1">Countries represented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-900">199</div>
            <div className="text-sm text-gray-500 mt-1">Years of excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-900">320+</div>
            <div className="text-sm text-gray-500 mt-1">Open mentors</div>
          </div>
        </div>
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-3 border-t border-gray-200">
        <div className="p-8 border-r border-gray-200">
          <div className="w-10 h-10 bg-gray-100 rounded-lg mb-4"></div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Connect & network</h3>
          <p className="text-sm text-gray-500">Search alumni by faculty, year, or profession. Message anyone in the directory.</p>
        </div>
        <div className="p-8 border-r border-gray-200">
          <div className="w-10 h-10 bg-gray-100 rounded-lg mb-4"></div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Events & reunions</h3>
          <p className="text-sm text-gray-500">RSVP to gatherings in Freetown and join virtually from anywhere in the world.</p>
        </div>
        <div className="p-8">
          <div className="w-10 h-10 bg-gray-100 rounded-lg mb-4"></div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Give back</h3>
          <p className="text-sm text-gray-500">Fund scholarships for the next generation of FBC students. Donate in any currency.</p>
        </div>
      </div>

      {/* Diaspora Strip */}
      <div className="bg-blue-50 px-8 py-5 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-blue-900">
            Living abroad? You still belong here.
          </div>
          <div className="text-xs text-blue-700 mt-1">
            Join 1,200+ FBC graduates in the UK, US, Canada and beyond
          </div>
        </div>
        <button className="bg-blue-900 text-blue-50 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800">
          Join the diaspora network
        </button>
      </div>

    </div>
  );
}

export default Home;