import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MapPin, Users, Calendar, ChevronRight, Plus, ArrowLeft, Check, ShieldCheck, X, Clock } from 'lucide-react';

function Chapters() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeChapter, setActiveChapter] = useState(null);
  const [joinedChapters, setJoinedChapters] = useState(() => {
    const saved = localStorage.getItem('fbc_joined_chapter');
    return saved ? [saved] : [];
  });
  const [pendingChapters, setPendingChapters] = useState([]); // request sent, awaiting review
  const [joinModal, setJoinModal] = useState(null);
  const [joinReason, setJoinReason] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'requests'

  // Sync join state to localStorage
  const persistJoin = (chapterId) => {
    if (chapterId) {
      localStorage.setItem('fbc_joined_chapter', chapterId);
      setJoinedChapters([chapterId]);
    } else {
      localStorage.removeItem('fbc_joined_chapter');
      setJoinedChapters([]);
    }
  };

  const [connected, setConnected] = useState([]);
  const [showStartForm, setShowStartForm] = useState(false);
  const [startForm, setStartForm] = useState({ country: '', city: '', name: '', email: '', reason: '' });
  const [submitted, setSubmitted] = useState(false);

  // Mock: currently logged-in user is the president of the UK chapter
  const currentUser = { name: 'Dr. David Tucker', chapterPresidentOf: 'uk' };

  // Mock pending join requests for the UK chapter
  const [pendingRequests, setPendingRequests] = useState([
    { id: 101, name: 'Samuel Bangura', initials: 'SB', role: 'Software Engineer', year: '2018', location: 'Accra, Ghana', faculty: 'Engineering', avatarId: 7 },
    { id: 102, name: 'Ibrahim Koroma', initials: 'IK', role: 'Business Analyst', year: '2016', location: 'Lagos, Nigeria', faculty: 'Economics', avatarId: 11 },
    { id: 103, name: 'Fatima Kamara', initials: 'FK', role: 'Medical Doctor', year: '2010', location: 'Freetown, SL', faculty: 'Medicine', avatarId: 6 },
  ]);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [declinedRequests, setDeclinedRequests] = useState([]);

  const allMembers = [
    { id: 1, chapterId: 'sl', initials: 'MB', name: 'Mohamed Bangura', role: 'Senior Lawyer', year: '2008' },
    { id: 3, chapterId: 'sl', initials: 'PC', name: 'Prof. Patricia Cole', role: 'Retired Educator', year: '1985' },
    { id: 4, chapterId: 'sl', initials: 'AK', name: 'Aminata Koroma', role: 'NGO Analyst', year: '2022' },
    { id: 6, chapterId: 'sl', initials: 'FK', name: 'Fatima Kamara', role: 'Medical Doctor', year: '2010' },
    { id: 8, chapterId: 'sl', initials: 'MW', name: 'Mary Williams', role: 'Journalist', year: '2015' },
    { id: 10, chapterId: 'sl', initials: 'YC', name: 'Yvonne Cole', role: 'Architect', year: '2009' },
    { id: 2, chapterId: 'uk', initials: 'DT', name: 'Dr. David Tucker', role: 'Medical Consultant', year: '1999' },
    { id: 12, chapterId: 'uk', initials: 'RS', name: 'Rose Sesay', role: 'Nurse Practitioner', year: '2014' },
    { id: 9, chapterId: 'usa', initials: 'AB', name: 'Alpha Bah', role: 'Economist', year: '2012' },
    { id: 5, chapterId: 'usa', initials: 'JS', name: 'James Sesay', role: 'Civil Engineer', year: '2005' },
  ];

  const chapters = [
    {
      id: 'sl',
      name: 'Sierra Leone HQ',
      type: 'hq', // For special rendering
      flag: '🇸🇱',
      city: 'Freetown, SL',
      image: 'https://images.unsplash.com/photo-1528659515089-60d7c001f31f?q=80&w=1200&auto=format&fit=crop',
      members: 3200,
      established: 1827,
      eventsPerYear: 24,
      president: 'Prof. Francis Sesay',
      presidentInitials: 'FS',
      nextEvent: { title: 'FBC Founders Day Gala', date: 'April 12, 2026' },
      description: 'The founding branch and global headquarters of the Fourah Bay College Alumni Association.',
      mission: 'To serve as the gateway for all FBC alumni, preserving the heritage of sub-Saharan Africa\'s oldest university through coordinated global efforts.',
      activities: ['Annual Mary Kingsley Lecture Series', 'Central Scholarship Fund Management', 'Campus Infrastructure Restoration Projects', 'Global Reunion Coordination'],
      announcements: [
        { title: 'Founders Day Preparations', message: 'Join us for the final planning meeting this Friday at the Mary Kingsley Auditorium.', date: '20 Mar 2026' },
        { title: 'Scholarship Applications Open', message: 'We are now accepting applications for the 2026 Academic Excellence Fund.', date: '15 Mar 2026' }
      ],
      leadership: [
        { role: 'Chapter President', name: 'Prof. Francis Sesay', initials: 'FS', bg: 'bg-green-100', text: 'text-green-800' },
        { role: 'Chapter Secretary', name: 'Dr. Aisha Kamara', initials: 'AK', bg: 'bg-blue-100', text: 'text-blue-800' },
        { role: 'Chapter Treasurer', name: 'Ibrahim Bah', initials: 'IB', bg: 'bg-yellow-100', text: 'text-yellow-800' },
      ],
      upcomingEvents: [
        { title: 'FBC Founders Day Gala', date: 'April 12, 2026', location: 'Radisson Blu Hotel, Freetown' },
        { title: 'Campus Mentorship Drive', date: 'May 5, 2026', location: 'FBC Mary Kingsley Auditorium' }
      ]
    },
    {
      id: 'uk',
      name: 'UK Chapter',
      type: 'international',
      flag: '🇬🇧',
      city: 'London, UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
      members: 284,
      established: 1995,
      eventsPerYear: 8,
      president: 'Dr. David Tucker',
      presidentInitials: 'DT',
      nextEvent: { title: 'Summer Boat Party', date: 'July 15, 2026' },
      description: 'Connecting FBC alumni residing across Great Britain and Northern Ireland.',
      mission: 'Supporting the FBC diaspora in the UK through professional networking, institutional support, and community building.',
      activities: ['Summer Boat Party & Fundraiser', 'UK-FBC Mentorship Exchange', 'Quarterly Professional Development Webinars', 'Arrival Support for New Alumni'],
      announcements: [
        { title: 'Summer Boat Party Tickets', message: 'Early bird tickets are now on sale for our annual gala on the Thames. Limited capacity!', date: '22 Mar 2026' }
      ],
      leadership: [
        { role: 'Chapter President', name: 'Dr. David Tucker', initials: 'DT', bg: 'bg-purple-100', text: 'text-purple-800' },
        { role: 'Chapter Secretary', name: 'Sarah Jones', initials: 'SJ', bg: 'bg-pink-100', text: 'text-pink-800' },
      ],
      upcomingEvents: [
        { title: 'UK Alumni Summer Boat Party', date: 'July 15, 2026', location: 'River Thames, London' },
        { title: 'Professional Networking Dinner', date: 'September 10, 2026', location: 'Central London' }
      ]
    },
    {
      id: 'usa',
      name: 'USA Chapter',
      type: 'international',
      flag: '🇺🇸',
      city: 'Washington DC',
      image: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=1200&auto=format&fit=crop',
      members: 196,
      established: 2001,
      eventsPerYear: 6,
      president: 'Alpha Bah',
      presidentInitials: 'AB',
      nextEvent: { title: 'East Coast Meetup', date: 'August 22, 2026' },
      description: 'Connecting Fourah Bay College graduates across the United States and Canada.',
      mission: 'Empowering FBC graduates in North America through community building, professional placement, and diaspora investment in our alma mater.',
      activities: ['East Coast Regional Meetups', 'STEM Equipment Donation Drive', 'Career Placement & Mentorship Program', 'Annual Thanksgiving Potluck'],
      announcements: [
        { title: 'STEM Drive Success', message: 'We\'ve reached 80% of our goal for the physics lab equipment. Thank you to all donors!', date: '18 Mar 2026' }
      ],
      leadership: [
        { role: 'Chapter President', name: 'Alpha Bah', initials: 'AB', bg: 'bg-indigo-100', text: 'text-indigo-800' },
        { role: 'Chapter Secretary', name: 'Mariama Conteh', initials: 'MC', bg: 'bg-teal-100', text: 'text-teal-800' },
      ],
      upcomingEvents: [
        { title: 'East Coast Regional Meetup', date: 'August 22, 2026', location: 'Washington DC' },
        { title: 'Annual Thanksgiving Potluck', date: 'November 26, 2026', location: 'Maryland' }
      ]
    }
  ];

  // Handle URL-based chapter selection
  useEffect(() => {
    if (id) {
      const chapter = chapters.find(c => c.id === id);
      if (chapter) {
        setActiveChapter(chapter);
        window.scrollTo(0, 0);
      } else {
        setActiveChapter(null);
      }
    } else {
      setActiveChapter(null);
    }
  }, [id, chapters]); // Added chapters dependency as it's defined inside the component

  const handleJoin = (e, chapter) => {
    e.stopPropagation();
    // If already joined, allow leaving
    if (joinedChapters.includes(chapter.id)) {
      persistJoin(null);
      return;
    }
    // If pending, allow withdrawal
    if (pendingChapters.includes(chapter.id)) {
      setPendingChapters(prev => prev.filter(id => id !== chapter.id));
      return;
    }
    // Otherwise, open the join request modal
    setJoinReason('');
    setJoinModal(chapter);
  };

  const submitJoinRequest = (e) => {
    e.preventDefault();
    if (joinModal) {
      persistJoin(joinModal.id);
      setJoinModal(null);
      setJoinReason('');
    }
  };

  const getJoinButtonContent = (chapterId, fullLabel = true) => {
    if (joinedChapters.includes(chapterId)) {
      return { label: '✓ Joined', style: 'bg-fbc-green-light text-fbc-green border border-fbc-green/30', hoverLabel: null };
    }
    if (pendingChapters.includes(chapterId)) {
      return {
        label: '⏳ Request Pending',
        hoverLabel: '✕ Withdraw Request',
        style: 'bg-amber-50 text-amber-700 border border-amber-300 hover:bg-red-50 hover:text-red-600 hover:border-red-300 group',
      };
    }
    return { label: fullLabel ? 'Join chapter' : 'Join', style: 'bg-fbc-green text-white hover:bg-fbc-green-dark', hoverLabel: null };
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const hqChapter = chapters.find(c => c.type === 'hq');
  const internationalChapters = chapters.filter(c => c.type === 'international');

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <Navbar />

      {!activeChapter ? (
        <>
          {/* Hero Banner - More Premium */}
          <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2000&auto=format&fit=crop" alt="Campus backdrop" className="w-full h-full object-cover scale-105 blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-fbc-green/90 via-fbc-green/80 to-gray-50"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center px-6">
              <div className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-white/30 uppercase tracking-[0.2em]">
                Global Network
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">FBC Alumni Chapters</h1>
              <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Stay connected to your roots while growing your future. Join a global community of Fourah Bay College graduates across the world.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20 shadow-xl">
                  <div className="text-3xl font-bold text-white mb-0.5">3</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-widest font-black">Chapters</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20 shadow-xl">
                  <div className="text-3xl font-bold text-white mb-0.5">3.6k</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-widest font-black">Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20 shadow-xl">
                  <div className="text-3xl font-bold text-white mb-0.5">24</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-widest font-black">Annual Events</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 pb-20">

            {/* HQ Card - Full Immersive */}
            <div
              onClick={() => navigate(`/chapters/${hqChapter.id}`)}
              className="group relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl cursor-pointer mb-12 hover:shadow-fbc-green/20 transition-all border border-gray-100">
              <img 
                src={hqChapter.image} 
                alt={hqChapter.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute top-8 right-8 bg-fbc-gold text-yellow-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                Global Headquarters
              </div>

              <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-4 text-white/70">
                    <span className="text-4xl">{hqChapter.flag}</span>
                    <span className="h-6 w-[1px] bg-white/30"></span>
                    <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest"><MapPin className="w-4 h-4" /> {hqChapter.city}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">{hqChapter.name}</h2>
                  <p className="text-white/70 text-lg line-clamp-2 max-w-lg mb-6 leading-relaxed">
                    {hqChapter.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 hover:bg-white/20 transition-colors">
                      <div className="text-white font-bold text-lg">{hqChapter.members.toLocaleString()}</div>
                      <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Alumni</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 hover:bg-white/20 transition-colors">
                      <div className="text-white font-bold text-lg">{hqChapter.eventsPerYear}</div>
                      <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Events/Year</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {(() => {
                    const btn = getJoinButtonContent(hqChapter.id, true); return (
                      <button
                        onClick={(e) => handleJoin(e, hqChapter)}
                        className={`px-10 py-4 rounded-2xl font-black text-sm transition-all shadow-xl hover:-translate-y-1 active:scale-95 whitespace-nowrap ${btn.style.includes('Joined') ? 'bg-white/20 backdrop-blur-md border-white/30 text-white' : 'bg-fbc-green text-white hover:bg-fbc-green-dark'}`}>
                        <span className={btn.hoverLabel ? 'group-hover:hidden' : ''}>{btn.label}</span>
                        {btn.hoverLabel && <span className="hidden group-hover:inline">{btn.hoverLabel}</span>}
                      </button>
                    );
                  })()}
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer">
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">International Chapters</h2>
              <div className="h-px bg-gray-200 flex-1 mx-10 hidden md:block"></div>
            </div>

            {/* International Grid - Modern Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {internationalChapters.map(chapter => (
                <div
                  key={chapter.id}
                  onClick={() => navigate(`/chapters/${chapter.id}`)}
                  className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all border border-gray-100">
                  <img src={chapter.image} alt={chapter.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  <div className="absolute top-8 left-8 flex items-center gap-2">
                    <span className="text-5xl drop-shadow-xl">{chapter.flag}</span>
                  </div>

                  <div className="absolute top-8 right-8">
                    {(() => {
                      const btn = getJoinButtonContent(chapter.id, false); return (
                        <button
                          onClick={(e) => handleJoin(e, chapter)}
                          className={`px-6 py-2.5 rounded-2xl font-black text-xs transition-all shadow-xl backdrop-blur-md border ${btn.style.includes('Joined') ? 'bg-white/20 text-white border-white/30' : 'bg-fbc-green text-white border-fbc-green/30'}`}>
                          <span className={btn.hoverLabel ? 'group-hover:hidden' : ''}>{btn.label}</span>
                          {btn.hoverLabel && <span className="hidden group-hover:inline">{btn.hoverLabel}</span>}
                        </button>
                      );
                    })()}
                  </div>

                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-1.5 text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                      <MapPin className="w-4 h-4" /> {chapter.city}
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6 tracking-tight leading-tight">{chapter.name}</h3>

                    <div className="flex gap-4 mb-8">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                        <div className="text-white font-black text-xl">{chapter.members}</div>
                        <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Alumni</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                        <div className="text-white font-black text-xl">{chapter.eventsPerYear}</div>
                        <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Events/Yr</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-sm font-black text-white border border-white/20">
                          {chapter.presidentInitials}
                        </div>
                        <div>
                          <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest">President</div>
                          <div className="text-sm font-bold text-white">{chapter.president}</div>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-fbc-green transition-all">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Start a chapter - Stylized Card */}
            <div className={`overflow-hidden rounded-[40px] transition-all duration-500 ${showStartForm ? 'bg-white shadow-2xl border border-gray-100' : 'bg-[#1a1a1a] hover:bg-[#222] shadow-xl group cursor-pointer'}`}
              onClick={() => !showStartForm && setShowStartForm(true)}>

              {!showStartForm ? (
                <div className="flex flex-col md:flex-row items-center gap-10 p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-fbc-green/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
                  <div className="w-24 h-24 bg-fbc-green rounded-[32px] flex items-center justify-center text-white shadow-fbc-green/20 shadow-2xl shrink-0 group-hover:rotate-12 transition-transform duration-500">
                    <Plus className="w-12 h-12" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-black text-white mb-3">Request a new chapter</h3>
                    <p className="text-white/50 max-w-xl text-lg leading-relaxed">
                      Don't see your city listed? If you have a core group of alumni ready to mobilize, lead the way by starting a formal chapter.
                    </p>
                  </div>
                  <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-sm hover:bg-fbc-green hover:text-white transition-all shadow-xl">
                    Get Started
                  </button>
                </div>
              ) : submitted ? (
                <div className="text-center py-20 px-10">
                  <div className="w-24 h-24 bg-fbc-green-light rounded-[32px] flex items-center justify-center text-fbc-green mx-auto mb-8 shadow-inner">
                    <Check className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 mb-4">Request submitted!</h3>
                  <p className="text-gray-500 max-w-md mx-auto text-lg leading-relaxed">
                    Our Global Executive team will review your application and host a virtual meeting with you within 14 days.
                  </p>
                </div>
              ) : (
                <div onClick={(e) => e.stopPropagation()} className="p-12">
                  <div className="flex items-center justify-between mb-10 pb-8 border-b border-gray-100">
                    <div>
                      <h3 className="text-4xl font-black text-gray-900 tracking-tight">Start a new chapter</h3>
                      <p className="text-gray-500 mt-2 font-medium">Join our global network by establishing a local presence.</p>
                    </div>
                    <button onClick={() => setShowStartForm(false)} className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-all">
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={submitForm} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-gray-900 uppercase tracking-widest">Country</label>
                        <input required type="text" value={startForm.country} onChange={e => setStartForm({ ...startForm, country: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-fbc-green focus:shadow-xl transition-all outline-none text-lg" placeholder="e.g. Nigeria" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-gray-900 uppercase tracking-widest">City / Region</label>
                        <input required type="text" value={startForm.city} onChange={e => setStartForm({ ...startForm, city: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-fbc-green focus:shadow-xl transition-all outline-none text-lg" placeholder="e.g. Lagos" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-gray-900 uppercase tracking-widest">Your Full Name</label>
                        <input required type="text" value={startForm.name} onChange={e => setStartForm({ ...startForm, name: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-fbc-green focus:shadow-xl transition-all outline-none text-lg" placeholder="e.g. Samuel Koroma" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-gray-900 uppercase tracking-widest">Email Address</label>
                        <input required type="email" value={startForm.email} onChange={e => setStartForm({ ...startForm, email: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-fbc-green focus:shadow-xl transition-all outline-none text-lg" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-gray-900 uppercase tracking-widest">Brief Proposal</label>
                      <textarea required value={startForm.reason} onChange={e => setStartForm({ ...startForm, reason: e.target.value })} rows="4" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-fbc-green focus:shadow-xl transition-all outline-none text-lg resize-none" placeholder="How many alumni are you in touch with? What are your first goals?"></textarea>
                    </div>
                    <div className="flex justify-end pt-4">
                      <button type="submit" className="bg-fbc-green text-white font-black py-5 px-12 rounded-[24px] hover:bg-fbc-green-dark transition-all flex items-center gap-3 shadow-xl hover:shadow-fbc-green/20 hover:-translate-y-1 active:scale-95">
                        Submit Application <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* CHAPTER DETAIL VIEW - IMMERSIVE */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero Banner Detail */}
            <div className="relative h-[450px] overflow-hidden">
              <img
                src={activeChapter.image}
                alt={activeChapter.name}
                className="absolute inset-0 w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-black/20 to-black/40"></div>

              <button
                onClick={() => navigate('/chapters')}
                className="absolute top-8 left-8 z-30 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-2xl font-bold hover:bg-white/20 transition-all group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Chapters
              </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-20 pb-20">
              {/* Floating Title Card */}
              <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden mb-8">
                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-gray-50">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="text-8xl drop-shadow-2xl">{activeChapter.flag}</div>
                    <div className="text-center md:text-left">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{activeChapter.name}</h1>
                        {currentUser.chapterPresidentOf === activeChapter.id && (
                          <span className="flex items-center gap-1.5 bg-fbc-gold/10 text-yellow-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-fbc-gold/20">
                            <ShieldCheck className="w-3.5 h-3.5" /> Your Chapter
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 font-bold uppercase tracking-widest text-xs">
                        <MapPin className="w-4 h-4 text-fbc-green" /> {activeChapter.city}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-full md:w-auto">
                    {(() => {
                      const btn = getJoinButtonContent(activeChapter.id, true); return (
                        <button
                          onClick={(e) => handleJoin(e, activeChapter)}
                          className={`w-full md:px-12 py-5 rounded-[24px] font-black text-sm transition-all shadow-xl hover:-translate-y-1 active:scale-95 ${btn.style.includes('Joined') ? 'bg-gray-100 text-gray-400' : 'bg-fbc-green text-white hover:bg-fbc-green-dark shadow-fbc-green/20'}`}>
                          <span className={btn.hoverLabel ? 'group-hover:hidden' : ''}>{btn.label}</span>
                          {btn.hoverLabel && <span className="hidden group-hover:inline">{btn.hoverLabel}</span>}
                        </button>
                      );
                    })()}
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex items-center gap-2 px-10 bg-gray-50/50">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`py-6 px-6 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === 'overview' ? 'text-fbc-green' : 'text-gray-400 hover:text-gray-600'}`}>
                    Overview
                    {activeTab === 'overview' && <div className="absolute bottom-0 left-6 right-6 h-1 bg-fbc-green rounded-full"></div>}
                  </button>
                  {currentUser.chapterPresidentOf === activeChapter.id && (
                    <button
                      onClick={() => setActiveTab('requests')}
                      className={`py-6 px-6 text-xs font-black uppercase tracking-widest transition-all relative flex items-center gap-2 ${activeTab === 'requests' ? 'text-fbc-green' : 'text-gray-400 hover:text-gray-600'}`}>
                      Review Requests
                      {pendingRequests.length > 0 && (
                        <span className="bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                          {pendingRequests.length}
                        </span>
                      )}
                      {activeTab === 'requests' && <div className="absolute bottom-0 left-6 right-6 h-1 bg-fbc-green rounded-full"></div>}
                    </button>
                  )}
                </div>
              </div>

              {/* TWO COLUMN CONTENT LAYOUT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content (Left) */}
                <div className="lg:col-span-8 space-y-12">
                  {currentUser.chapterPresidentOf === activeChapter.id && activeTab === 'requests' ? (
                    <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100">
                      <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-fbc-green/10 rounded-2xl flex items-center justify-center text-fbc-green">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">Review Join Requests</h3>
                      </div>

                      {pendingRequests.length === 0 && approvedRequests.length === 0 && declinedRequests.length === 0 ? (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                          <Clock className="w-16 h-16 mx-auto mb-6 text-gray-300" />
                          <div className="text-xl font-bold text-gray-800 mb-2">No active requests</div>
                          <div className="text-gray-500 max-w-xs mx-auto">You're all caught up! New member requests will appear here for your review.</div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {pendingRequests.map(req => (
                            <div key={req.id} className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-all">
                              <img src={`https://i.pravatar.cc/150?u=fbc-${req.avatarId}`} alt={req.name} className="w-20 h-20 rounded-[28px] object-cover shadow-lg shrink-0" />
                              <div className="flex-1 text-center sm:text-left min-w-0">
                                <h4 className="text-xl font-black text-gray-900 mb-1">{req.name}</h4>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-3 leading-tight">{req.role} · Class of {req.year}</p>
                                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                  <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-gray-100">{req.location}</span>
                                  <span className="bg-fbc-green/10 text-fbc-green px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-fbc-green/10">{req.faculty}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                                <button onClick={() => { setApprovedRequests(prev => [...prev, req]); setPendingRequests(prev => prev.filter(r => r.id !== req.id)); }} className="flex-1 sm:flex-none h-14 w-14 rounded-2xl bg-fbc-green text-white flex items-center justify-center hover:bg-fbc-green-dark shadow-lg shadow-fbc-green/20 transition-all hover:-translate-y-1">
                                  <Check className="w-6 h-6" />
                                </button>
                                <button onClick={() => { setDeclinedRequests(prev => [...prev, req]); setPendingRequests(prev => prev.filter(r => r.id !== req.id)); }} className="flex-1 sm:flex-none h-14 w-14 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all hover:-translate-y-1">
                                  <X className="w-6 h-6" />
                                </button>
                              </div>
                            </div>
                          ))}

                          {/* Recently Reviewed */}
                          {(approvedRequests.length > 0 || declinedRequests.length > 0) && (
                            <div className="mt-12 pt-12 border-t border-gray-100">
                              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Recently Reviewed</h4>
                              <div className="space-y-4 opacity-70">
                                {approvedRequests.slice(0, 3).map(req => (
                                  <div key={req.id} className="flex items-center justify-between p-5 bg-green-50/50 rounded-2xl border border-green-100">
                                    <div className="flex items-center gap-4">
                                      <img src={`https://i.pravatar.cc/150?u=fbc-${req.avatarId}`} alt="" className="w-10 h-10 rounded-full grayscale" />
                                      <div className="text-sm font-bold text-gray-800">{req.name}</div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-fbc-green text-[10px] font-black uppercase tracking-widest">
                                      <Check className="w-3.5 h-3.5" /> Approved
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div>
                            <h3 className="text-xl font-black text-gray-900 mb-6 tracking-tight">Our Mission</h3>
                            <p className="text-gray-500 text-base leading-relaxed mb-8">
                              {activeChapter.mission}
                            </p>
                            <h3 className="text-xl font-black text-gray-900 mb-6 tracking-tight">Key Initiatives</h3>
                            <ul className="space-y-4">
                              {(activeChapter.activities || []).map((act, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-500 italic font-medium">
                                  <div className="w-1.5 h-1.5 bg-fbc-green rounded-full mt-1.5 shrink-0"></div>
                                  {act}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xl font-black text-gray-900 mb-6 tracking-tight">Announcements</h3>
                            <div className="space-y-4">
                              {(activeChapter.announcements || []).map((ann, i) => (
                                <div key={i} className="p-5 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden group/ann">
                                  <div className="absolute top-0 right-0 w-24 h-24 bg-fbc-green/5 rounded-full -mr-12 -mt-12 group-hover/ann:scale-110 transition-transform"></div>
                                  <div className="text-[10px] font-black text-fbc-green uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <ShieldCheck className="w-3 h-3" /> Admin Update · {ann.date}
                                  </div>
                                  <h4 className="text-sm font-bold text-gray-900 mb-2">{ann.title}</h4>
                                  <p className="text-xs text-gray-500 leading-relaxed">{ann.message}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 bg-gray-50/50 rounded-3xl p-6 border border-gray-100">
                          <div className="bg-fbc-green/5 rounded-3xl p-6 border border-fbc-green/10">
                            <div className="text-fbc-green font-black text-2xl mb-1">{activeChapter.members.toLocaleString()}</div>
                            <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Active Members</div>
                          </div>
                          <div className="bg-fbc-gold/5 rounded-3xl p-6 border border-fbc-gold/10">
                            <div className="text-fbc-gold font-black text-2xl mb-1">{activeChapter.eventsPerYear}</div>
                            <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Annual Gathering</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-black text-gray-900 tracking-tight">Upcoming Events</h3>
                          <button className="text-fbc-green text-sm font-black uppercase tracking-widest hover:underline">View Calendar</button>
                        </div>
                        <div className="space-y-4">
                          {activeChapter.upcomingEvents.map((evt, i) => (
                            <div key={i} className="group flex flex-col md:flex-row gap-6 p-6 bg-white rounded-[32px] border border-gray-100 hover:border-fbc-green/20 shadow-sm hover:shadow-xl transition-all cursor-pointer">
                              <div className="w-full md:w-32 h-32 bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-center shrink-0 group-hover:bg-fbc-green group-hover:text-white transition-colors">
                                <span className="text-xs font-black uppercase tracking-widest mb-1">{evt.date.split(' ')[0]}</span>
                                <span className="text-3xl font-black">{evt.date.split(' ')[1]}</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-black text-gray-900 mb-2 group-hover:text-fbc-green transition-colors">{evt.title}</h4>
                                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {evt.location}</span>
                                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 6:00 PM</span>
                                </div>
                              </div>
                              <div className="flex items-center self-end md:self-center">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-fbc-green/10 group-hover:text-fbc-green transition-all">
                                  <ChevronRight className="w-5 h-5" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Sidebar (Right) */}
                <div className="lg:col-span-4 space-y-10">
                  {/* Leadership Card */}
                  <div className="bg-gray-900 rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-fbc-green/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <h3 className="text-white text-xl font-black mb-8 relative z-10 tracking-tight">Chapter Executive</h3>
                    <div className="space-y-8 relative z-10">
                      {activeChapter.leadership.map((leader, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-[20px] ${leader.bg} flex items-center justify-center font-black ${leader.text} text-lg shadow-lg`}>
                            {leader.initials}
                          </div>
                          <div>
                            <div className="text-white font-bold text-sm leading-tight">{leader.name}</div>
                            <div className="text-fbc-green text-[10px] font-black uppercase tracking-widest mt-1 opacity-80">{leader.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Regional Members Directory Snippet */}
                  <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100">
                    <h3 className="text-gray-900 text-lg font-black mb-6 tracking-tight">Active Members</h3>
                    {(() => {
                      const members = allMembers.filter(m => m.chapterId === activeChapter.id);
                      return (
                        <div className="space-y-6">
                          <div className="grid grid-cols-4 gap-3">
                            {members.slice(0, 8).map(m => (
                              <div key={m.id} className="relative group">
                                <img src={`https://i.pravatar.cc/150?u=fbc-${m.id}`} alt={m.name} className="w-full aspect-square rounded-[14px] object-cover ring-2 ring-white shadow-sm group-hover:ring-fbc-green transition-all" />
                              </div>
                            ))}
                            {members.length > 8 && (
                              <div className="w-full aspect-square rounded-[14px] bg-gray-50 flex items-center justify-center text-[10px] font-black text-gray-400 border border-gray-100">
                                +{members.length - 8}
                              </div>
                            )}
                          </div>
                          <button className="w-full py-4 bg-gray-50 text-gray-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-fbc-green hover:text-white transition-all">
                            View Member Directory
                          </button>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Member Spotlight Box */}
                  <div className="group relative rounded-[40px] overflow-hidden bg-fbc-green/5 border border-fbc-green/10 p-8 cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 rounded-full bg-fbc-green animate-pulse"></div>
                      <span className="text-[10px] font-black text-fbc-green uppercase tracking-[0.2em]">Member Spotlight</span>
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-2 leading-tight">Leading Tech in {activeChapter.city}</h4>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">Meet the alumni driving innovation and shaping the local community.</p>
                    <div className="flex items-center gap-2 text-fbc-green font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                      Read more <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Join Request Modal */}
      {joinModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={() => setJoinModal(null)}>
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8"
            onClick={e => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">{joinModal.flag}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Join {joinModal.name}</h3>
              <p className="text-sm text-gray-500">
                Your request will be reviewed by the chapter president before you are added.
              </p>
            </div>

            <div className="space-y-5">
              {/* Profile preview */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-lg flex-shrink-0">
                  AK
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Aminata Koroma</div>
                  <div className="text-xs text-gray-500">NGO Analyst · Class of 2022</div>
                  <div className="text-xs text-gray-500">📍 Freetown, Sierra Leone</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-800 leading-relaxed">
                <span className="font-bold block mb-1">How does this work?</span>
                The chapter president of the <span className="font-semibold">{joinModal.name}</span> will review your profile — including your location, graduation year, and faculty — to decide whether to approve your membership request.
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-700 font-medium">
                ⏳ Requests are typically reviewed within 5–7 days. You will receive a notification once a decision is made.
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => setJoinModal(null)}
                  className="flex-1 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-colors text-sm">
                  Cancel
                </button>
                <button
                  onClick={submitJoinRequest}
                  className="flex-1 py-3 bg-fbc-green text-white font-bold rounded-xl hover:bg-fbc-green-dark transition-colors text-sm">
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Chapters;