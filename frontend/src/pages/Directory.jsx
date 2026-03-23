import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Directory() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState('All');
  const [activeFilters, setActiveFilters] = useState({
    decade: '',
    faculty: '',
    location: '',
    mentor: false, 
  });

const [messageModal, setMessageModal] = useState(null);
const [connected, setConnected] = useState([]);

  const alumni = [
    { id: 1, initials: 'MB', name: 'Mohamed Bangura', role: 'Senior Lawyer', faculty: 'Law', year: '2008', location: 'Freetown, Sierra Leone', mentor: true, bg: 'bg-green-400', text: 'text-white', decade: '2000s', cover: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80' },
    { id: 2, initials: 'DT', name: 'Dr. David Tucker', role: 'Medical Consultant', faculty: 'Medicine', year: '1999', location: 'London, UK', mentor: true, bg: 'bg-blue-400', text: 'text-white', decade: '1990s', cover: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80' },
    { id: 3, initials: 'PC', name: 'Prof. Patricia Cole', role: 'Retired Educator', faculty: 'Education', year: '1985', location: 'Freetown, Sierra Leone', mentor: false, bg: 'bg-amber-400', text: 'text-white', decade: '1980s', cover: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80' },
    { id: 4, initials: 'AK', name: 'Aminata Koroma', role: 'NGO Analyst', faculty: 'Economics', year: '2022', location: 'Freetown, Sierra Leone', mentor: false, bg: 'bg-purple-400', text: 'text-white', decade: '2020s', cover: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80' },
    { id: 5, initials: 'JS', name: 'James Sesay', role: 'Civil Engineer', faculty: 'Engineering', year: '2005', location: 'Toronto, Canada', mentor: true, bg: 'bg-red-400', text: 'text-white', decade: '2000s', cover: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80' },
    { id: 6, initials: 'FK', name: 'Fatima Kamara', role: 'Medical Doctor', faculty: 'Medicine', year: '2010', location: 'Freetown, Sierra Leone', mentor: true, bg: 'bg-teal-400', text: 'text-white', decade: '2010s', cover: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
    { id: 7, initials: 'SB', name: 'Samuel Bangura', role: 'Software Engineer', faculty: 'Engineering', year: '2018', location: 'Accra, Ghana', mentor: false, bg: 'bg-indigo-400', text: 'text-white', decade: '2010s', cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80' },
    { id: 8, initials: 'MW', name: 'Mary Williams', role: 'Journalist', faculty: 'Arts', year: '2015', location: 'Freetown, Sierra Leone', mentor: true, bg: 'bg-pink-400', text: 'text-white', decade: '2010s', cover: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80' },
    { id: 9, initials: 'AB', name: 'Alpha Bah', role: 'Economist', faculty: 'Economics', year: '2012', location: 'Washington DC, USA', mentor: true, bg: 'bg-orange-400', text: 'text-white', decade: '2010s', cover: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80' },
    { id: 10, initials: 'YC', name: 'Yvonne Cole', role: 'Architect', faculty: 'Arts', year: '2009', location: 'Freetown, Sierra Leone', mentor: false, bg: 'bg-cyan-400', text: 'text-white', decade: '2000s', cover: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80' },
    { id: 11, initials: 'IK', name: 'Ibrahim Koroma', role: 'Business Analyst', faculty: 'Economics', year: '2016', location: 'Lagos, Nigeria', mentor: false, bg: 'bg-lime-400', text: 'text-white', decade: '2010s', cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { id: 12, initials: 'RS', name: 'Rose Sesay', role: 'Nurse Practitioner', faculty: 'Medicine', year: '2014', location: 'Manchester, UK', mentor: true, bg: 'bg-rose-400', text: 'text-white', decade: '2010s', cover: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80' },
  ];

  const filtered = alumni.filter(a => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.faculty.toLowerCase().includes(search.toLowerCase()) ||
      a.role.toLowerCase().includes(search.toLowerCase()) ||
      a.location.toLowerCase().includes(search.toLowerCase());
    const matchesDecade = !activeFilters.decade || a.decade === activeFilters.decade;
    const matchesFaculty = !activeFilters.faculty || a.faculty === activeFilters.faculty;
    const matchesLocation = !activeFilters.location ||
      (activeFilters.location === 'Diaspora' && !a.location.includes('Sierra Leone')) ||
      (activeFilters.location === 'Freetown' && a.location.includes('Sierra Leone'));
    const matchesMentor = !activeFilters.mentor || a.mentor === true;
    return matchesSearch && matchesDecade && matchesFaculty && matchesLocation && matchesMentor;
  });

  const activeFilterCount = [
    activeFilters.decade,
    activeFilters.faculty,
    activeFilters.location,
    activeFilters.mentor,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setActiveFilters({ decade: '', faculty: '', location: '', mentor: false });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Navbar */}
     <Navbar />

      {/* Top Bar — Search & Filters */}
      <div className="bg-white border-b border-gray-100 px-10 py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search people..."
              className="w-full border border-gray-200 rounded-lg pl-8 pr-4 py-2 text-sm focus:outline-none focus:border-fbc-green"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 hover:border-fbc-green hover:text-fbc-green transition-all">
              <span>⚙</span>
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-fbc-green text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-fbc-green bg-white">
                <option>All</option>
                <option>Name</option>
                <option>Recent</option>
                <option>Mentor</option>
              </select>
            </div>

            {/* Results count */}
            <span className="text-xs text-gray-400">
              {filtered.length} alumni
            </span>
          </div>
        </div>

        {/* Active filter chips */}
        {activeFilterCount > 0 && (
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="text-xs text-gray-500">Active:</span>
            {activeFilters.decade && (
              <span className="text-xs bg-fbc-green-light text-fbc-green px-3 py-1 rounded-full flex items-center gap-1">
                Class of {activeFilters.decade}
                <button onClick={() => setActiveFilters(p => ({ ...p, decade: '' }))} className="ml-1 hover:text-red-500">×</button>
              </span>
            )}
            {activeFilters.faculty && (
              <span className="text-xs bg-fbc-green-light text-fbc-green px-3 py-1 rounded-full flex items-center gap-1">
                {activeFilters.faculty}
                <button onClick={() => setActiveFilters(p => ({ ...p, faculty: '' }))} className="ml-1 hover:text-red-500">×</button>
              </span>
            )}
            {activeFilters.location && (
              <span className="text-xs bg-fbc-green-light text-fbc-green px-3 py-1 rounded-full flex items-center gap-1">
                {activeFilters.location}
                <button onClick={() => setActiveFilters(p => ({ ...p, location: '' }))} className="ml-1 hover:text-red-500">×</button>
              </span>
            )}
            {activeFilters.mentor && (
              <span className="text-xs bg-fbc-green-light text-fbc-green px-3 py-1 rounded-full flex items-center gap-1">
                Open to mentor
                <button onClick={() => setActiveFilters(p => ({ ...p, mentor: false }))} className="ml-1 hover:text-red-500">×</button>
              </span>
            )}
            <button onClick={clearFilters} className="text-xs text-red-400 hover:underline ml-1">Clear all</button>
          </div>
        )}
      </div>

      {/* Alumni Grid */}
      <div className="px-10 py-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map(alumni => (
              <div key={alumni.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">

                {/* Cover Image */}
                <div className="relative h-28">
                  <img
                    src={alumni.cover}
                    alt="cover"
                    className="w-full h-full object-cover"
                  />
                  {/* Mentor badge on cover */}
                  {alumni.mentor && (
                    <span className="absolute top-2 right-2 text-xs bg-fbc-gold text-white px-2 py-0.5 rounded-full font-medium">
                      Mentor
                    </span>
                  )}
                </div>

                {/* Avatar — overlaps cover */}
                <div className="flex justify-center -mt-7 mb-2 relative z-10">
                  <div className={`w-14 h-14 rounded-full ${alumni.bg} flex items-center justify-center text-base font-bold ${alumni.text} border-4 border-white`}>
                    {alumni.initials}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center px-4 pb-2">
                  <div className="text-sm font-bold text-gray-900">{alumni.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{alumni.role}</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-xs">📍</span>
                    <span className="text-xs text-gray-400">{alumni.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-0.5">
                    <span className="text-xs">🎓</span>
                    <span className="text-xs text-gray-400">{alumni.faculty} · {alumni.year}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 px-4 pb-3 mt-2">
                  <button
  onClick={() => setMessageModal(alumni)}
  className="flex-1 bg-fbc-green text-white text-xs font-semibold py-1.5 rounded-lg hover:bg-fbc-green-dark transition-colors">
  Message
</button>
                 <button
  onClick={() => setConnected(prev =>
    prev.includes(alumni.id)
      ? prev.filter(id => id !== alumni.id)
      : [...prev, alumni.id]
  )}
  className={`flex-1 text-xs font-semibold py-1.5 rounded-lg transition-colors border
    ${connected.includes(alumni.id)
      ? 'bg-fbc-green-light text-fbc-green border-fbc-green'
      : 'border-gray-200 text-gray-600 hover:border-fbc-green hover:text-fbc-green'}`}>
  {connected.includes(alumni.id) ? '✓ Connected' : 'Connect'}
</button>
                </div>

                {/* View Profile */}
                <div className="text-center pb-4">
                  <button className="text-xs text-fbc-green hover:underline font-medium">
                    View Profile
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <div className="text-sm font-semibold text-gray-900 mb-1">No alumni found</div>
            <div className="text-xs text-gray-500 mb-4">Try adjusting your search or filters</div>
            <button onClick={clearFilters} className="text-xs text-fbc-green hover:underline">Clear all filters</button>
          </div>
        )}
      </div>

      {/* Filter Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
          onClick={() => setShowModal(false)}>
          <div
            className="bg-white rounded-2xl shadow-card-hover w-full max-w-md p-6"
            onClick={e => e.stopPropagation()}>

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Filter alumni</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>

            {/* Decade */}
            <div className="mb-5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Graduation decade</label>
              <div className="flex flex-wrap gap-2">
                {['1980s', '1990s', '2000s', '2010s', '2020s'].map(d => (
                  <button
                    key={d}
                    onClick={() => setActiveFilters(prev => ({ ...prev, decade: prev.decade === d ? '' : d }))}
                    className={`text-xs px-4 py-2 rounded-full border transition-all
                      ${activeFilters.decade === d
                        ? 'bg-fbc-green text-white border-fbc-green'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-fbc-green hover:text-fbc-green'}`}>
                    Class of {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Faculty */}
            <div className="mb-5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Faculty</label>
              <div className="flex flex-wrap gap-2">
                {['Law', 'Medicine', 'Engineering', 'Economics', 'Education', 'Arts'].map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFilters(prev => ({ ...prev, faculty: prev.faculty === f ? '' : f }))}
                    className={`text-xs px-4 py-2 rounded-full border transition-all
                      ${activeFilters.faculty === f
                        ? 'bg-fbc-green text-white border-fbc-green'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-fbc-green hover:text-fbc-green'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Location</label>
              <div className="flex gap-2">
                {['Freetown', 'Diaspora'].map(l => (
                  <button
                    key={l}
                    onClick={() => setActiveFilters(prev => ({ ...prev, location: prev.location === l ? '' : l }))}
                    className={`text-xs px-4 py-2 rounded-full border transition-all
                      ${activeFilters.location === l
                        ? 'bg-fbc-green text-white border-fbc-green'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-fbc-green hover:text-fbc-green'}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Mentor Toggle */}
            <div className="mb-6 flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <div className="text-sm font-semibold text-gray-900">Open to mentor</div>
                <div className="text-xs text-gray-500">Show only alumni available to mentor</div>
              </div>
              <button
                onClick={() => setActiveFilters(prev => ({ ...prev, mentor: !prev.mentor }))}
                className={`w-11 h-6 rounded-full transition-all relative ${activeFilters.mentor ? 'bg-fbc-green' : 'bg-gray-300'}`}>
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${activeFilters.mentor ? 'left-6' : 'left-1'}`}></div>
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 border border-gray-200 text-gray-600 text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                Clear all
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-fbc-green text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-fbc-green-dark transition-colors">
                Show {filtered.length} results
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Message Modal */}
{messageModal && (
  <div
    className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
    onClick={() => setMessageModal(null)}>
    <div
      className="bg-white rounded-2xl shadow-card-hover w-full max-w-md p-6"
      onClick={e => e.stopPropagation()}>

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-900">
          Contact {messageModal.name}
        </h3>
        <button
          onClick={() => setMessageModal(null)}
          className="text-gray-400 hover:text-gray-600 text-2xl leading-none">
          ×
        </button>
      </div>

      {/* Recipient */}
      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 mb-5">
        <div className={`w-10 h-10 rounded-full ${messageModal.bg} flex items-center justify-center text-sm font-bold ${messageModal.text}`}>
          {messageModal.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{messageModal.name}</div>
          <div className="text-xs text-gray-500">{messageModal.role} · Class of {messageModal.year}</div>
        </div>
      </div>

      {/* Message */}
      <label className="text-sm font-semibold text-gray-900 block mb-2">
        Your message
      </label>
      <textarea
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-fbc-green resize-none h-24 mb-4"
        placeholder={`Hi ${messageModal.name.split(' ')[0]}, I'm an FBC alumni and I'd love to connect...`}
      />

      {/* What to share */}
      <label className="text-sm font-semibold text-gray-900 block mb-2">
        Share your contact
      </label>
      <div className="flex flex-col gap-2 mb-5">
        {[
          'Share my email address',
          'Share my WhatsApp number',
          'No contact details — just a message'
        ].map((opt, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition-all
              ${i === 0
                ? 'border-fbc-green bg-fbc-green-light'
                : 'border-gray-200 hover:border-gray-300'}`}>
            <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0
              ${i === 0
                ? 'border-fbc-green bg-fbc-green'
                : 'border-gray-300'}`}>
            </div>
            <span className="text-sm text-gray-700">{opt}</span>
          </div>
        ))}
      </div>

      {/* Send Button */}
      <button
        onClick={() => setMessageModal(null)}
        className="w-full bg-fbc-green text-white font-semibold py-3 rounded-xl hover:bg-fbc-green-dark transition-colors text-sm">
        Send contact request
      </button>
      <p className="text-xs text-gray-400 text-center mt-2">
        {messageModal.name.split(' ')[0]} will only see your contact details if they accept
      </p>

    </div>
  </div>
)}

    </div>
    
  );
  
}

export default Directory;