import { useState } from 'react';
import Navbar from '../components/Navbar';

function News() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Announcements', 'Alumni spotlight', 'Events', 'FBC history'];

  const news = [
    {
      id: 1,
      category: 'Announcements',
      categoryColor: 'bg-green-500',
      date: 'March 15, 2026',
      title: 'FBC Alumni website officially launches to connect graduates worldwide',
      desc: 'After months of planning, the official FBC Alumni platform is now live. Over 500 alumni have already registered in the first week of launch.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
      author: 'FBC Alumni Team',
      authorInitials: 'FA',
      authorBg: 'bg-fbc-green',
    },
    {
      id: 2,
      category: 'Alumni spotlight',
      categoryColor: 'bg-purple-500',
      date: 'March 10, 2026',
      title: 'Dr. David Tucker named one of the top medical consultants in the UK',
      desc: 'FBC Class of 1999 graduate Dr. David Tucker has been recognised as one of the top medical consultants in the United Kingdom this year.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
      author: 'FBC Alumni Team',
      authorInitials: 'FA',
      authorBg: 'bg-fbc-green',
    },
    {
      id: 3,
      category: 'Events',
      categoryColor: 'bg-blue-500',
      date: 'March 5, 2026',
      title: 'FBC 200th Anniversary Gala — save the date for June 2027',
      desc: 'Mark your calendars for June 27 2027. FBC will celebrate 200 years of excellence with a historic gala at the State House Grounds in Freetown.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      author: 'FBC Alumni Association',
      authorInitials: 'FA',
      authorBg: 'bg-fbc-gold',
    },
    {
      id: 4,
      category: 'FBC history',
      categoryColor: 'bg-amber-500',
      date: 'March 1, 2026',
      title: 'Fourah Bay College — 199 years of shaping Africa\'s finest minds',
      desc: 'Founded in 1827, Fourah Bay College is the oldest Western-style university in Sub-Saharan Africa. This month we celebrate 199 remarkable years.',
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80',
      author: 'FBC Alumni Team',
      authorInitials: 'FA',
      authorBg: 'bg-fbc-green',
    },
    {
      id: 5,
      category: 'Alumni spotlight',
      categoryColor: 'bg-purple-500',
      date: 'February 25, 2026',
      title: 'Aminata Koroma wins the National Youth Excellence Award for 2026',
      desc: 'Recent FBC Economics graduate Aminata Koroma has been awarded the National Youth Excellence Award for her outstanding work with Freetown NGOs.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=80',
      author: 'FBC Alumni Team',
      authorInitials: 'FA',
      authorBg: 'bg-fbc-green',
    },
    {
      id: 6,
      category: 'Announcements',
      categoryColor: 'bg-green-500',
      date: 'February 20, 2026',
      title: 'New scholarship fund reaches £10,000 milestone thanks to alumni donors',
      desc: 'Thanks to generous donations from alumni worldwide, the FBC General Scholarship Fund has crossed the £10,000 mark — funding 6 students this year.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
      author: 'FBC Alumni Association',
      authorInitials: 'FA',
      authorBg: 'bg-fbc-gold',
    },
  ];

  const filtered = news.filter(n => {
    const matchesCategory = activeCategory === 'All' || n.category === activeCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.desc.toLowerCase().includes(search.toLowerCase()) ||
      n.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Header */}
      <div className="text-center py-14 px-6 border-b border-gray-100">
        <span className="text-xs font-semibold text-fbc-green uppercase tracking-widest block mb-3">
          Latest articles
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover our latest news
        </h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Stay up to date with FBC alumni achievements, events, and stories
          from our community across the world.
        </p>

        {/* Search Bar */}
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-3 text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-fbc-green"
            />
          </div>
          <button className="bg-fbc-green text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-fbc-green-dark transition-colors">
            Find Now
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-5 py-2 rounded-full border transition-all font-medium
                ${activeCategory === cat
                  ? 'bg-fbc-green text-white border-fbc-green'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-fbc-green hover:text-fbc-green'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {filtered.map(article => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all cursor-pointer group">

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <span className={`absolute top-3 left-3 ${article.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug group-hover:text-fbc-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {article.desc}
                  </p>

                  {/* Author & Date */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                    <div className={`w-7 h-7 rounded-full ${article.authorBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {article.authorInitials}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{article.author}</span>
                    <span className="text-xs text-gray-400 ml-auto">{article.date}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">📰</div>
            <div className="text-sm font-semibold text-gray-900 mb-1">No articles found</div>
            <div className="text-xs text-gray-500 mb-4">Try a different search or category</div>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="text-xs text-fbc-green hover:underline">
              Clear search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default News;