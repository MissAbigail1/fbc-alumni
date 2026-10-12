import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Newspaper, ArrowUpRight, Calendar } from 'lucide-react';

function Updates() {
  const [updatesList, setUpdatesList] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load updates from the database
  useEffect(() => {
    fetch('http://localhost/fbc-alumni/backend/get_updates.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch updates.');
        }

        return response.json();
      })
      .then(data => {
        setUpdatesList(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to load updates:', error);
        setError('Unable to load updates.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-20">

      {/* Hero Header */}
      <div className="bg-white border-b border-stone-200 pt-16 pb-12 mb-10">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 text-fbc-green text-[10px] font-black uppercase tracking-widest mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            FBC NEWSROOM
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Updates & Announcements
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Stay informed with the latest news, announcements, stories, and activities from Fourah Bay College and our global alumni network.
          </p>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* Loading State */}

        {loading && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-sm">
              Loading updates...
            </p>
          </div>
        )}

        {/* Error State */}

        {!loading && error && (
          <div className="text-center py-20 bg-white border border-stone-200">

            <Newspaper className="w-12 h-12 text-stone-300 mx-auto mb-4" />

            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Unable to load updates
            </h3>

            <p className="text-gray-500 text-sm">
              Please try again later.
            </p>

          </div>
        )}

        {/* Updates */}

        {!loading && !error && updatesList.length > 0 && (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {updatesList.map(post => (

              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col"
              >

                {/* Image */}

                {post.image && (
                  <div className="h-[220px] w-full flex items-center justify-center overflow-hidden bg-stone-100">

                    <img
                      src={`/uploads/updates/${post.image}`}
                      alt={post.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />

                  </div>
                )}

                {/* Content */}

                <div className="p-6 flex-grow flex flex-col justify-between">

                  <div>

                    {/* Date */}

                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">

                      <Calendar className="w-3.5 h-3.5 text-fbc-green" />

                      {post.created_at
                        ? new Date(post.created_at).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })
                        : ''
                      }

                    </div>

                    {/* Title */}

                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-fbc-green transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Content */}

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                      {post.content}
                    </p>

                  </div>

                  {/* Read More */}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/updates/${post.id}`);
                    }}
                    className="text-sm font-semibold text-fbc-green flex items-center gap-1 group-hover:underline w-fit"
                  >
                    Read full article
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* Empty State */}

        {!loading && !error && updatesList.length === 0 && (

          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">

            <Newspaper className="w-12 h-12 text-stone-300 mx-auto mb-4" />

            <h3 className="text-lg font-bold text-gray-900 mb-1">
              No updates found
            </h3>

            <p className="text-gray-500 text-sm">
              There are no updates at the moment.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Updates;