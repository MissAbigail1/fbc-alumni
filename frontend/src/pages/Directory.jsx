import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin, GraduationCap } from 'lucide-react';

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

  const [connectModal, setConnectModal] = useState(null);
  const [connectMessage, setConnectMessage] = useState('');
  const [shareWhatsApp, setShareWhatsApp] = useState(false);
  const [shareEmail, setShareEmail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
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
              <SlidersHorizontal className="w-4 h-4" />
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
              <div key={alumni.id} className="bg-white rounded-md overflow-hidden shadow-card hover:shadow-card-hover transition-all">

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
                  <img src={`https://i.pravatar.cc/150?u=${alumni.id}`} alt={alumni.name} className="w-14 h-14 rounded-full border-4 border-white object-cover bg-white shadow-sm" />
                </div>

                {/* Info */}
                <div className="text-center px-4 pb-2">
                  <div className="text-sm font-bold text-gray-900">{alumni.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{alumni.role}</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs text-gray-400">{alumni.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs text-gray-400">{alumni.faculty} · {alumni.year}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-2 px-4 pb-3 mt-4">
                  <button
                    onClick={() => {
                      if (!connected.includes(alumni.id)) {
                        setConnectModal(alumni);
                        setConnectMessage('');
                        setShareWhatsApp(false);
                        setShareEmail(false);
                        setShowSuccess(false);
                      }
                    }}
                    disabled={connected.includes(alumni.id)}
                    className={`w-full text-[11px] font-bold py-2 rounded-sm transition-all border
                      ${connected.includes(alumni.id)
                        ? 'bg-fbc-green-light text-fbc-green border-fbc-green cursor-default'
                        : 'bg-fbc-green text-white border-fbc-green hover:bg-fbc-green-dark'}`}>
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
            <Search className="w-10 h-10 text-gray-300 mb-4" />
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
      {/* Connect Modal */}
      {connectModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 backdrop-blur-sm"
          onClick={() => setConnectModal(null)}>
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={e => e.stopPropagation()}>
            
            {!showSuccess ? (
              <>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 leading-none">Connect with Alumni</h3>
                    <button onClick={() => setConnectModal(null)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl mb-6">
                    <img src={`https://i.pravatar.cc/150?u=${connectModal.id}`} alt={connectModal.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{connectModal.name}</div>
                      <div className="text-xs text-gray-500">{connectModal.role} · {connectModal.year}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Introductory Message</label>
                        <span className={`text-[10px] font-bold ${connectMessage.length > 140 ? 'text-red-500' : 'text-gray-400'}`}>
                          {connectMessage.length}/150
                        </span>
                      </div>
                      <textarea
                        value={connectMessage}
                        onChange={(e) => setConnectMessage(e.target.value.slice(0, 150))}
                        className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-fbc-green/20 focus:border-fbc-green transition-all h-28 resize-none"
                        placeholder={`Hi ${connectModal.name.split(' ')[0]}, I'd love to connect and hear about your journey after FBC...`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">Share your contact info</label>
                      <div className="grid grid-cols-1 gap-2">
                        <button 
                          onClick={() => setShareWhatsApp(!shareWhatsApp)}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all text-left ${shareWhatsApp ? 'bg-fbc-green-light border-fbc-green' : 'border-gray-100 hover:border-gray-200'}`}>
                          <span className="text-sm font-medium text-gray-700">WhatsApp Number</span>
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${shareWhatsApp ? 'bg-fbc-green border-fbc-green' : 'border-gray-300'}`}>
                            {shareWhatsApp && <span className="text-white text-[10px]">✓</span>}
                          </div>
                        </button>
                        <button 
                          onClick={() => setShareEmail(!shareEmail)}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all text-left ${shareEmail ? 'bg-fbc-green-light border-fbc-green' : 'border-gray-100 hover:border-gray-200'}`}>
                          <span className="text-sm font-medium text-gray-700">Email Address</span>
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${shareEmail ? 'bg-fbc-green border-fbc-green' : 'border-gray-300'}`}>
                            {shareEmail && <span className="text-white text-[10px]">✓</span>}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setConnected(prev => [...prev, connectModal.id]);
                      setShowSuccess(true);
                      setTimeout(() => setConnectModal(null), 2500);
                    }}
                    className="w-full bg-fbc-green text-white font-bold py-3.5 rounded-xl hover:bg-fbc-green-dark transition-all shadow-lg shadow-fbc-green/20">
                    Send Connect Request
                  </button>
                </div>
              </>
            ) : (
              <div className="p-12 text-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-fbc-green-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🕊️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Your connection request has been sent to {connectModal.name}. You'll be notified once they accept!
                </p>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-fbc-green animate-[progress_2.5s_linear]"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}


    </div>
    
  );
  
}

export default Directory;