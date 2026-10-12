import { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.subject || !form.message) {
    setStatus('error');
    return;
  }

  try {
    const response = await fetch('http://localhost/fbc-alumni/backend/submit_enquiry.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(form),
    });

    const result = await response.text();

    if (result.includes('Enquiry submitted successfully!')) {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }

  } catch (error) {
    console.error(error);
    setStatus('error');
  }
};
  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-20">

      {/* Premium Hero Header */}
      <div className="bg-white border-b border-stone-200 pt-16 pb-12 mb-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-fbc-green text-[10px] font-black uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">Contact Us</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Have questions about the bicentenary, alumni membership, chapter governance, or giving back? We are here to help.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact Info Sidebar */}
        <div className="col-span-1 space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-6 border-b border-stone-100 pb-3">
              Office Details
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-fbc-green/10 text-fbc-green rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1">Address</span>
                  Alumni Secretariate, Fourah Bay College Campus,<br />
                  Mount Aureol, Freetown,<br />
                  Sierra Leone
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-fbc-green/10 text-fbc-green rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1">Phone</span>
                  +232 76 123456
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-fbc-green/10 text-fbc-green rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1">Email</span>
                  <a href="mailto:alumni@fbc.edu.sl" className="hover:underline text-fbc-green">
                    alumni@fbc.edu.sl
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-fbc-green text-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h4 className="font-serif text-base font-bold mb-2 relative z-10">Bicentennial Office</h4>
            <p className="text-xs text-white/80 leading-relaxed relative z-10 font-light">
              For direct inquiries regarding FBC200 sponsorships, anniversary events, and publication submissions, please email the Planning Committee at fbc200@fbc.edu.sl.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-span-1 md:col-span-2 bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="font-serif text-lg font-bold text-gray-900 mb-6 border-b border-stone-100 pb-3">
            Send an Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Aminata Koroma"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-fbc-green focus:bg-white transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="aminata.koroma@example.com"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-fbc-green focus:bg-white transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Inquiry about FBC200 Event Schedule"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-fbc-green focus:bg-white transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Type your message here..."
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-fbc-green focus:bg-white transition-colors resize-none"
                required
              />
            </div>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-xs rounded-lg p-4 font-medium">
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg p-4 font-medium">
                Please fill in all fields before sending your inquiry.
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-fbc-green hover:bg-fbc-green-dark text-white font-semibold py-3 px-6 rounded-lg transition-all text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Send size={15} />
              <span>Send Message</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
