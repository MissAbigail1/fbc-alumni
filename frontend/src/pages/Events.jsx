import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Calendar, Clock, MapPin, CalendarDays } from 'lucide-react';

function Events() {
  const [activeTab, setActiveTab] = useState('All');
  const [rsvpd, setRsvpd] = useState([]);

  const tabs = ['All', 'In person', 'Virtual', 'Reunions', 'Diaspora'];

  const events = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
      date: '28 Mar 2026',
      time: '6:00 PM – 9:00 PM',
      title: 'FBC Networking Night — Freetown',
      location: 'Aberdeen Beach Hotel, Freetown',
      type: 'In person',
      attendees: [
        { initials: 'MB', bg: 'bg-green-400' },
        { initials: 'AK', bg: 'bg-purple-400' },
        { initials: 'FK', bg: 'bg-teal-400' },
      ],
      attendeeCount: 42,
      featured: true,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80',
      date: '12 Apr 2026',
      time: '7:00 PM – 9:00 PM GMT',
      title: 'Diaspora Virtual Meetup',
      location: 'Online · Zoom',
      type: 'Virtual',
      attendees: [
        { initials: 'DT', bg: 'bg-blue-400' },
        { initials: 'JS', bg: 'bg-red-400' },
        { initials: 'RS', bg: 'bg-rose-400' },
      ],
      attendeeCount: 87,
      featured: false,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80',
      date: '3 May 2026',
      time: '7:00 PM – 11:00 PM',
      title: 'Class of 1985 Reunion Dinner',
      location: 'Radisson Blu Hotel, Freetown',
      type: 'Reunions',
      attendees: [
        { initials: 'PC', bg: 'bg-amber-400' },
        { initials: 'MB', bg: 'bg-green-400' },
      ],
      attendeeCount: 28,
      featured: false,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80',
      date: '17 May 2026',
      time: '6:30 PM – 8:30 PM BST',
      title: 'FBC Careers Webinar — UK & Europe',
      location: 'Online · Microsoft Teams',
      type: 'Virtual',
      attendees: [
        { initials: 'DT', bg: 'bg-blue-400' },
        { initials: 'AK', bg: 'bg-purple-400' },
      ],
      attendeeCount: 56,
      featured: false,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
      date: '27 Jun 2027',
      title: 'FBC 200th Anniversary Gala',
      time: '6:00 PM – Midnight',
      location: 'State House Grounds, Freetown',
      type: 'In person',
      attendees: [
        { initials: 'MB', bg: 'bg-green-400' },
        { initials: 'DT', bg: 'bg-blue-400' },
        { initials: 'PC', bg: 'bg-amber-400' },
        { initials: 'AK', bg: 'bg-purple-400' },
      ],
      attendeeCount: 312,
      featured: false,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80',
      date: '14 Jun 2026',
      time: '10:00 AM – 4:00 PM',
      title: 'FBC Alumni Sports Day',
      location: 'FBC Sports Grounds, Freetown',
      type: 'In person',
      attendees: [
        { initials: 'FK', bg: 'bg-teal-400' },
        { initials: 'SB', bg: 'bg-indigo-400' },
      ],
      attendeeCount: 65,
      featured: false,
    },
  ];

  const filtered = events.filter(e =>
    activeTab === 'All' || e.type === activeTab
  );

  const toggleRsvp = (id) => {
    setRsvpd(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Events & reunions</h1>
          <p className="text-gray-500 text-sm">
            In-person gatherings in Freetown and virtual events for alumni worldwide
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1 mb-8 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-medium transition-all border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-fbc-green text-fbc-green'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="flex flex-col gap-4">
          {filtered.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all overflow-hidden flex">

              {/* Event Image */}
              <div className="relative w-48 flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {/* Featured badge */}
                {event.featured && (
                  <div className="absolute top-3 left-3 bg-fbc-gold text-white text-xs font-semibold px-2 py-1 rounded-lg">
                    Featured
                  </div>
                )}
                {/* Type badge */}
                <div className={`absolute bottom-3 left-3 text-xs font-semibold px-2 py-1 rounded-lg
                  ${event.type === 'Virtual'
                    ? 'bg-blue-600 text-white'
                    : event.type === 'Reunions'
                    ? 'bg-fbc-gold text-white'
                    : 'bg-fbc-green text-white'}`}>
                  {event.type}
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 px-6 py-5 flex items-center justify-between gap-4">
                <div className="flex-1">
                  {/* Date & Time */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                    {event.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Right — Attendees & RSVP */}
                <div className="flex flex-col items-end gap-3 flex-shrink-0">

                  {/* RSVP Button */}
                  <button
                    onClick={() => toggleRsvp(event.id)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border
                      ${rsvpd.includes(event.id)
                        ? 'bg-fbc-green-light text-fbc-green border-fbc-green'
                        : 'bg-white text-fbc-green border-fbc-green hover:bg-fbc-green hover:text-white'}`}>
                    {rsvpd.includes(event.id) ? '✓ RSVP\'d' : 'RSVP'}
                  </button>

                  {/* Attendee Avatars */}
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center">
                      {event.attendees.map((a, i) => (
                        <div
                          key={i}
                          className={`w-7 h-7 rounded-full ${a.bg} flex items-center justify-center text-white text-xs font-bold border-2 border-white -ml-2 first:ml-0`}>
                          {a.initials}
                        </div>
                      ))}
                      {event.attendeeCount > event.attendees.length && (
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold border-2 border-white -ml-2">
                          +{event.attendeeCount - event.attendees.length}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-400">
                      {event.attendeeCount} attending
                    </span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <CalendarDays className="w-10 h-10 text-gray-300 mx-auto mb-4" />
            <div className="text-sm font-semibold text-gray-900 mb-1">No events found</div>
            <div className="text-xs text-gray-500">Try selecting a different category</div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Events;