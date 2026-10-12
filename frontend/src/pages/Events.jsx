import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, CalendarDays } from 'lucide-react';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'http://localhost/fbc-alumni/backend/get_events.php'
        );

        if (!response.ok) {
          throw new Error('Unable to load events. Please try again later.');
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || 'Unable to load events.');
        }

        setEvents(data.events || []);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Unable to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Original Hero Header - unchanged */}
      <div className="bg-white border-b border-gray-100 pt-16 pb-12 mb-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-fbc-green text-[10px] font-black uppercase tracking-widest mb-4">
            <CalendarDays className="w-3.5 h-3.5" /> FBC CALENDAR
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Events & Reunions
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            In-person gatherings in Freetown and virtual events for alumni
            worldwide. Reconnect with the FBC family.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20">

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <CalendarDays className="w-10 h-10 text-gray-300 mx-auto mb-4" />
            <div className="text-sm text-gray-500">
              Loading events...
            </div>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="text-center py-16">
            <CalendarDays className="w-10 h-10 text-gray-300 mx-auto mb-4" />
            <div className="text-sm font-semibold text-gray-900 mb-1">
              Unable to load events
            </div>
            <div className="text-xs text-gray-500">
              {error}
            </div>
          </div>
        )}

        {/* Events List */}
        {!loading && !error && (
          <div className="flex flex-col gap-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col sm:flex-row cursor-pointer group"
              >

                {/* Event Image - original layout preserved */}
                <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                  <img
                   src={
  event.image
    ? event.image.startsWith('http')
      ? event.image
      : event.image.startsWith('/uploads/')
        ? event.image
        : `http://localhost/fbc-alumni/${event.image.replace(/^\/+/, '')}`
    : '/images/fbc-building.jpg'
}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/fbc-building.jpg';
                    }}
                  />
                </div>

                {/* Event Details - original layout preserved */}
                <div className="flex-1 px-6 py-5 flex items-center">
                  <div>

                    {/* Date & Time */}
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{event.event_date}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{event.event_time || 'TBC'}</span>
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

                    {/* Description - only shown when available */}
                    {event.description && (
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                        {event.description}
                      </p>
                    )}

                  </div>
                </div>
              </div>
            ))}

            {/* Empty State */}
            {events.length === 0 && (
              <div className="text-center py-16">
                <CalendarDays className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  No upcoming events
                </div>
                <div className="text-xs text-gray-500">
                  Please check back soon for upcoming events.
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default Events;
