import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Events() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All events');
  const [rsvpd, setRsvpd] = useState([]);

  const filters = ['All events', 'In person', 'Virtual', 'Freetown', 'Diaspora', 'Reunions'];

  const events = [
    { id: 1, day: '28', month: 'Mar', title: 'FBC Networking Night — Freetown', location: 'Aberdeen Beach Hotel · 6:00 PM', type: 'In person', featured: true, desc: 'An evening of connection for Freetown-based FBC graduates. Drinks, networking and a short panel on career opportunities in Sierra Leone.' },
    { id: 2, day: '12', month: 'Apr', title: 'Diaspora Virtual Meetup', location: 'Online · Zoom · 7:00 PM GMT', type: 'Virtual', featured: false, desc: '' },
    { id: 3, day: '3', month: 'May', title: 'Class of 1985 Reunion Dinner', location: 'Radisson Blu Hotel · Freetown', type: 'In person', featured: false, desc: '' },
    { id: 4, day: '17', month: 'May', title: 'FBC Careers Webinar — UK & Europe', location: 'Online · Teams · 6:30 PM BST', type: 'Virtual', featured: false, desc: '' },
    { id: 5, day: '27', month: 'Jun', title: 'FBC 200th Anniversary Gala', location: 'State House Grounds · Freetown', type: 'In person', featured: false, desc: '' },
  ];

  const filtered = events.filter(e =>
    activeFilter === 'All events' ||
    activeFilter === e.type ||
    (activeFilter === 'Freetown' && e.location.includes('Freetown')) ||
    (activeFilter === 'Diaspora' && e.type === 'Virtual') ||
    (activeFilter === 'Reunions' && e.title.includes('Reunion'))
  );

  const toggleRsvp = (id) => {
    setRsvpd(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const featured = filtered.find(e => e.featured);
  const rest = filtered.filter(e => !e.featured);

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-900">FBC Alumni</div>
        <div className="flex items-center gap-8">
          <button onClick={() => navigate('/dashboard')} className="text-sm text-gray-500 hover:text-gray-900">Dashboard</button>
          <button onClick={() => navigate('/directory')} className="text-sm text-gray-500 hover:text-gray-900">Directory</button>
          <button onClick={() => navigate('/events')} className="text-sm font-medium text-gray-900">Events</button>
          <button onClick={() => navigate('/donate')} className="text-sm text-gray-500 hover:text-gray-900">Give back</button>
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
            AK
          </div>
        </div>
      </nav>

      <div className="px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Events & reunions</h1>
        <p className="text-sm text-gray-500 mb-5">In-person gatherings in Freetown and virtual events for alumni worldwide</p>

        {/* Filter Chips */}
        <div className="flex gap-2 flex-wrap mb-6">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs px-4 py-2 rounded-full border transition-all
                ${activeFilter === filter
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Event */}
        {featured && (
          <div className="bg-blue-50 rounded-xl p-5 mb-5 flex gap-4">
            <div className="bg-blue-900 text-blue-50 rounded-lg px-3 py-2 text-center flex-shrink-0">
              <div className="text-2xl font-semibold leading-none">{featured.day}</div>
              <div className="text-xs mt-1">{featured.month}</div>
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold bg-blue-700 text-blue-50 px-3 py-1 rounded-full">
                Featured
              </span>
              <div className="text-sm font-semibold text-blue-900 mt-2 mb-1">{featured.title}</div>
              <div className="text-xs text-blue-700 mb-2">{featured.location}</div>
              <div className="text-xs text-blue-700 mb-3">{featured.desc}</div>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleRsvp(featured.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all
                    ${rsvpd.includes(featured.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-900 text-blue-50 hover:bg-blue-800'}`}>
                  {rsvpd.includes(featured.id) ? '✓ RSVP\'d' : 'RSVP — free'}
                </button>
                <button className="text-xs text-blue-700 border border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-100">
                  Watch virtually
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Event List */}
        <div className="flex flex-col gap-3">
          {rest.map(event => (
            <div key={event.id} className="flex items-center gap-4 border border-gray-200 rounded-lg px-4 py-3">
              <div className="text-center w-10 flex-shrink-0">
                <div className="text-lg font-semibold text-gray-900 leading-none">{event.day}</div>
                <div className="text-xs text-gray-500">{event.month}</div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{event.title}</div>
                <div className="text-xs text-gray-500">{event.location}</div>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full flex-shrink-0
                ${event.type === 'Virtual'
                  ? 'bg-blue-50 text-blue-700'
                  : 'bg-green-50 text-green-700'}`}>
                {event.type}
              </span>
              {rsvpd.includes(event.id)
                ? <span className="text-xs font-semibold text-green-600 flex-shrink-0">✓ RSVP'd</span>
                : <button
                    onClick={() => toggleRsvp(event.id)}
                    className="text-xs font-semibold text-blue-600 hover:underline flex-shrink-0">
                    RSVP
                  </button>
              }
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">
            No events found for this filter.
          </div>
        )}

      </div>
    </div>
  );
}

export default Events;