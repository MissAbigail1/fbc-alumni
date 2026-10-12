import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, GraduationCap, CalendarDays, BookOpen, Newspaper, Calendar, MapPin } from 'lucide-react';
import BicentennialCountdown from '../components/BicentennialCountdown';

function Home() {
  const navigate = useNavigate();

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
  
  const events = [
    {
      id: 2,
      image: '/images/fbc-building.jpg',
      date: 'September 2026',
      title: 'Alumni Association Dinner',
      location: 'TBC',
      type: 'In person',
      desc: 'An elegant alumni dinner bringing together FBC graduates from across the world to reconnect, celebrate, and strengthen the alumni bond.',
      attendeeCount: null,
      chapterId: 'sl',
      cta: 'Learn More'
    },
    {
      id: 3,
      image: '/images/fbc-building.jpg',
      date: 'October 2026',
      title: 'Beach Fiesta',
      location: 'Freetown, Sierra Leone',
      type: 'In person',
      desc: 'A fun-filled beach celebration for FBC alumni and friends — music, food, and community spirit on the shores of Freetown.',
      attendeeCount: null,
      chapterId: 'sl',
      cta: 'Learn More'
    }
  ];


  return (
    <div className="min-h-screen bg-stone-50 font-sans">

      {/* Hero Section */}
      <div className="relative bg-white min-h-screen lg:min-h-[680px] xl:min-h-[760px]">

        {/* Background Image */}
        <img
          src="/fbc-building.png"
          alt="FBC Campus - Mount Aureol"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Moderate overlay preserves the photograph while keeping the white text readable. */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.28) 50%, rgba(0, 0, 0, 0.40) 100%)'
          }}
        />

        {/* ── Main content — centred vertically in the upper two-thirds ── */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6
            pt-44 pb-48 md:pt-56 md:pb-56 lg:min-h-[680px] lg:pt-40 lg:pb-40
            xl:min-h-[760px] xl:pt-48 xl:pb-48">

          {/* Location badge */}
          <span className="inline-block bg-white/10 backdrop-blur-md text-white/80
                           text-[10px] font-semibold px-5 py-1.5 rounded-md mb-8
                           border border-white/20 tracking-[0.2em] uppercase">
            Fourah Bay College · Est. 1827 · Mount Aureol, Freetown
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] lg:text-[3.25rem] xl:text-[3.5rem] font-semibold leading-[1.3] mb-6
                         max-w-3xl text-white drop-shadow-md tracking-tight">
            <span className="block">Connecting Fourah Bay College</span>
            <span className="block mt-2">Alumni Across Generations</span>
          </h1>

          {/* Description */}
          <p className="text-white/75 text-base leading-[1.85] mb-10
                        max-w-[600px] font-light">
            The official home of the Fourah Bay College Alumni Association. Stay connected
            with alumni news, upcoming events, our history, leadership, and the continuing
            legacy of Sierra Leone's oldest university.
          </p>

          {/* CTA Buttons — slimmer, elegant */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/events')}
              className="bg-fbc-gold text-white font-semibold px-7 py-2.5 rounded-lg
                         hover:bg-yellow-600 transition-all flex items-center gap-2
                         text-sm shadow-md hover:-translate-y-0.5">
              View Upcoming Events <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigate('/history')}
              className="bg-white/12 backdrop-blur-md text-white/90 text-sm font-medium
                         px-7 py-2.5 rounded-lg border border-white/25
                         hover:bg-white/20 transition-all">
              Read Our Story
            </button>
          </div>

        </div>

        {/* ── Statistics — absolute bottom layer, centred, floats independently ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10
                        hidden md:flex justify-center gap-5 px-6 md:px-16 pb-10 lg:pb-8">
          {[
            { val: '1827',      label: 'Founded' },
            { val: '200 Years', label: 'Legacy of Excellence' },
            { val: 'Global',    label: 'Alumni Community' },
            { val: 'FBC200',    label: 'Bicentenary Celebration' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/8 backdrop-blur-sm border border-white/12
                         rounded-xl px-6 py-3.5 text-white text-center
                         shadow-sm min-w-[140px]">
              <div className="text-base font-bold tracking-wide leading-none">
                {stat.val}
              </div>
              <div className="text-[9px] text-white/55 mt-1.5 font-medium
                              uppercase tracking-[0.18em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Content Section Below Hero */}
      <div className="px-6 md:px-16 py-12 md:py-20 lg:py-16 xl:py-20 border-b border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
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
            onClick={() => navigate('/history')}
            className="bg-fbc-green text-white font-semibold px-7 py-3 rounded-lg hover:bg-fbc-green-dark transition-all text-sm flex items-center gap-2 w-fit shadow-sm hover:shadow-md">
            Explore Our History <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative bg-stone-200 rounded-xl">
          {/* TODO: Replace fbc-graduates.jpg with real FBC alumni/graduation photo showing alumni diversity */}
          <img
            src="/images/fbc-graduates.jpg"
            alt="FBC Alumni and Graduates"
            className="rounded-xl w-full h-80 lg:h-auto lg:aspect-[4/3] object-cover shadow-md"
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
      </div>

      {/* Bicentennial Countdown Section */}
      <BicentennialCountdown />

      {/* 3 Feature Cards */}
      <div className="px-6 md:px-16 py-12 md:py-16 lg:py-12 xl:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3 text-center">
          Explore the Alumni Association
        </h2>
        <p className="text-gray-600 text-base text-center mb-12 max-w-2xl mx-auto">
          Everything you need to stay connected with the Fourah Bay College community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {[
            { title: 'Discover Our History', desc: 'Explore the story of Fourah Bay College, its alumni association, milestones, and lasting contribution to Sierra Leone and beyond.', link: 'Read History', page: '/history', icon: <BookOpen className="w-5 h-5 text-fbc-green" /> },
            { title: 'Attend Upcoming Events', desc: 'Stay informed about alumni gatherings, bicentenary celebrations, lectures, networking opportunities and official association activities.', link: 'View Events', page: '/events', icon: <CalendarDays className="w-5 h-5 text-fbc-green" /> },
            { title: 'Stay Updated', desc: 'Read the latest announcements, alumni news, leadership updates and important information from the association.', link: 'Latest Updates', page: '/updates', icon: <Newspaper className="w-5 h-5 text-fbc-green" /> },
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
      </div>

      {/* Alumni Membership Section */}
      <section className="bg-white px-6 md:px-16 py-14 md:py-24 border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div className="lg:pr-8">
              <span className="text-fbc-green text-xs font-semibold uppercase tracking-[0.2em] mb-4 block border-l-2 border-fbc-gold pl-4">
                Membership
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight mb-6">
                HOW TO BECOME AN ALUMNI
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 max-w-xl">
                Were you part of the Fourah Bay College family? If you were formally enrolled at Fourah Bay College to pursue a degree, diploma, certificate or licentiate course, you are eligible to become an Alumni Member of the Fourah Bay College Alumni Association.
              </p>
              <button
                type="button"
                disabled
                className="bg-fbc-green text-white/70 font-semibold px-7 py-3 rounded-lg text-sm flex items-center gap-2 shadow-sm cursor-not-allowed opacity-75"
                aria-disabled="true">
                Become a Member <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div>
              <img
                src="/images/history/fbc-alumni-reunion-banquet-2011.jpg"
                alt="Fourah Bay College alumni meeting together"
                className="w-full aspect-[16/10] object-cover border border-stone-200"
              />
            </div>
          </div>

          <div className="mt-14 md:mt-20 border-t border-stone-300 pt-8 md:pt-10">
            <div className="flex items-center justify-between mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fbc-green">The membership journey</p>
              <span className="hidden sm:block h-px flex-1 bg-fbc-gold/50 ml-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
              {[
                {
                  number: '01',
                  title: 'CHECK YOUR ELIGIBILITY',
                  description: 'Formerly enrolled at Fourah Bay College in a qualifying degree, diploma, certificate or licentiate programme.'
                },
                {
                  number: '02',
                  title: 'REGISTER',
                  description: 'Complete the Alumni Association membership registration process.'
                },
                {
                  number: '03',
                  title: 'PAY YOUR DUES',
                  description: 'Pay the applicable registration fee and annual membership dues.'
                },
                {
                  number: '04',
                  title: 'STAY CONNECTED',
                  description: 'Join the Alumni Association and stay connected with fellow alumni, events, activities and the continued development of Fourah Bay College.'
                }
              ].map(step => (
                <div key={step.number} className="border-t border-stone-300 pt-4">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-fbc-gold text-xs font-semibold tracking-[0.16em]">{step.number}</span>
                    <h3 className="text-sm font-bold text-gray-900 tracking-wide">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <div className="bg-stone-50 px-6 md:px-16 py-12 md:py-20 border-b border-stone-200">
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
            {events.map(event => (
              <div
                key={event.id}
                onClick={() => navigate('/events')}
                className="bg-white rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col sm:flex-row cursor-pointer group">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-stone-200">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-lg shadow-lg
                    ${event.type === 'Virtual' ? 'bg-blue-600 text-white' : 'bg-fbc-green text-white'}`}>
                    {event.type}
                  </div>
                </div>
                <div className="flex-1 px-8 py-6 flex items-center">
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
      <div className="bg-stone-50 px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-fbc-green text-xs font-semibold uppercase tracking-wider mb-3 block border-l-2 border-fbc-green pl-3">
                News &amp; Updates
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Latest From FBC</h2>
            </div>
            <button
              onClick={() => navigate('/updates')}
              className="text-fbc-green text-sm font-semibold uppercase tracking-wide hover:underline flex items-center gap-2 transition-all">
              All updates <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div
                key={i}
                onClick={() => navigate('/updates')}
                className="bg-white rounded-lg overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">
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
                  <span className="text-sm font-semibold text-fbc-green flex items-center gap-1 group-hover:underline">
                    Read more <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Global Alumni Network — informational showcase, no interactive elements */}
      <div className="bg-white px-6 md:px-16 py-12 md:py-20 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-fbc-green text-xs font-semibold uppercase tracking-wider mb-3 block border-l-2 border-fbc-green pl-3">
              Our Chapters
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Global Alumni Network</h2>
            <p className="text-gray-600 mt-3 max-w-2xl text-sm leading-relaxed">
              Fourah Bay College alumni are connected across five continents. Our chapters bring the FBC community together wherever alumni have settled.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[
              {
                name: 'Sierra Leone Chapter',
                flag: '🇸🇱',
                city: 'Freetown, Sierra Leone',
                image: '/images/fbc-campus-freetown.jpg',
                desc: 'Our home chapter in Freetown — the heartbeat of the association, connecting local alumni and supporting the college\'s bicentenary legacy.',
              },
              {
                name: 'Nigeria Chapter',
                flag: '🇳🇬',
                city: 'Lagos & Abuja, Nigeria',
                image: '/images/fbc-building.jpg',
                desc: 'FBC alumni across Nigeria forging professional networks and celebrating the ties between two of West Africa\'s great academic traditions.',
              },
              {
                name: 'United Kingdom Chapter',
                flag: '🇬🇧',
                city: 'London, United Kingdom',
                image: '/images/fbc-uk-chapter.jpg',
                desc: 'FBC alumni in the UK united through culture, networking events, and a shared pride in Sierra Leone\'s oldest university.',
              },
              {
                name: 'USA Chapter',
                flag: '🇺🇸',
                city: 'United States',
                image: '/images/fbc-north-america-chapter.jpg',
                desc: 'Alumni across the United States staying connected through mentorship, community events, and support for FBC\'s ongoing mission.',
              },
              {
                name: 'Gambia Chapter',
                flag: '🇬🇲',
                city: 'Banjul, Gambia',
                image: '/images/fbc-building.jpg',
                desc: 'FBC alumni in The Gambia maintaining strong bonds with the college and contributing to the growth of the wider alumni community.',
              },
            ].map((chapter, i) => (
              <div
                key={i}
                className="group relative h-[380px] rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-200">
                <img
                  src={chapter.image}
                  alt={chapter.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute top-5 left-5">
                  <span className="text-2xl drop-shadow-lg">{chapter.flag}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-1.5 text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1.5">
                    <MapPin className="w-3 h-3" /> {chapter.city}
                  </div>
                  <h3 className="text-base font-bold leading-tight mb-2">{chapter.name}</h3>
                  <p className="text-white/65 text-xs leading-relaxed line-clamp-3">{chapter.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Alumni Leadership Section */}
      <div className="bg-white px-6 md:px-16 py-12 md:py-20 border-t border-stone-200">
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
        </div>
      </div>


    </div>
  );
}

export default Home;