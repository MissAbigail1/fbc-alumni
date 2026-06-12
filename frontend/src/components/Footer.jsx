import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-fbc-green text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Intro */}
        <div className="col-span-1 md:col-span-1">
          <img src="/fbc-alumni-logo.png" alt="FBC Alumni" className="h-16 w-auto mb-6 bg-white rounded-lg p-2 filter" />
          <p className="text-white/90 text-base leading-relaxed mb-6">
            Connecting generations of Fourah Bay College graduates worldwide. 
            Empowering the next era of Sierra Leonean trailblazers.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fbc-gold transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fbc-gold transition-colors">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fbc-gold transition-colors">
              <Linkedin size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fbc-gold transition-colors">
              <Instagram size={18} />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-fbc-gold font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><button onClick={() => navigate('/about')} className="text-white/90 hover:text-white hover:underline text-base transition-all">About Us</button></li>
            <li><button onClick={() => navigate('/history')} className="text-white/90 hover:text-white hover:underline text-base transition-all">Our History</button></li>
            <li><button onClick={() => navigate('/events')} className="text-white/90 hover:text-white hover:underline text-base transition-all">Events & Reunions</button></li>
            <li><button onClick={() => navigate('/chapters')} className="text-white/90 hover:text-white hover:underline text-base transition-all">Alumni Chapters</button></li>
            <li><button onClick={() => navigate('/directory')} className="text-white/90 hover:text-white hover:underline text-base transition-all">Alumni Directory</button></li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h4 className="text-fbc-gold font-bold uppercase tracking-widest text-sm mb-6">Legal & Support</h4>
          <ul className="space-y-4">
            <li><button onClick={() => navigate('/constitutional-bylaws')} className="text-white/90 hover:text-white hover:underline text-base transition-all">Constitution & By-Laws</button></li>
            <li><button className="text-white/90 hover:text-white hover:underline text-base transition-all">Privacy Policy</button></li>
            <li><button className="text-white/90 hover:text-white hover:underline text-base transition-all">Terms of Service</button></li>
            <li><button className="text-white/90 hover:text-white hover:underline text-base transition-all">Contact Support</button></li>
          </ul>
        </div>

        {/* Contact Info & Newsletter */}
        <div>
          <h4 className="text-fbc-gold font-bold uppercase tracking-widest text-sm mb-6">Get in Touch</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-fbc-gold shrink-0 mt-1" />
              <span className="text-white/90 text-base leading-relaxed">Fourah Bay College Campus,<br/>Mount Aureol, Freetown,<br/>Sierra Leone</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-fbc-gold shrink-0" />
              <span className="text-white/90 text-base">+232 76 123456</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-fbc-gold shrink-0" />
              <button className="text-white/90 hover:underline text-base">alumni@fbc.edu.sl</button>
            </li>
          </ul>
          
          <div className="mt-8 border border-white/30 rounded-xl p-1.5 flex bg-white/5 focus-within:border-white focus-within:bg-white/10 transition-all">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent text-base text-white px-4 py-2 w-full focus:outline-none placeholder-white/50"
            />
            <button className="bg-fbc-gold text-white px-4 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} Fourah Bay College Alumni Association. All rights reserved.
        </p>
        <p className="text-white/70 text-sm font-medium">
          Empowering the Pride of West Africa.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
