import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Inbox, Newspaper } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';

function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch('http://localhost/fbc-alumni/backend/get_enquiries.php')
      .then(r => r.json())
      .then(data => setEnquiries(Array.isArray(data) ? data : []))
      .catch(err => console.error('Error fetching enquiries:', err));

    fetch('http://localhost/fbc-alumni/backend/get_updates.php')
      .then(r => r.json())
      .then(data => setUpdates(Array.isArray(data) ? data : []))
      .catch(err => console.error('Error fetching updates:', err));
  }, []);

  return (
    <div className="admin-shell min-h-screen">
      <AdminNavbar />

      <main className="admin-workspace">

        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Overview of enquiries and published content.
          </p>
        </div>

        {/* Summary row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="admin-stat bg-white border border-gray-200 px-5 py-4">
            <p className="admin-stat-label text-xs text-gray-500 uppercase tracking-wide">
              <Inbox aria-hidden="true" size={16} strokeWidth={1.8} />
              Enquiries
            </p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{enquiries.length}</p>
            <Link to="/admin/enquiries" className="mt-2 inline-block text-xs text-green-700 hover:underline">
              View all →
            </Link>
          </div>
          <div className="admin-stat bg-white border border-gray-200 px-5 py-4">
            <p className="admin-stat-label text-xs text-gray-500 uppercase tracking-wide">
              <Newspaper aria-hidden="true" size={16} strokeWidth={1.8} />
              Updates
            </p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{updates.length}</p>
            <Link to="/admin/updates" className="mt-2 inline-block text-xs text-green-700 hover:underline">
              Manage →
            </Link>
          </div>
          <div className="admin-stat bg-white border border-gray-200 px-5 py-4">
            <p className="admin-stat-label text-xs text-gray-500 uppercase tracking-wide">
              <CalendarDays aria-hidden="true" size={16} strokeWidth={1.8} />
              Events
            </p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">—</p>
            <Link to="/admin/events" className="mt-2 inline-block text-xs text-green-700 hover:underline">
              Manage →
            </Link>
          </div>
        </div>

        {/* Recent enquiries */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-800">Recent Enquiries</h2>
            <Link to="/admin/enquiries" className="text-xs text-green-700 hover:underline">
              View all
            </Link>
          </div>
          <div className="admin-table-wrap bg-white border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-4 py-8 text-center text-xs text-gray-400">
                      No enquiries yet.
                    </td>
                  </tr>
                ) : (
                  enquiries.slice(0, 5).map(enquiry => (
                    <tr key={enquiry.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-xs font-medium text-gray-900">
                        {enquiry.full_name}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-700">
                        {enquiry.subject || '—'}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 max-w-xs truncate">
                        {enquiry.message}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent updates */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-800">Recent Updates</h2>
            <Link to="/admin/updates" className="text-xs text-green-700 hover:underline">
              View all
            </Link>
          </div>
          <div className="admin-table-wrap bg-white border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Excerpt</th>
                  <th className="px-4 py-3 whitespace-nowrap">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {updates.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-4 py-8 text-center text-xs text-gray-400">
                      No updates published yet.
                    </td>
                  </tr>
                ) : (
                  updates.slice(0, 5).map(update => (
                    <tr key={update.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-xs font-medium text-gray-900">
                        {update.title}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 max-w-xs truncate">
                        {update.content}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">
                        {update.created_at || '—'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}

export default AdminDashboard;