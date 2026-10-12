import AdminNavbar from '../components/AdminNavbar';
import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editSubject, setEditSubject] = useState('');
  const [editMessage, setEditMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost/fbc-alumni/backend/get_enquiries.php')
      .then(r => r.json())
      .then(data => {
        setEnquiries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching enquiries:', err);
        setError('Unable to load enquiries.');
        setLoading(false);
      });
  }, []);

  const deleteEnquiry = async (id) => {
    try {
      const response = await fetch(
        'http://localhost/fbc-alumni/backend/delete_enquiry.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ id }),
        }
      );
      const result = await response.text();
      if (result.includes('Enquiry deleted successfully!')) {
        setEnquiries(enquiries.filter(e => e.id !== id));
      } else {
        console.error('Delete failed:', result);
      }
    } catch (err) {
      console.error('Error deleting enquiry:', err);
    }
  };

  const updateEnquiry = async (id) => {
    try {
      const response = await fetch(
        'http://localhost/fbc-alumni/backend/update_enquiry.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            id,
            name: editName,
            email: editEmail,
            subject: editSubject,
            message: editMessage,
          }),
        }
      );
      const result = await response.text();
      if (result.includes('Enquiry updated successfully!')) {
        setEnquiries(
          enquiries.map(e =>
            e.id === id
              ? { ...e, full_name: editName, email: editEmail, subject: editSubject, message: editMessage }
              : e
          )
        );
        cancelEditing();
      }
    } catch (err) {
      console.error('Error updating enquiry:', err);
    }
  };

  const startEditing = (enquiry) => {
    setEditingId(enquiry.id);
    setEditName(enquiry.full_name);
    setEditEmail(enquiry.email);
    setEditSubject(enquiry.subject);
    setEditMessage(enquiry.message);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName('');
    setEditEmail('');
    setEditSubject('');
    setEditMessage('');
  };

  return (
    <div className="admin-shell min-h-screen">
      <AdminNavbar />

      <main className="admin-workspace">

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Enquiries</h1>
          <p className="mt-1 text-sm text-gray-500">
            Messages submitted through the public contact form.
          </p>
        </div>

        {loading && (
          <p className="text-sm text-gray-500">Loading enquiries...</p>
        )}

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <div className="admin-table-wrap bg-white border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Message</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-4 py-10 text-center text-sm text-gray-400">
                      No enquiries submitted yet.
                    </td>
                  </tr>
                ) : (
                  enquiries.map(enquiry => (
                    <tr
                      key={enquiry.id}
                      className={editingId === enquiry.id ? 'bg-yellow-50' : 'hover:bg-gray-50'}
                    >
                      {/* ID */}
                      <td className="px-4 py-3 text-xs text-gray-400 align-top">
                        {enquiry.id}
                      </td>

                      {/* Name */}
                      <td className="px-4 py-3 align-top">
                        {editingId === enquiry.id ? (
                          <input
                            type="text"
                            value={editName}
                            onChange={e => setEditName(e.target.value)}
                            className="w-full min-w-[130px] border border-gray-300 px-2 py-1 text-xs focus:border-green-700 focus:outline-none"
                          />
                        ) : (
                          <span className="text-xs font-medium text-gray-900">{enquiry.full_name}</span>
                        )}
                      </td>

                      {/* Email */}
                      <td className="px-4 py-3 align-top">
                        {editingId === enquiry.id ? (
                          <input
                            type="email"
                            value={editEmail}
                            onChange={e => setEditEmail(e.target.value)}
                            className="w-full min-w-[160px] border border-gray-300 px-2 py-1 text-xs focus:border-green-700 focus:outline-none"
                          />
                        ) : (
                          <a
                            href={`mailto:${enquiry.email}`}
                            className="text-xs text-gray-600 hover:text-green-700 transition-colors"
                          >
                            {enquiry.email}
                          </a>
                        )}
                      </td>

                      {/* Subject */}
                      <td className="px-4 py-3 align-top">
                        {editingId === enquiry.id ? (
                          <input
                            type="text"
                            value={editSubject}
                            onChange={e => setEditSubject(e.target.value)}
                            className="w-full min-w-[140px] border border-gray-300 px-2 py-1 text-xs focus:border-green-700 focus:outline-none"
                          />
                        ) : (
                          <span className="text-xs text-gray-700">{enquiry.subject || '—'}</span>
                        )}
                      </td>

                      {/* Message */}
                      <td className="px-4 py-3 align-top max-w-xs">
                        {editingId === enquiry.id ? (
                          <textarea
                            value={editMessage}
                            onChange={e => setEditMessage(e.target.value)}
                            rows={3}
                            className="w-full min-w-[200px] border border-gray-300 px-2 py-1 text-xs focus:border-green-700 focus:outline-none"
                          />
                        ) : (
                          <p className="text-xs text-gray-500 whitespace-pre-line">{enquiry.message}</p>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3 align-top text-right whitespace-nowrap">
                        {editingId === enquiry.id ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => updateEnquiry(enquiry.id)}
                              className="bg-green-700 text-white px-3 py-1 text-xs font-medium hover:bg-green-800 transition-colors"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="border border-gray-300 px-3 py-1 text-xs text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => startEditing(enquiry)}
                              className="text-xs text-gray-600 hover:text-green-700 transition-colors underline"
                            >
                              <Pencil aria-hidden="true" size={14} strokeWidth={1.8} />
                              Edit
                            </button>
                            <button
                              onClick={() => deleteEnquiry(enquiry.id)}
                              className="text-xs text-gray-400 hover:text-red-600 transition-colors underline"
                            >
                              <Trash2 aria-hidden="true" size={14} strokeWidth={1.8} />
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

      </main>
    </div>
  );
}

export default AdminEnquiries;