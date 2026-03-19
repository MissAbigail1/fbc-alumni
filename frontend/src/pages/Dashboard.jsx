import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-900">FBC Alumni</div>
        <div className="flex items-center gap-8">
          <button onClick={() => navigate('/dashboard')} className="text-sm font-medium text-gray-900">Dashboard</button>
          <button onClick={() => navigate('/directory')} className="text-sm text-gray-500 hover:text-gray-900">Directory</button>
          <button onClick={() => navigate('/events')} className="text-sm text-gray-500 hover:text-gray-900">Events</button>
          <button onClick={() => navigate('/donate')} className="text-sm text-gray-500 hover:text-gray-900">Give back</button>
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
            AK
          </div>
        </div>
      </nav>

      <div className="flex">

        {/* Sidebar */}
        <div className="w-52 border-r border-gray-200 min-h-screen p-4">
          <div className="mb-1 text-sm font-semibold text-gray-900">Hi, Aminata</div>
          <div className="text-xs text-gray-500 mb-5">Class of 2022 · Economics</div>

          <div className="flex flex-col gap-1">
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100 text-sm font-medium text-gray-900 text-left">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Overview
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 text-left">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              My profile
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 text-left">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              My mentors
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 text-left">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              My events
            </button>
            <button onClick={() => navigate('/donate')} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 text-left">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              Giving
            </button>
          </div>

          {/* Profile completion */}
          <div className="mt-6 bg-amber-50 rounded-lg p-3">
            <div className="text-xs font-semibold text-amber-700 mb-2">Profile 60% complete</div>
            <div className="h-1 bg-gray-200 rounded-full mb-1">
              <div className="h-1 bg-amber-500 rounded-full w-3/5"></div>
            </div>
            <div className="text-xs text-amber-600">Add your employer to reach 80%</div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs text-gray-500 mb-1">Profile views</div>
              <div className="text-2xl font-semibold text-gray-900">12</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs text-gray-500 mb-1">Connections</div>
              <div className="text-2xl font-semibold text-gray-900">3</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs text-gray-500 mb-1">Events RSVP'd</div>
              <div className="text-2xl font-semibold text-gray-900">1</div>
            </div>
          </div>

          {/* Suggested Mentors */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-900 mb-3">Suggested mentors for you</div>
            <div className="flex flex-col gap-3">
              {[
                { initials: 'MB', name: 'Mohamed Bangura', role: 'Senior Lawyer · Class of 2008', bg: 'bg-green-100', text: 'text-green-800' },
                { initials: 'DT', name: 'Dr. David Tucker', role: 'Medical Consultant · Class of 1999', bg: 'bg-blue-100', text: 'text-blue-800' },
              ].map((mentor, i) => (
                <div key={i} className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3">
                  <div className={`w-9 h-9 rounded-full ${mentor.bg} flex items-center justify-center text-xs font-semibold ${mentor.text}`}>
                    {mentor.initials}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{mentor.name}</div>
                    <div className="text-xs text-gray-500">{mentor.role}</div>
                  </div>
                  <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">
                    Open to mentor
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Upcoming events</div>
            <div className="flex flex-col gap-3">
              {[
                { day: '28', month: 'Mar', title: 'FBC Networking Night — Freetown', location: 'Aberdeen Beach Hotel' },
                { day: '12', month: 'Apr', title: 'Diaspora Virtual Meetup', location: 'Online · Zoom' },
              ].map((event, i) => (
                <div key={i} className="flex items-center gap-4 border border-gray-200 rounded-lg px-4 py-3">
                  <div className="text-center w-10">
                    <div className="text-lg font-semibold text-gray-900 leading-none">{event.day}</div>
                    <div className="text-xs text-gray-500">{event.month}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{event.title}</div>
                    <div className="text-xs text-gray-500">{event.location}</div>
                  </div>
                  <button className="text-xs font-semibold text-blue-600 hover:underline">RSVP</button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;