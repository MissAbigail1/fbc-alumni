import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, Globe } from 'lucide-react';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-fbc-green text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-fbc-gold mt-2 text-lg">Fourah Bay College Alumni Association</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Main Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-fbc-green mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The Fourah Bay College Alumni Association exists to promote the best interests and welfare of Fourah Bay College, 
            to fully acquaint the membership with the progress and needs of their Alma Mater, and to encourage loyalty to the 
            University and closer bonds of fellowship among its alumni.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-fbc-gold">
            <Users size={40} className="text-fbc-green mb-4" />
            <h3 className="text-xl font-bold text-fbc-green mb-3">Community</h3>
            <p className="text-gray-700 leading-relaxed">
              Connect with thousands of FBC alumni worldwide. Build lasting friendships and professional networks 
              across six continents.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-fbc-gold">
            <Target size={40} className="text-fbc-green mb-4" />
            <h3 className="text-xl font-bold text-fbc-green mb-3">Support</h3>
            <p className="text-gray-700 leading-relaxed">
              Help your Alma Mater thrive through mentorship, fundraising, and active engagement. 
              Together, we shape FBC's future.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-fbc-gold">
            <Globe size={40} className="text-fbc-green mb-4" />
            <h3 className="text-xl font-bold text-fbc-green mb-3">Growth</h3>
            <p className="text-gray-700 leading-relaxed">
              Advance your career through exclusive events, professional development, and alumni 
              mentorship programs.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-fbc-green mb-6">About Fourah Bay College</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 1827, Fourah Bay College is the oldest university in Sub-Saharan Africa. Located in Freetown, 
            Sierra Leone, it has a distinguished history of academic excellence and has produced generations of 
            leaders, professionals, and innovators who have contributed significantly to Sierra Leone and the world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The College's mission of advancing knowledge, fostering critical thinking, and developing responsible 
            citizens continues to inspire its alumni to make meaningful contributions to their communities and society at large.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-fbc-gold/10 rounded-lg p-8 mb-8 border border-fbc-gold">
          <h3 className="text-2xl font-bold text-fbc-green mb-6">Learn More</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/alumni-executives')}
              className="bg-white hover:bg-gray-50 text-fbc-green font-semibold py-3 px-6 rounded-lg border-2 border-fbc-green transition-colors"
            >
              Alumni Executives
            </button>
            <button
              onClick={() => navigate('/constitutional-bylaws')}
              className="bg-white hover:bg-gray-50 text-fbc-green font-semibold py-3 px-6 rounded-lg border-2 border-fbc-green transition-colors"
            >
              Constitution & Bylaws
            </button>
            <button
              onClick={() => navigate('/history')}
              className="bg-white hover:bg-gray-50 text-fbc-green font-semibold py-3 px-6 rounded-lg border-2 border-fbc-green transition-colors"
            >
              Our History
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-fbc-green to-fbc-green/80 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Join Our Community</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Whether you're a recent graduate or celebrating decades since you left campus, 
            there's a place for you in the FBC Alumni Network.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-fbc-gold text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-all"
          >
            Create Your Profile Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
