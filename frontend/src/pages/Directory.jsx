import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Directory() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All alumni');

  const filters = [
    'All alumni', 'Open to mentor', 'Class of 80s',
    'Class of 90s', 'Class of 2000s', 'Class of 2010s',
    'Diaspora', 'Freetown'
  ];

  const alumni = [
    { initials: 'MB', name: 'Mohamed Bangura', role: 'Senior Lawyer · Freetown', faculty: 'Law', year: '2008', mentor: true, bg: 'bg-green-100', text: 'text-green-800', decade: 'Class of 2000s', location: 'Freetown' },
    { initials: 'DT', name: 'Dr. David Tucker', role: 'Medical Consultant · London', faculty: 'Medicine', year: '1999', mentor: true, bg: 'bg-blue-100', text: 'text-blue-800', decade: 'Class of 90s', location: 'Diaspora' },
    { initials: 'PC', name: 'Prof. Patricia Cole', role: 'Retired Educator · Freetown', faculty: 'Education', year: '1985', mentor: false, bg: 'bg-amber-100', text: 'text-amber-800', decade: 'Class of 80s', location: 'Freetown' },
    { initials: 'AK', name: 'Aminata Koroma', role: 'NGO Analyst · Freetown', faculty: 'Economics', year: '2022', mentor: false, bg: 'bg-purple-100', text: 'text-purple-800', decade: 'Class of 2010s', location: 'Freetown' },
    { initials: 'JS', name: 'James Sesay', role: 'Engineer · London', faculty: 'Engineering', year: '2005', mentor: true, bg: 'bg-red-100', text: 'text-red-800', decade: 'Class of 2000s', location: 'Diaspora' },
    { initials: 'FK', name: 'Fatima Kamara', role: 'Doctor · Freetown', faculty: 'Medicine', year: '2010', mentor: true, bg: 'bg-teal-100', text: 'text-teal-800', decade: 'Class of 2010s', location: 'Freetown' },
  ];

  const filtered = alumni.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.faculty.toLowerCase().includes(search.toLowerCase()) ||
      a.role.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === 'All alumni' ||
      (activeFilter === 'Open to mentor' && a.mentor) ||
      (activeFilter === 'Diaspora' && a.location === 'Diaspora') ||
      (activeFilter === 'Freetown' && a.location === 'Freetown') ||
      (activeFilter === a.decade);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-900">FBC Alumni</div>
        <div className="flex items-center gap-8">
          <button onClick={() => navigate('/dashboard')} className="text-sm text-gray-500 hover:text-gray-900">Dashboard</button>
          <button onClick={() => navigate('/directory')} className="text-sm font-medium text-gray-900">Directory</button>
          <button onClick={() => navigate('/events')} className="text-sm text-gray-500 hover:text-gray-900">Events</button>
          <button onClick={() => navigate('/donate')} className="text-sm text-gray-500 hover:text-gray-900">Give back</button>
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
            AK
          </div>
        </div>
      </nav>

      <div className="px-8 py-6">

        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Alumni directory</h1>
        <p className="text-sm text-gray-500 mb-5">Search and connect with FBC graduates worldwide</p>

        {/* Search */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, faculty, profession, location..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-500"
          />
          <button className="border border-gray-300 text-gray-600 text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
            Filters
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 flex-wrap mb-4">
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

        <div className="text-xs text-gray-400 mb-4">
          Showing {filtered.length} alumni · sorted by recent activity
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((alumni, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${alumni.bg} flex items-center justify-center text-sm font-semibold ${alumni.text} flex-shrink-0`}>
                  {alumni.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{alumni.name}</div>
                  <div className="text-xs text-gray-500">{alumni.role}</div>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{alumni.faculty}</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Class of {alumni.year}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">FBC · Faculty of {alumni.faculty}</span>
                {alumni.mentor
                  ? <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">Open to mentor</span>
                  : <button className="text-xs font-semibold text-blue-600 hover:underline">Message</button>
                }
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">
            No alumni found matching your search.
          </div>
        )}

      </div>
    </div>
  );
}

export default Directory;