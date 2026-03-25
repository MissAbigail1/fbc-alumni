import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, GraduationCap, Users, CalendarDays, HeartHandshake, Calendar, Clock, MapPin } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const joinedChapterId = localStorage.getItem('fbc_joined_chapter');

  const events = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
      date: '28 Mar 2026',
      time: '6:00 PM – 9:00 PM',
      title: 'FBC Networking Night — Freetown',
      location: 'Aberdeen Beach Hotel, Freetown',
      type: 'In person',
      attendeeCount: 42,
      chapterId: 'sl',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80',
      date: '12 Apr 2026',
      time: '7:00 PM – 9:00 PM GMT',
      title: 'Diaspora Virtual Meetup',
      location: 'Online · Zoom',
      type: 'Virtual',
      attendeeCount: 87,
      chapterId: 'uk',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
      date: '27 Jun 2027',
      time: '6:00 PM – Midnight',
      title: 'FBC 200th Anniversary Gala',
      location: 'State House Grounds, Freetown',
      type: 'In person',
      attendeeCount: 312,
      chapterId: 'sl',
    }
  ];

  // Prioritize events from the user's joined chapter
  const sortedEvents = [...events].sort((a, b) => {
    if (a.chapterId === joinedChapterId) return -1;
    if (b.chapterId === joinedChapterId) return 1;
    return 0;
  });

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
            <br />College Alumni Worldwide
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">
            Join 5,000+ FBC graduates across 42 countries. Find mentors,
            attend reunions, and give back to the college that shaped you.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="bg-fbc-gold text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-yellow-600 transition-all flex items-center gap-2 text-sm">
              Create your profile <ArrowRight className="w-4 h-4" />
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
            { val: '3', label: 'Global Chapters' },
            { val: '24', label: 'Annual Events' },
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
            Join the community <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative">
          <img
            src="fbc-graduates.jpeg"
            alt="Graduates"
            className="rounded-2xl w-full h-80 object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card-hover px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-fbc-green-light rounded-lg flex items-center justify-center text-fbc-green">
              <GraduationCap className="w-5 h-5" />
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
            { title: '24/7 networking', desc: 'Connect with FBC graduates across all faculties, graduation years and countries anytime.', link: 'Browse the directory', page: '/directory', icon: <Users className="w-5 h-5 text-fbc-green" /> },
            { title: 'Events & reunions', desc: 'RSVP to gatherings in Freetown or join virtually from anywhere in the world.', link: 'See upcoming events', page: '/events', icon: <CalendarDays className="w-5 h-5 text-fbc-green" /> },
            { title: 'Give back to FBC', desc: 'Fund scholarships for the next generation of FBC students. Donate in any currency.', link: 'Support a student', page: '/donate', icon: <HeartHandshake className="w-5 h-5 text-fbc-green" /> },
          ].map((card, i) => (
            <div
              key={i}
              onClick={() => navigate(card.page)}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-fbc-green-light rounded-lg mb-4 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{card.desc}</p>
              <span className="text-sm font-semibold text-fbc-green group-hover:underline flex items-center gap-1">
                {card.link} <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-white px-16 py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-fbc-green text-xs font-semibold uppercase tracking-widest mb-3 block">
                Get involved
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            </div>
            <button
              onClick={() => navigate('/events')}
              className="text-fbc-green text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
              View all events <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {sortedEvents.map(event => (
              <div
                key={event.id}
                onClick={() => navigate('/events')}
                className={`bg-white rounded-2xl border transition-all overflow-hidden flex cursor-pointer group 
                  ${event.chapterId === joinedChapterId ? 'border-fbc-green ring-2 ring-fbc-green/10 shadow-md' : 'border-gray-100 shadow-sm hover:shadow-md'}`}>
                <div className="relative w-48 flex-shrink-0 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {event.chapterId === joinedChapterId && (
                    <div className="absolute top-3 left-3 bg-fbc-green text-white text-[10px] font-bold px-3 py-1 rounded-lg shadow-lg">
                      For You
                    </div>
                  )}
                  <div className={`absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg shadow-lg
                    ${event.type === 'Virtual' ? 'bg-blue-600 text-white' : 'bg-fbc-green text-white'}`}>
                    {event.type}
                  </div>
                </div>
                <div className="flex-1 px-8 py-6 flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5 text-fbc-green" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 text-fbc-green" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-fbc-green transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{event.attendeeCount} attending</span>
                    <button className="px-6 py-2 bg-fbc-green/5 text-fbc-green text-xs font-bold rounded-xl border border-fbc-green/10 hover:bg-fbc-green hover:text-white transition-all">
                      RSVP Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-gray-50 px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-fbc-green text-xs font-semibold uppercase tracking-widest mb-3 block">
                Stay updated
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'FBC Alumni website officially launches to connect graduates worldwide',
                desc: 'After months of planning, the official FBC Alumni platform is now live. Over 500 alumni have already registered.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
                date: 'March 15, 2026'
              },
              {
                title: 'Dr. David Tucker named one of the top medical consultants in the UK',
                desc: 'FBC Class of 1999 graduate Dr. David Tucker has been recognised as one of the top medical consultants in the UK.',
                image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
                date: 'March 10, 2026'
              },
              {
                title: 'FBC 200th Anniversary Gala — save the date for June 2027',
                desc: 'Mark your calendars for June 27 2027. FBC will celebrate 200 years of excellence with a historic gala.',
                image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
                date: 'March 5, 2026'
              }
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold text-fbc-green uppercase tracking-widest mb-2">{post.date}</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 leading-snug group-hover:text-fbc-green transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-2">{post.desc}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Opening full article...");
                    }}
                    className="text-xs font-bold text-fbc-green flex items-center gap-1 group-hover:underline">
                    Read more <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chapters Preview Section */}
      <div className="bg-white px-16 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-fbc-green text-xs font-semibold uppercase tracking-widest mb-3 block">
                Global Network
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Alumni Chapters</h2>
            </div>
            <button
              onClick={() => navigate('/chapters')}
              className="text-fbc-green text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
              Explore all chapters <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                id: 'sl',
                name: 'Sierra Leone HQ',
                flag: '🇸🇱',
                city: 'Freetown, SL',
                image: 'https://images.unsplash.com/photo-1528659515089-60d7c001f31f?q=80&w=1200',
                members: 3200,
                desc: 'Supporting the global FBC community and managing the central scholarship fund.',
              },
              {
                id: 'uk',
                name: 'UK Chapter',
                flag: '🇬🇧',
                city: 'London, UK',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200',
                members: 284,
                desc: 'Helping the FBC diaspora in the UK thrive through networking and professional development.',
              },
              {
                id: 'usa',
                name: 'USA Chapter',
                flag: '🇺🇸',
                city: 'Washington DC',
                image: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=1200',
                members: 196,
                desc: 'Empowering FBC graduates in North America through community building and investment.',
              }
            ].map(chapter => (
              <div
                key={chapter.id}
                onClick={() => navigate(`/chapters/${chapter.id}`)}
                className={`group relative h-[400px] rounded-[32px] overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all border 
                  ${chapter.id === joinedChapterId ? 'border-fbc-green ring-4 ring-fbc-green/10' : 'border-gray-100'}`}>
                <img src={chapter.image} alt={chapter.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="text-4xl drop-shadow-xl">{chapter.flag}</span>
                  {chapter.id === joinedChapterId && (
                    <span className="bg-fbc-green text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
                      Your Chapter
                    </span>
                  )}
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-1.5 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5">
                    <MapPin className="w-3 px-0 h-3" /> {chapter.city}
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">{chapter.name}</h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-6 line-clamp-2">
                    {chapter.desc}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-block bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2">
                      <div className="font-bold text-sm">{chapter.members.toLocaleString()}</div>
                      <div className="text-[8px] text-white/50 uppercase font-bold tracking-widest">Alumni</div>
                    </div>
                    <button className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-xl hover:-translate-y-1 active:scale-95 whitespace-nowrap 
                      ${chapter.id === joinedChapterId ? 'bg-white/10 text-white border border-white/30' : 'bg-fbc-green text-white hover:bg-fbc-green-dark'}`}>
                      {chapter.id === joinedChapterId ? 'View Site' : 'Join Chapter'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation CTA Strip */}
      <div className="bg-fbc-green mx-16 mb-16 rounded-[40px] px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-fbc-green/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-2xl relative z-10">
          <div className="text-white text-3xl font-bold mb-4">
            Support the next generation of FBC excellence
          </div>
          <div className="text-white/70 text-base leading-relaxed">
            Your contributions fund scholarships for over 50 students annually and support critical infrastructure projects across the campus. Join us in shaping the future of Fourah Bay College.
          </div>
        </div>
        <button
          onClick={() => navigate('/donate')}
          className="bg-fbc-gold text-white font-bold px-10 py-4 rounded-2xl hover:bg-yellow-600 transition-all shadow-xl hover:-translate-y-1 active:scale-95 whitespace-nowrap flex items-center gap-2 relative z-10">
          Donate Now <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}

export default Home;