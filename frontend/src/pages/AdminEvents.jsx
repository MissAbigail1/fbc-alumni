
import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';

const API_URL = 'http://localhost/fbc-alumni/backend';
const BACKEND_URL = 'http://localhost/fbc-alumni';

const emptyForm = {
  title: '',
  description: '',
  event_date: '',
  event_time: 'TBC',
  location: 'Freetown',
};

function getImageUrl(image) {
  if (!image) return '/images/fbc-building.jpg';
  if (image.startsWith('http')) return image;
  if (image.startsWith('/uploads/') || image === '/images/fbc-building.jpg') return image;
  return `${BACKEND_URL}/${image.replace(/^\/+/, '')}`;
}

function handleImageError(event) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = '/images/fbc-building.jpg';
}

function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const fetchEvents = async () => {
    try {
      setError('');
      const response = await fetch(`${API_URL}/get_events.php`);
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || 'Unable to load events.');
      setEvents(data.events || []);
    } catch (err) {
      console.error('Error loading events:', err);
      setError(err.message || 'Unable to load events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  useEffect(() => {
    return () => {
      if (previewUrl.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setError('');
    setMessage('');
    if (!file) return;
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type)) {
      setError('Choose a JPG, PNG, or WebP image.');
      e.target.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be 5 MB or smaller.');
      e.target.value = '';
      return;
    }
    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setFormData({ ...emptyForm });
    setSelectedImage(null);
    setCurrentImage('');
    setPreviewUrl('');
    setEditingId(null);
    setError('');
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setMessage('');
    try {
      const isEditing = editingId !== null;
      const endpoint = isEditing ? 'update_event.php' : 'create_event.php';
      const payload = new FormData();
      payload.append('title', formData.title);
      payload.append('description', formData.description);
      payload.append('event_date', formData.event_date);
      payload.append('event_time', formData.event_time);
      payload.append('location', formData.location);
      if (isEditing) {
        payload.append('id', String(editingId));
        payload.append('existing_image', currentImage);
      } else {
        payload.append('existing_image', '/images/fbc-building.jpg');
      }
      if (selectedImage) payload.append('image', selectedImage);
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        body: payload,
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || (isEditing ? 'Unable to update event.' : 'Unable to create event.'));
      }
      setMessage(isEditing ? 'Event updated successfully.' : 'Event added successfully.');
      setFormData({ ...emptyForm });
      setSelectedImage(null);
      setCurrentImage('');
      setPreviewUrl('');
      setEditingId(null);
      const fileInput = document.getElementById('event-image');
      if (fileInput) fileInput.value = '';
      await fetchEvents();
    } catch (err) {
      console.error('Error saving event:', err);
      setError(err.message || 'Unable to save event.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setFormData({
      title: event.title || '',
      description: event.description || '',
      event_date: event.event_date || '',
      event_time: event.event_time || 'TBC',
      location: event.location || '',
    });
    setSelectedImage(null);
    setCurrentImage(event.image || '/images/fbc-building.jpg');
    setPreviewUrl('');
    setError('');
    setMessage('');
    const fileInput = document.getElementById('event-image');
    if (fileInput) fileInput.value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (event) => {
    const confirmed = window.confirm(
      `Are you sure you want to permanently delete "${event.title}"? This cannot be undone.`
    );
    if (!confirmed) return;
    setDeletingId(event.id);
    setError('');
    setMessage('');
    try {
      const response = await fetch(`${API_URL}/delete_event.php`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: event.id }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || 'Unable to delete event.');
      if (editingId === event.id) resetForm();
      setMessage('Event deleted successfully.');
      await fetchEvents();
    } catch (err) {
      console.error('Error deleting event:', err);
      setError(err.message || 'Unable to delete event.');
    } finally {
      setDeletingId(null);
    }
  };

  const imageToPreview = previewUrl || (editingId !== null ? getImageUrl(currentImage) : '');
  const isSuccess = message && (message.includes('successfully') || message.includes('added') || message.includes('updated'));

  return (
    <div className="admin-shell min-h-screen">
      <AdminNavbar />

      <main className="admin-workspace">

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Manage Events</h1>
          <p className="mt-1 text-sm text-gray-500">
            Schedule, edit, or remove alumni events.
          </p>
        </div>

        {/* Status messages */}
        {message && (
          <p className={`mb-5 text-sm ${isSuccess ? 'text-green-700' : 'text-red-600'}`}>{message}</p>
        )}
        {error && (
          <p className="mb-5 text-sm text-red-600">{error}</p>
        )}

        {/* Add / edit form */}
        <section className="admin-panel bg-white border border-gray-200 p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-800 mb-4">
            {editingId !== null ? `Editing event #${editingId}` : 'Schedule a new event'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. 200th Bicentennial Gala Dinner"
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Details about the event..."
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="event_date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  id="event_date"
                  name="event_date"
                  type="text"
                  required
                  value={formData.event_date}
                  onChange={handleChange}
                  placeholder="e.g. 31 December 2026"
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
                />
              </div>
              <div>
                <label htmlFor="event_time" className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  id="event_time"
                  name="event_time"
                  type="text"
                  value={formData.event_time}
                  onChange={handleChange}
                  placeholder="e.g. 2:00 PM or TBC"
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Great Hall, Mount Aureol, Freetown"
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
              />
            </div>

            <div>
              <label htmlFor="event-image" className="block text-sm font-medium text-gray-700 mb-1">
                Event image{editingId !== null ? ' (optional — leave empty to keep existing)' : ''}
              </label>
              <input
                id="event-image"
                name="image"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-600 file:border file:border-gray-300 file:bg-white file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-gray-700 hover:file:bg-gray-50 cursor-pointer"
              />
              <p className="mt-1 text-xs text-gray-400">JPG, PNG or WebP · max 5 MB</p>

              {imageToPreview && (
                <div className="mt-3">
                  <p className="text-xs text-gray-500 mb-1">
                    {selectedImage ? 'Selected image preview:' : 'Current image:'}
                  </p>
                  <div className="admin-event-image admin-event-preview">
                    <img
                      src={imageToPreview}
                      alt="Preview"
                      className="h-full w-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                disabled={saving}
                className="bg-green-700 text-white px-5 py-2 text-sm font-medium hover:bg-green-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : editingId !== null ? 'Save Changes' : 'Schedule Event'}
              </button>
              {editingId !== null && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>

          </form>
        </section>

        {/* Events list */}
        <section>
          <h2 className="text-sm font-semibold text-gray-800 mb-3">
            Scheduled events ({events.length})
          </h2>

          {loading ? (
            <p className="text-sm text-gray-500">Loading events...</p>
          ) : events.length === 0 ? (
            <p className="text-sm text-gray-400">No events scheduled yet.</p>
          ) : (
            <div className="space-y-3">
              {events.map(event => (
                <div
                  key={event.id}
                  className={`admin-record bg-white border px-5 py-4 ${
                    editingId === event.id ? 'border-green-700' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{event.title}</p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {event.event_date}{event.event_time && event.event_time !== 'TBC' ? ` · ${event.event_time}` : ''} · {event.location}
                      </p>
                      {event.description && (
                        <p className="mt-1 text-xs text-gray-400 line-clamp-2">{event.description}</p>
                      )}
                      <div className="admin-event-image admin-event-thumbnail mt-3">
                        <img
                          src={getImageUrl(event.image)}
                          alt={event.title}
                          className="h-full w-full object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => handleEdit(event)}
                        className="text-xs text-gray-500 hover:text-green-700 transition-colors underline"
                      >
                        <Pencil aria-hidden="true" size={14} strokeWidth={1.8} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event)}
                        disabled={deletingId === event.id}
                        className="text-xs text-gray-400 hover:text-red-600 transition-colors underline disabled:opacity-50"
                      >
                        <Trash2 aria-hidden="true" size={14} strokeWidth={1.8} />
                        {deletingId === event.id ? 'Deleting...' : 'Delete'}
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

export default AdminEvents;