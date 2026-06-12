import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, Globe } from 'lucide-react';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Immersive Hero Header */}
      <div className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1525926477800-7a0e71c6dc00?w=1600&q=80" 
          alt="About FBC" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center w-full px-6 flex flex-col items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-6 text-xs font-bold uppercase tracking-widest text-white/80 shrink-0"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
          <div className="inline-flex items-center gap-2 bg-fbc-green/20 text-fbc-green px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-fbc-green/30 backdrop-blur-md">
             MISSION & VISION
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">About Us</h1>
          <p className="text-fbc-gold text-lg mt-4 font-bold">Fourah Bay College Alumni Association</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Main Section */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-8 py-10 mb-8 border border-gray-50">
          <h2 className="text-3xl font-black text-fbc-green mb-6 tracking-tight">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed text-lg mb-2">
            The Fourah Bay College Alumni Association exists to promote the best interests and welfare of Fourah Bay College, 
            to fully acquaint the membership with the progress and needs of their Alma Mater, and to encourage loyalty to the 
            University and closer bonds of fellowship among its alumni.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border-t-[6px] border-t-fbc-gold hover:-translate-y-1 transition-transform cursor-pointer">
            <Users size={32} className="text-fbc-green mb-6" />
            <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Community</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Connect with thousands of <strong className="text-fbc-green">FBC alumni worldwide</strong>. Build lasting friendships and professional networks 
              across six continents.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border-t-[6px] border-t-fbc-gold hover:-translate-y-1 transition-transform cursor-pointer">
            <Target size={32} className="text-fbc-green mb-6" />
            <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Support</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Help your Alma Mater thrive through mentorship, fundraising, and active engagement. 
              Together, we shape FBC's future.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border-t-[6px] border-t-fbc-gold hover:-translate-y-1 transition-transform cursor-pointer">
            <Globe size={32} className="text-fbc-green mb-6" />
            <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Growth</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Advance your career through exclusive events, professional development, and alumni 
              mentorship programs.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-8 py-10 mb-8 border border-gray-50">
          <h2 className="text-3xl font-black text-fbc-green mb-6 tracking-tight">About Fourah Bay College</h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-lg">
            Founded in 1827, Fourah Bay College is the oldest university in Sub-Saharan Africa. Located in Freetown, 
            Sierra Leone, it has a distinguished history of academic excellence and has produced generations of 
            leaders, professionals, and innovators who have contributed significantly to Sierra Leone and the world.
          </p>
          <p className="text-gray-500 leading-relaxed text-lg">
            The College's mission of advancing knowledge, fostering critical thinking, and developing responsible 
            citizens continues to inspire its alumni to make meaningful contributions to their communities and society at large.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-fbc-gold/5 rounded-3xl p-10 mb-12 border border-fbc-gold/20">
          <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Learn More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/constitutional-bylaws')}
              className="bg-white hover:border-fbc-green text-gray-900 font-bold py-4 px-6 rounded-2xl border border-gray-200 transition-colors shadow-sm hover:shadow-md flex items-center justify-between"
            >
              Constitution & Bylaws <span className="text-fbc-green">→</span>
            </button>
            <button
              onClick={() => navigate('/history')}
              className="bg-white hover:border-fbc-green text-gray-900 font-bold py-4 px-6 rounded-2xl border border-gray-200 transition-colors shadow-sm hover:shadow-md flex items-center justify-between"
            >
              Our History <span className="text-fbc-green">→</span>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-fbc-green text-white rounded-[40px] px-8 py-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight relative z-10">Join Our Community</h3>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
            Whether you're a recent graduate or celebrating decades since you left campus, 
            there's a place for you in the FBC Alumni Network.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-fbc-gold text-white font-black px-10 py-5 rounded-2xl hover:bg-yellow-600 transition-all shadow-xl hover:-translate-y-1 active:scale-95 whitespace-nowrap relative z-10"
          >
            Create Your Profile Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
