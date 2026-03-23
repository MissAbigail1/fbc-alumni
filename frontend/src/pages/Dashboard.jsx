import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Feed() {
  const navigate = useNavigate();

  const suggestedAlumni = [
    { initials: 'MB', name: 'Mohamed Bangura', role: 'Senior Lawyer', year: '2008', bg: 'bg-green-100', text: 'text-green-800', mentor: true },
    { initials: 'DT', name: 'Dr. David Tucker', role: 'Medical Consultant', year: '1999', bg: 'bg-blue-100', text: 'text-blue-800', mentor: true },
    { initials: 'FK', name: 'Fatima Kamara', role: 'Medical Doctor', year: '2010', bg: 'bg-teal-100', text: 'text-teal-800', mentor: true },
  ];

  const events = [
    { day: '28', month: 'Mar', title: 'FBC Networking Night', location: 'Aberdeen Beach Hotel · Freetown' },
    { day: '12', month: 'Apr', title: 'Diaspora Virtual Meetup', location: 'Online · Zoom' },
    { day: '3', month: 'May', title: 'Class of 1985 Reunion', location: 'Radisson Blu · Freetown' },
  ];

  const news = [
    { category: 'Announcement', title: 'FBC Alumni website officially launches', time: '2 days ago' },
    { category: 'Event', title: 'FBC 200th Anniversary Gala — save the date', time: '5 days ago' },
    { category: 'Spotlight', title: 'Dr. David Tucker named top consultant in UK', time: '1 week ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-3 gap-6">

        {/* Left — Profile Card */}
        <div className="col-span-1 flex flex-col gap-5">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="h-16 bg-fbc-green"></div>
            <div className="px-5 pb-5">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-lg -mt-7 border-4 border-white mb-3">
                AK
              </div>
              <div className="text-sm font-bold text-gray-900">Aminata Koroma</div>
              <div className="text-xs text-gray-500 mb-3">NGO Analyst · Class of 2022</div>
              <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
                {[
                  { label: 'Profile views', val: '12' },
                  { label: 'Connections', val: '3' },
                  { label: 'Events RSVP\'d', val: '1' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{stat.label}</span>
                    <span className="text-xs font-bold text-fbc-green">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-bold text-gray-900">Upcoming events</div>
              <button onClick={() => navigate('/events')} className="text-xs text-fbc-green hover:underline">See all</button>
            </div>
            <div className="flex flex-col gap-3">
              {events.map((event, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-fbc-green-light rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-sm font-bold text-fbc-green leading-none">{event.day}</div>
                    <div className="text-xs text-fbc-green">{event.month}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">{event.title}</div>
                    <div className="text-xs text-gray-400">{event.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle — Feed */}
        <div className="col-span-1 flex flex-col gap-5">
          <div className="text-sm font-bold text-gray-900 mb-1">Your feed</div>

          {/* New alumni joined */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">New alumni joined</div>
            <div className="flex flex-col gap-3">
              {suggestedAlumni.map((a, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${a.bg} flex items-center justify-center text-xs font-bold ${a.text} flex-shrink-0`}>
                    {a.initials}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-gray-900">{a.name}</div>
                    <div className="text-xs text-gray-400">{a.role} · {a.year}</div>
                  </div>
                  <button
                    onClick={() => navigate('/directory')}
                    className="text-xs font-semibold text-fbc-green border border-fbc-green px-3 py-1 rounded-full hover:bg-fbc-green-light transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/directory')}
              className="w-full mt-4 text-xs font-semibold text-fbc-green border border-fbc-green-light py-2 rounded-xl hover:bg-fbc-green-light transition-colors">
              Browse all alumni →
            </button>
          </div>

          {/* Latest News */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Latest news</div>
            <div className="flex flex-col gap-4">
              {news.map((item, i) => (
                <div key={i} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-xs bg-fbc-green-light text-fbc-green px-2 py-0.5 rounded-full font-medium">
                    {item.category}
                  </span>
                  <div className="text-xs font-semibold text-gray-900 mt-1.5 mb-1 leading-snug">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.time}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/news')}
              className="w-full mt-4 text-xs font-semibold text-fbc-green border border-fbc-green-light py-2 rounded-xl hover:bg-fbc-green-light transition-colors">
              Read all news →
            </button>
          </div>
        </div>

        {/* Right — Suggested Mentors & Donate */}
        <div className="col-span-1 flex flex-col gap-5">

          {/* Suggested Mentors */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-bold text-gray-900">Suggested mentors</div>
              <button onClick={() => navigate('/directory')} className="text-xs text-fbc-green hover:underline">See all</button>
            </div>
            <div className="flex flex-col gap-3">
              {suggestedAlumni.map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className={`w-9 h-9 rounded-full ${a.bg} flex items-center justify-center text-xs font-bold ${a.text} flex-shrink-0`}>
                    {a.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-900 truncate">{a.name}</div>
                    <div className="text-xs text-gray-400 truncate">{a.role}</div>
                  </div>
                  <button className="text-xs font-semibold text-white bg-fbc-green px-3 py-1 rounded-full hover:bg-fbc-green-dark transition-colors flex-shrink-0">
                    Message
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Give Back CTA */}
          <div className="bg-fbc-green rounded-2xl p-5">
            <div className="text-white font-bold text-sm mb-1">Give back to FBC</div>
            <div className="text-white/70 text-xs mb-4 leading-relaxed">
              Your donation funds the next generation of FBC students
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-white text-lg font-bold">£24,800</div>
              <div className="text-white/60 text-xs">raised this year</div>
            </div>
            <button
              onClick={() => navigate('/donate')}
              className="w-full bg-fbc-gold text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-yellow-600 transition-colors">
              Donate now →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Feed;