import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

function UpdateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [update, setUpdate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/fbc-alumni/backend/get_updates.php')
      .then(response => response.json())
      .then(data => {
        const selectedUpdate = data.find(
          item => String(item.id) === String(id)
        );

        setUpdate(selectedUpdate);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to load update:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-sm text-gray-500">
          Loading update...
        </p>
      </div>
    );
  }

  if (!update) {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-800">
            FBC Alumni Association
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-gray-900">
            Update not found
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            The update you are looking for may have been removed or is no longer available.
          </p>

          <button
            type="button"
            onClick={() => navigate('/updates')}
            className="mt-8 inline-flex items-center gap-2 bg-green-900 px-5 py-3 text-sm font-medium text-white hover:bg-green-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Updates
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-20">

      {/* Article Header */}

      <header className="border-b border-stone-200 bg-white">

        <div className="max-w-5xl mx-auto px-6 py-10">

          <button
            type="button"
            onClick={() => navigate('/updates')}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Updates
          </button>

          <div className="mt-10 max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-800">
              FBC Alumni Association
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-900">
              {update.title}
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

              <Calendar className="w-4 h-4 text-green-800" />

              <span>
                {new Date(update.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>

            </div>

          </div>

        </div>

      </header>

      {/* Article */}

      <main className="max-w-5xl mx-auto px-6 pt-10">

        {/* Featured Image */}

        {update.image && (
          <div className="w-full bg-stone-200 overflow-hidden">
            <img
              src={`/uploads/updates/${update.image}`}
              alt={update.title}
              className="w-full max-h-[520px] object-cover"
            />
          </div>
        )}

        {/* Article Content */}

        <article className="max-w-3xl mx-auto py-12">

          <div className="text-gray-700 text-base md:text-lg leading-8 whitespace-pre-line">
            {update.content}
          </div>

        </article>

        {/* Bottom Navigation */}

        <div className="max-w-3xl mx-auto border-t border-stone-200 pt-8">

          <button
            type="button"
            onClick={() => navigate('/updates')}
            className="inline-flex items-center gap-2 border border-stone-300 px-5 py-3 text-sm font-medium text-gray-700 hover:border-green-800 hover:text-green-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Updates
          </button>

        </div>

      </main>

    </div>
  );
}

export default UpdateDetails;