import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function News() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Announcements', 'Alumni spotlight', 'Events', 'FBC history'];

  const news = [
    {
      id: 1,
      category: 'Announcements',
      date: '15 Mar 2026',
      title: 'FBC Alumni website officially launches',
      desc: 'After months of planning, the official FBC Alumni platform is now live. Over 500 alumni have already registered in the first week.',
      author: 'FBC Alumni Association',
    },
    {
      id: 2,
      category: 'Alumni spotlight',
      date: '10 Mar 2026',
      title: 'Dr. David Tucker named top consultant in the UK',
      desc: 'FBC Class of 1999 graduate Dr. David Tucker has been recognised as one of the top medical consultants in the United Kingdom.',
      author: 'FBC Alumni Team',
    },
    {
      id: 3,
      category: 'Events',
      date: '5 Mar 2026',
      title: 'FBC 200th Anniversary Gala — save the date',
      desc: 'Mark your calendars for June 27 2027. FBC will celebrate 200 years of excellence with a historic gala at the State House Grounds in Freetown.',
      author: 'FBC Alumni Association',
    },
    {
      id: 4,
      category: 'FBC history',
      date: '1 Mar 2026',
      title: 'Fourah Bay College — 199 years of shaping Africa',
      desc: 'Founded in 1827, Fourah Bay College is the oldest Western-style university in Sub-Saharan Africa. This month we celebrate 199 years of excellence.',
      author: 'FBC Alumni Team',
    },
    {
      id: 5,
      category: 'Alumni spotlight',
      date: '25 Feb 2026',
      title: 'Aminata Koroma wins national youth award',
      desc: 'Recent FBC Economics graduate Aminata Koroma has been awarded the National Youth Excellence Award for her work with Freetown NGOs.',
      author: 'FBC Alumni Team',
    },
    {
      id: 6,
      category: 'Announcements',
      date: '20 Feb 2026',
      title: 'New scholarship fund reaches £10,000 milestone',
      desc: 'Thanks to generous donations from alumni worldwide, the FBC General Scholarship Fund has crossed the £10,000 mark — funding 6 students this year.',
      author: 'FBC Alumni Association',
    },
  ];

  const filtered = news.filter(n =>
    activeCategory === 'All' || n.category === activeCategory
  );

  const categoryColors = {
    'Announcements': 'bg-green-50 text-green-700',
    'Alumni spotlight': 'bg-purple-50 text-purple-700',
    'Events': 'bg-blue-50 text-blue-700',
    'FBC history': 'bg-amber-50 text-amber-700',
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-900">FBC Alumni</div>
        <div className="flex items-center gap-8">
          <button onClick={() => navigate('/dashboard')} className="text-sm text-gray-500 hover:text-gray-900">Dashboard</button>
          <button onClick={() => navigate('/directory')} className="text-sm text-gray-500 hover:text-gray-900">Directory</button>
          <button onClick={() => navigate('/events')} className="text-sm text-gray-500 hover:text-gray-900">Events</button>
          <button onClick={() => navigate('/donate')} className="text-sm text-gray-500 hover:text-gray-900">Give back</button>
          <button onClick={() => navigate('/news')} className="text-sm font-medium text-gray-900">News</button>
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
            AK
          </div>
        </div>
      </nav>

      <div className="px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">News & announcements</h1>
        <p className="text-sm text-gray-500 mb-6">Stay up to date with FBC alumni news, events and stories</p>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full border transition-all
                ${activeCategory === cat
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-2 gap-5">
          {filtered.map(article => (
            <div key={article.id} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                {article.desc}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">{article.author}</span>
                <button className="text-xs font-semibold text-blue-600 hover:underline">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">
            No news found in this category.
          </div>
        )}

      </div>
    </div>
  );
}

export default News;