import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, GraduationCap, Users, CalendarDays, HeartHandshake, Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import BicentennialCountdown from '../components/BicentennialCountdown';

function Home() {
  const navigate = useNavigate();
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const aboutDropdownRef = useRef(null);
  const joinedChapterId = localStorage.getItem('fbc_joined_chapter');

  // IMAGE STRATEGY FOR HOMEPAGE
  // All images should be local files in public/images/ directory
  // Replace placeholders with real FBC photos:
  // - fbc-bicentennial.jpg: FBC200 branded image or bicentenary poster
  // - fbc-celebration.jpg: Alumni celebration, gathering, or bicentenary event photo
  // - fbc-international-conference.jpg: FBC campus, Bintumani Hotel, or conference venue
  // - fbc-campus-freetown.jpg: FBC Mount Aureol campus or Old Fourah Bay College
  // - fbc-uk-chapter.jpg: UK alumni event, London gathering, or networking photo
  // - fbc-north-america-chapter.jpg: USA/Canada alumni event or professional networking photo
  // - fbc-graduates.jpg: Alumni photo showing class diversity, diversity of professions
  // All images have gray background fallback if missing. Use meaningful alt text.
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setShowAboutDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const events = [
    {
      id: 1,
      image: '/images/fbc-bicentennial.jpg',
      date: '31 Jul 2026',
      title: 'FBC200 Conference Call for Papers',
      location: 'Online Submission',
      type: 'Academic / Bicentenary',
      desc: 'Scholars, alumni, researchers, and thought leaders are invited to submit proposals for the FBC200 international conference exploring FBC\'s legacy and the future of higher education.',
      attendeeCount: null,
      chapterId: 'sl',
      cta: 'Learn More'
      // TODO: Replace with FBC bicentenary branded image or conference poster
    },
    {
      id: 2,
      image: '/images/fbc-celebration.jpg',
      date: 'February 2027',
      title: 'FBC Bicentenary Celebration Week',
      location: 'Fourah Bay College, Freetown',
      type: 'Alumni / National Celebration',
      desc: 'A week of celebration bringing together alumni, students, and the community to mark 200 years of Fourah Bay College\'s legacy and leadership across Africa.',
      attendeeCount: null,
      chapterId: 'sl',
      cta: 'Learn More'
    },
    {
      id: 3,
      image: '/images/fbc-international-conference.jpg',
      date: '8–10 Apr 2027',
      title: 'Fourah Bay College at 200 International Conference',
      location: 'Bintumani Hotel, Aberdeen, Freetown',
      type: 'Conference',
      desc: 'An international conference bringing together scholars, alumni, and thought leaders to reflect on FBC\'s history, impact, and future.',
      attendeeCount: null,
      chapterId: 'sl',
      cta: 'View Details'
      // TODO: Replace with FBC campus photo, Bintumani Hotel, or conference event image
    }
  ];

  // Prioritize events from the user's joined chapter
  const sortedEvents = [...events].sort((a, b) => {
    if (a.chapterId === joinedChapterId) return -1;
    if (b.chapterId === joinedChapterId) return 1;
    return 0;
  });

  const handleJoinChapter = (e, chapter) => {
    e.stopPropagation();
    // Check if user is logged in
    if (!joinedChapterId) {
      // Not logged in - redirect to signup
      navigate('/signup');
    } else {
      // Logged in - show the confirmation modal
      setSelectedChapter(chapter);
      setShowJoinModal(true);
    }
  };

  const confirmJoinChapter = () => {
    if (selectedChapter) {
      localStorage.setItem('fbc_joined_chapter', selectedChapter.id);
      setShowJoinModal(false);
      setSelectedChapter(null);
      // Optionally refresh the page or update state
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans">

      {/* Hero Section */}
      <div className="relative min-h-screen bg-white">

        {/* Background Image - REPLACE WITH REAL FBC CAMPUS OR ALUMNI GATHERING PHOTO */}
        {/* TODO: Replace /fbc-building.png with high-quality photo of FBC campus (Mount Aureol), main building, or alumni at event */}
        <img
          src="/fbc-building.png"
          alt="FBC Campus - Mount Aureol"
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
            <div 
              className="relative"
              ref={aboutDropdownRef}
            >
              <button 
                onClick={() => setShowAboutDropdown(!showAboutDropdown)}
                className="flex items-center gap-1 text-white text-sm hover:text-fbc-gold transition-colors">
                About Us
                <ChevronDown size={16} className={`transition-transform ${showAboutDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showAboutDropdown && (
                <div className="absolute left-0 top-full pt-2 w-48 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => {
                        navigate('/history');
                        setShowAboutDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      History
                    </button>
                    <button
                      onClick={() => {
                        navigate('/constitutional-bylaws');
                        setShowAboutDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100"
                    >
                      Constitutional and Bylaws
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => navigate('/directory')} className="text-white text-sm hover:text-fbc-gold transition-colors">Directory</button>
            <button onClick={() => navigate('/events')} className="text-white text-sm hover:text-fbc-gold transition-colors">Events</button>
            <button onClick={() => navigate('/donate')} className="text-white text-sm hover:text-fbc-gold transition-colors">Give back</button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-fbc-gold text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all">
              Join now
            </button>
          </div>
        </nav>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-24">
          <span className="inline-block bg-white/10 backdrop-blur-md text-white/95 text-xs font-semibold px-4 py-2 rounded-lg mb-8 border border-white/20 tracking-wide">
            Fourah Bay College · Est. 1827 · Mount Aureol, Freetown
          </span>
          <h1 className="text-6xl font-bold leading-tight mb-6 max-w-4xl text-white drop-shadow-lg">
            Connecting Fourah Bay College<br />Alumni Across Generations
          </h1>
          <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-2xl font-light">
            From Mount Aureol to the world, the FBC alumni community continues to connect, mentor, support students, strengthen chapters, and give back to the college that shaped generations of leaders.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="bg-fbc-gold text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-yellow-600 transition-all flex items-center gap-2 text-sm shadow-lg hover:-translate-y-0.5">
              Join the Alumni Network <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/chapters')}
              className="bg-white/15 backdrop-blur-md text-white text-sm font-medium px-8 py-3.5 rounded-lg border border-white/30 hover:bg-white/25 transition-all shadow-sm">
              Explore Chapters
            </button>
          </div>
        </div>

        {/* Bottom stat chips */}
        <div className="absolute bottom-10 left-10 z-10 flex gap-4">
          {[
            { val: '5,000+', label: 'Alumni members' },
            { val: '3', label: 'Active chapters' },
            { val: '42', label: 'Countries' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-5 py-3 text-white shadow-sm">
              <div className="text-xl font-bold">{stat.val}</div>
              <div className="text-xs text-white/70 mt-0.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Content Section Below Hero */}
      <div className="px-16 py-20 grid grid-cols-2 gap-16 items-center border-b border-stone-200 bg-stone-50">
        <div>
          <span className="text-fbc-green text-xs font-semibold uppercase tracking-wider mb-4 block border-l-2 border-fbc-green pl-3">
            Heritage & Connection
          </span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 leading-snug mb-6">
            Fourah Bay College has shaped Africa's leaders for nearly two centuries.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-base">
            This platform exists to strengthen the bonds that connect our global FBC family. Whether you graduated decades ago or recently, you're part of a legacy of excellence, service, and impact that extends across continents.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-fbc-green text-white font-semibold px-7 py-3 rounded-lg hover:bg-fbc-green-dark transition-all text-sm flex items-center gap-2 w-fit shadow-sm hover:shadow-md">
            Join the network <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative bg-stone-200 rounded-xl">
          {/* TODO: Replace fbc-graduates.jpg with real FBC alumni/graduation photo showing alumni diversity */}
          <img
            src="/images/fbc-graduates.jpg"
            alt="FBC Alumni and Graduates"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-md px-5 py-4 flex items-center gap-3 border border-stone-100">
            <div className="w-10 h-10 bg-fbc-green-light rounded-lg flex items-center justify-center text-fbc-green">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">199 years</div>
              <div className="text-xs text-gray-500 font-medium">of academic excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Feature Cards */}
      <div className="px-16 py-16 bg-stone-50">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3 text-center">
          How to get involved
        </h2>
        <p className="text-gray-600 text-base text-center mb-12 max-w-2xl mx-auto">
          Three ways to stay connected with the FBC community and advance our shared mission.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: 'Find Your FBC Network', desc: 'Search our alumni directory to reconnect with classmates by class year, faculty, chapter, or profession.', link: 'Browse directory', page: '/directory', icon: <Users className="w-5 h-5 text-fbc-green" /> },
            { title: 'Join Chapter Activities', desc: 'Connect with alumni through local gatherings, professional meetups, student mentoring, and chapter events.', link: 'View events', page: '/events', icon: <CalendarDays className="w-5 h-5 text-fbc-green" /> },
            { title: 'Support FBC Students', desc: 'Give scholarships, mentor emerging leaders, support campus initiatives, and strengthen Fourah Bay College for future generations.', link: 'Get involved', page: '/donate', icon: <HeartHandshake className="w-5 h-5 text-fbc-green" /> },
          ].map((card, i) => (
            <div
              key={i}
              onClick={() => navigate(card.page)}
              className="bg-white border border-stone-200 rounded-lg p-7 shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-fbc-green-light rounded-lg mb-4 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.desc}</p>
              <span className="text-sm font-semibold text-fbc-green group-hover:underline flex items-center gap-1">
                {card.link} <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bicentennial Countdown Section */}
      <BicentennialCountdown />

      {/* Upcoming Events Section */}
      <div className="bg-stone-50 px-16 py-20 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-fbc-green text-xs font-semibold uppercase tracking-wider mb-3 block border-l-2 border-fbc-green pl-3">
                Events & Activities
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Upcoming Events</h2>
            </div>
            <button
              onClick={() => navigate('/events')}
              className="text-fbc-green text-sm font-semibold uppercase tracking-wide hover:underline flex items-center gap-2 transition-all">
              All events <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {sortedEvents.map(event => (
              <div
                key={event.id}
                onClick={() => navigate('/events')}
                className={`bg-white rounded-lg border transition-all overflow-hidden flex cursor-pointer group 
                  ${event.chapterId === joinedChapterId ? 'border-fbc-green ring-2 ring-fbc-green/10 shadow-md' : 'border-stone-200 shadow-sm hover:shadow-md'}`}>
                <div className="relative w-48 flex-shrink-0 overflow-hidden bg-stone-200">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-lg shadow-lg
                    ${event.type === 'Virtual' ? 'bg-blue-600 text-white' : 'bg-fbc-green text-white'}`}>
                    {event.type}
                  </div>
                </div>
                <div className="flex-1 px-8 py-6 flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        <Calendar className="w-3.5 h-3.5 text-fbc-green" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-fbc-green transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 flex-shrink-0">
                    {event.attendeeCount && (
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{event.attendeeCount} attending</span>
                    )}
                    <button className="px-6 py-2 bg-fbc-green text-white text-xs font-semibold rounded-lg border border-fbc-green hover:bg-fbc-green-dark transition-all">
                      {event.cta || 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      {/* IMAGE SETUP: Add real FBC photos to public/images/ directory: */}
      {/* - fbc-float-parade.jpg: Alumni Float Parade from Cline Town to Stadium */}
      {/* - fbc-alumni-meeting.jpg: Alumni meeting with FBC Management and Bicentennial Committee */}
      {/* - fbc-innovation-seed-fund.jpg: Innovation Seed Fund launch event or FBC campus */}
      <div className="bg-stone-50 px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-fbc-green text-xs font-semibold uppercase tracking-wider mb-3 block border-l-2 border-fbc-green pl-3">
                News & Updates
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Latest From FBC</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                category: 'FBC200 / Alumni',
                title: 'FBC Alumni Float Parade Marks the Journey to 200',
                desc: 'Alumni, students, staff, and well-wishers joined a colourful procession from Old Fourah Bay College, Cline Town, to Siaka Stevens Stadium as part of the build-up to FBC\'s bicentenary celebration.',
                image: '/images/fbc-float-parade.jpg',
                date: 'May 23, 2026'
              },
              {
                category: 'FBC200 / Alumni',
                title: 'Alumni and FBC Management Unite Ahead of Bicentennial',
                desc: 'FBC alumni met with college leadership and the Bicentennial Anniversary Planning Committee to align alumni activities, resource mobilisation, and preparations for the historic 200-year celebration.',
                image: '/images/fbc-alumni-meeting.jpg',
                date: 'May 18, 2026'
              },
              {
                category: 'Alumni Opportunity',
                title: 'Innovation Seed Fund Opens Opportunity for Recent FBC Graduates',
                desc: 'Fourah Bay College, in partnership with Oxford University Africa Society and Africell Impact Foundation, opened an innovation funding opportunity for eligible recent FBC graduates.',
                image: '/images/fbc-innovation-seed-fund.jpg',
                date: 'March 18, 2026'
              }
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* TODO: Replace /images/fbc-*.jpg with real photos of: 1) Float Parade, 2) Alumni Meeting, 3) Innovation Fund event */}
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-fbc-green uppercase tracking-wider mb-2">{post.category}</div>
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">{post.date}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-fbc-green transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">{post.desc}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Opening full article...");
                    }}
                    className="text-sm font-semibold text-fbc-green flex items-center gap-1 group-hover:underline">
                    Read more <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chapters Preview Section */}
      <div className="bg-white px-16 py-20 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-fbc-green text-xs font-semibold uppercase tracking-wider mb-3 block border-l-2 border-fbc-green pl-3">
                Our Chapters
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Global Alumni Network</h2>
            </div>
            <button
              onClick={() => navigate('/chapters')}
              className="text-fbc-green text-sm font-semibold uppercase tracking-wide hover:underline flex items-center gap-2 transition-all">
              Explore chapters <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                id: 'sl',
                name: 'Sierra Leone Chapter',
                flag: '🇸🇱',
                city: 'Freetown, Sierra Leone',
                image: '/images/fbc-campus-freetown.jpg',
                members: 3200,
                desc: 'Our home chapter in Freetown connecting local alumni, engaging students, supporting the college, and leading FBC\'s bicentenary celebration.',
                activities: 'Student support, alumni events, campus projects'
                // TODO: Replace with FBC campus photo from Mount Aureol or Freetown alumni event
              },
              {
                id: 'uk',
                name: 'United Kingdom Chapter',
                flag: '🇬🇧',
                city: 'London, United Kingdom',
                image: '/images/fbc-uk-chapter.jpg',
                members: 284,
                desc: 'FBC alumni in the UK staying connected through networking events, raising funds for scholarships, and celebrating our shared heritage.',
                activities: 'Scholarships, reunions, fundraising'
                // TODO: Replace with UK chapter event photo or alumni gathering
              },
              {
                id: 'usa',
                name: 'North America Chapter',
                flag: '🌎',
                city: 'USA / Canada',
                image: '/images/fbc-north-america-chapter.jpg',
                members: 196,
                desc: 'FBC alumni across North America connecting through mentorship, professional networking, and supporting the college\'s mission from afar.',
                activities: 'Mentorship, networking, giving'
                // TODO: Replace with North America chapter event or alumni networking photo
              }
            ].map(chapter => (
              <div
                key={chapter.id}
                onClick={() => navigate(`/chapters/${chapter.id}`)}
                className={`group relative h-[400px] rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-all border bg-stone-200
                  ${chapter.id === joinedChapterId ? 'border-fbc-green ring-4 ring-fbc-green/10' : 'border-stone-200'}`}>
                <img src={chapter.image} alt={chapter.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="text-3xl drop-shadow-lg">{chapter.flag}</span>
                  {chapter.id === joinedChapterId && (
                    <span className="bg-fbc-green text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-white/20">
                      Your Chapter
                    </span>
                  )}
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-1.5 text-white/70 text-xs font-semibold uppercase tracking-wide mb-2">
                    <MapPin className="w-3 h-3" /> {chapter.city}
                  </div>
                  <h3 className="text-xl font-bold mb-1 leading-tight">{chapter.name}</h3>
                  <p className="text-white/50 text-xs uppercase tracking-wide font-medium mb-3">{chapter.activities}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
                    {chapter.desc}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-block bg-white/15 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2">
                      <div className="font-semibold text-sm">{chapter.members.toLocaleString()}</div>
                      <div className="text-xs text-white/60 uppercase font-semibold tracking-wide">Members</div>
                    </div>
                    <button 
                      onClick={(e) => handleJoinChapter(e, chapter)}
                      className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg hover:-translate-y-1 active:scale-95 whitespace-nowrap 
                      ${chapter.id === joinedChapterId ? 'bg-white/10 text-white border border-white/30 hover:bg-white/15' : 'bg-fbc-green text-white hover:bg-fbc-green-dark'}`}>
                      {chapter.id === joinedChapterId ? 'View Chapter' : 'Join Chapter'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Alumni Leadership Section */}
      <div className="bg-stone-50 px-16 py-20 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-fbc-green text-xs font-semibold uppercase tracking-wider mb-3 block border-l-2 border-fbc-green pl-3">
              Governance & Oversight
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Meet the Alumni Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
              The Fourah Bay College Alumni Association is guided by an executive team committed to strengthening alumni engagement, supporting students, building chapters, and preserving the FBC legacy for future generations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { role: 'President', initials: 'P' },
              { role: 'Vice President', initials: 'VP' },
              { role: 'Secretary General', initials: 'SG' },
              { role: 'Treasurer', initials: 'T' },
              { role: 'Public Relations Officer', initials: 'PRO' },
              { role: 'Social Secretary', initials: 'SS' }
            ].map((leader, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 border-t-fbc-gold border-t-4 p-5 rounded-sm shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-0.5 duration-200"
              >
                {/* Initials Badge */}
                <div className="w-12 h-12 rounded-full bg-fbc-green-light text-fbc-green flex items-center justify-center font-bold text-sm mb-4 border border-fbc-green/10">
                  {leader.initials}
                </div>
                
                <h4 className="text-fbc-green font-bold text-sm tracking-tight leading-tight min-h-[36px] flex items-center justify-center">
                  {leader.role}
                </h4>
                
                <p className="text-gray-900 font-medium text-xs mt-2">
                  Position to be filled
                </p>
                
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1 block">
                  Executive Committee
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* Link to /leadership page (can be created later) */}
            <button
              onClick={() => navigate('/leadership')}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              View Full Leadership
            </button>
          </div>
        </div>
      </div>

      {/* Donation CTA Strip */}
      <div className="bg-fbc-green mx-16 mb-16 rounded-xl px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-2xl relative z-10">
          <h3 className="text-white text-3xl font-serif font-bold mb-4">
            Give back to Fourah Bay College
          </h3>
          <p className="text-white/80 text-base leading-relaxed font-light">
            Your gift funds scholarships, campus improvements, and faculty research that advances our mission of educational excellence. Join fellow alumni in investing in the next generation of African leaders.
          </p>
        </div>
        <button
          onClick={() => navigate('/donate')}
          className="bg-fbc-gold text-fbc-green font-bold px-10 py-4 rounded-lg hover:bg-yellow-500 transition-all shadow-md hover:-translate-y-1 active:scale-95 whitespace-nowrap flex items-center gap-2 relative z-10">
          Make a gift <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Join Chapter Modal */}
      {showJoinModal && selectedChapter && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join {selectedChapter.name}?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you for your interest in joining {selectedChapter.name}. The chapter president will review your request and get back to you shortly.
            </p>
            <div className="space-y-3">
              <button
                onClick={confirmJoinChapter}
                className="w-full bg-fbc-green text-white font-bold py-3 rounded-lg hover:bg-fbc-green-dark transition-all">
                Confirm
              </button>
              <button
                onClick={() => setShowJoinModal(false)}
                className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;