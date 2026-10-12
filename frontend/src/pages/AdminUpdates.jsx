import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';

function AdminUpdates() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const [updates, setUpdates] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editImage, setEditImage] = useState(null);

  // Load updates
  useEffect(() => {
    fetch('http://localhost/fbc-alumni/backend/get_updates.php')
      .then(r => r.json())
      .then(data => setUpdates(Array.isArray(data) ? data : []))
      .catch(err => console.error('Failed to load updates:', err));
  }, []);

  // Create update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!title || !content || !image) {
      setMessage('Please enter a title, content, and select an image.');
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    try {
      const response = await fetch(
        'http://localhost/fbc-alumni/backend/create_update.php',
        { method: 'POST', credentials: 'include', body: formData }
      );
      const result = await response.text();
      if (result.includes('Update created successfully!')) {
        setMessage('Update published successfully.');
        setTitle('');
        setContent('');
        setImage(null);
        const r2 = await fetch('http://localhost/fbc-alumni/backend/get_updates.php');
        const d2 = await r2.json();
        setUpdates(Array.isArray(d2) ? d2 : []);
      } else {
        setMessage(result);
      }
    } catch (err) {
      console.error('Error creating update:', err);
      setMessage('Unable to publish update.');
    }
  };

  // Save edits
  const updateUpdate = async (id) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', editTitle);
    formData.append('content', editContent);
    if (editImage) formData.append('image', editImage);
    try {
      const response = await fetch(
        'http://localhost/fbc-alumni/backend/update_update.php',
        { method: 'POST', credentials: 'include', body: formData }
      );
      const result = await response.text();
      if (result.includes('Update updated successfully!')) {
        cancelEditing();
        setMessage('Update saved successfully.');
        const r2 = await fetch('http://localhost/fbc-alumni/backend/get_updates.php');
        const d2 = await r2.json();
        setUpdates(Array.isArray(d2) ? d2 : []);
      } else {
        setMessage(result);
      }
    } catch (err) {
      console.error('Error updating update:', err);
      setMessage('Unable to save update.');
    }
  };

  // Delete update
  const deleteUpdate = async (id) => {
    try {
      const response = await fetch(
        'http://localhost/fbc-alumni/backend/delete_update.php',
        {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ id }),
        }
      );
      const result = await response.text();
      if (result.includes('Update deleted successfully!')) {
        setUpdates(updates.filter(u => String(u.id) !== String(id)));
        setMessage('Update deleted.');
      } else {
        setMessage(result);
      }
    } catch (err) {
      console.error('Error deleting update:', err);
      setMessage('Unable to delete update.');
    }
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
    setEditImage(null);
  };

  const isSuccess = message && (message.includes('successfully') || message.includes('published') || message.includes('deleted'));

  return (
    <div className="admin-shell min-h-screen">
      <AdminNavbar />

      <main className="admin-workspace">

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Manage Updates</h1>
          <p className="mt-1 text-sm text-gray-500">
            Publish, edit, or remove alumni announcements and news.
          </p>
        </div>

        {/* Status message */}
        {message && (
          <p className={`mb-5 text-sm ${isSuccess ? 'text-green-700' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        {/* Create / edit form */}
        <section className="admin-panel bg-white border border-gray-200 p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-800 mb-4">
            {editingId !== null ? `Editing update #${editingId}` : 'Publish a new update'}
          </h2>

          <form onSubmit={editingId !== null ? (e) => { e.preventDefault(); updateUpdate(editingId); } : handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                required
                value={editingId !== null ? editTitle : title}
                onChange={e => editingId !== null ? setEditTitle(e.target.value) : setTitle(e.target.value)}
                placeholder="Update title"
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
              <textarea
                rows={6}
                required={editingId === null}
                value={editingId !== null ? editContent : content}
                onChange={e => editingId !== null ? setEditContent(e.target.value) : setContent(e.target.value)}
                placeholder="Write the full announcement text..."
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {editingId !== null ? 'Replace image (optional)' : 'Featured image *'}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  const file = e.target.files[0];
                  if (editingId !== null) setEditImage(file);
                  else setImage(file);
                }}
                className="block w-full text-sm text-gray-600 file:border file:border-gray-300 file:bg-white file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-gray-700 hover:file:bg-gray-50 cursor-pointer"
              />
              {editingId !== null && (
                <p className="mt-1 text-xs text-gray-400">Leave empty to keep the existing image.</p>
              )}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                className="bg-green-700 text-white px-5 py-2 text-sm font-medium hover:bg-green-800 transition-colors"
              >
                {editingId !== null ? 'Save Changes' : 'Publish Update'}
              </button>
              {editingId !== null && (
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>

          </form>
        </section>

        {/* Existing updates list */}
        <section>
          <h2 className="text-sm font-semibold text-gray-800 mb-3">
            Existing updates ({updates.length})
          </h2>

          {updates.length === 0 ? (
            <p className="text-sm text-gray-400">No updates published yet.</p>
          ) : (
            <div className="space-y-3">
              {updates.map(update => (
                <div
                  key={update.id}
                  className="admin-record bg-white border border-gray-200 px-5 py-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{update.title}</p>
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2 whitespace-pre-line">
                        {update.content}
                      </p>
                      {update.created_at && (
                        <p className="mt-1 text-xs text-gray-400">{update.created_at}</p>
                      )}
                      {update.image && (
                        <div className="mt-2">
                          <img
                            src={`/uploads/updates/${update.image}`}
                            alt={update.title}
                            className="h-24 object-cover border border-gray-100"
                            onError={e => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => {
                          setEditingId(update.id);
                          setEditTitle(update.title);
                          setEditContent(update.content);
                          setEditImage(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs text-gray-500 hover:text-green-700 transition-colors underline"
                      >
                        <Pencil aria-hidden="true" size={14} strokeWidth={1.8} />
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUpdate(update.id)}
                        className="text-xs text-gray-400 hover:text-red-600 transition-colors underline"
                      >
                        <Trash2 aria-hidden="true" size={14} strokeWidth={1.8} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </main>
    </div>
  );
}

export default AdminUpdates;