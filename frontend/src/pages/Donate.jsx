import { useState } from 'react';
import Navbar from '../components/Navbar';

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('GBP');
  const [donationType, setDonationType] = useState('Online');
  const [selectedFund, setSelectedFund] = useState(0);
  const [donated, setDonated] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const amounts = [10, 25, 50, 100, 250];

  const currencies = ['GBP', 'USD', 'EUR', 'SLL'];

  const currencySymbol = {
    GBP: '£', USD: '$', EUR: '€', SLL: 'Le'
  };

  const funds = [
    {
      name: 'General Scholarship Fund',
      desc: 'Supporting deserving FBC students with tuition and living expenses.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
      raised: 14200,
      goal: 20000,
      organiser: 'FBC Alumni Association',
      location: 'Freetown, Sierra Leone',
    },
    {
      name: 'Women in STEM Bursary',
      desc: 'Empowering female science and engineering students at FBC.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      raised: 6400,
      goal: 10000,
      organiser: 'FBC Alumni Association',
      location: 'Freetown, Sierra Leone',
    },
    {
      name: 'Library & Infrastructure',
      desc: 'Upgrading FBC learning facilities and library resources.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
      raised: 4200,
      goal: 15000,
      organiser: 'FBC Alumni Association',
      location: 'Freetown, Sierra Leone',
    },
  ];

  const displayAmount = customAmount || selectedAmount;
  const fund = funds[selectedFund];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Give back to FBC</h1>
          <p className="text-gray-500 text-sm">
            Your donation funds the next generation of Fourah Bay graduates
          </p>
        </div>

        {/* Impact Stats Banner */}
        <div className="bg-fbc-green rounded-2xl px-8 py-5 flex items-center justify-between mb-8">
          {[
            { val: '£24,800', label: 'Raised this year' },
            { val: '18', label: 'Students funded' },
            { val: '312', label: 'Donors worldwide' },
            { val: '3', label: 'Active funds' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.val}</div>
              <div className="text-xs text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {donated ? (
          /* Success State */
          <div className="bg-white rounded-2xl shadow-card p-16 text-center">
            <div className="w-20 h-20 bg-fbc-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Thank you for your donation!
            </h2>
            <p className="text-gray-500 text-sm mb-2">
              Your {currencySymbol[currency]}{displayAmount} donation to the
            </p>
            <p className="text-fbc-green font-semibold mb-6">{fund.name}</p>
            <p className="text-gray-400 text-xs mb-8">
              A confirmation email has been sent to {form.email || 'your email address'}
            </p>
            <button
              onClick={() => {
                setDonated(false);
                setCustomAmount('');
                setSelectedAmount(50);
                setForm({ firstName: '', lastName: '', email: '' });
              }}
              className="border border-gray-200 text-gray-600 text-sm px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Make another donation
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">

            {/* Left — Donation Form (2 cols) */}
            <div className="col-span-2 flex flex-col gap-5">

              {/* Fund Selector */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Select a fund</h3>
                <div className="flex flex-col gap-3">
                  {funds.map((f, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedFund(i)}
                      className={`flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition-all
                        ${selectedFund === i
                          ? 'border-fbc-green bg-fbc-green-light'
                          : 'border-gray-100 hover:border-gray-200'}`}>
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center
                        ${selectedFund === i ? 'border-fbc-green' : 'border-gray-300'}`}>
                        {selectedFund === i && (
                          <div className="w-2.5 h-2.5 rounded-full bg-fbc-green"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">{f.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{f.desc}</div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-fbc-green font-medium">
                              £{f.raised.toLocaleString()} raised
                            </span>
                            <span className="text-xs text-gray-400">
                              of £{f.goal.toLocaleString()}
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full">
                            <div
                              className="h-1.5 bg-fbc-green rounded-full"
                              style={{ width: `${Math.round((f.raised / f.goal) * 100)}%` }}>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amount Selector */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Select amount</h3>

                {/* Currency */}
                <div className="flex gap-2 mb-4">
                  {currencies.map(c => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`text-xs px-4 py-2 rounded-full border transition-all font-medium
                        ${currency === c
                          ? 'bg-fbc-green text-white border-fbc-green'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-fbc-green hover:text-fbc-green'}`}>
                      {c}
                    </button>
                  ))}
                </div>

                {/* Amount Buttons */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {amounts.map(amt => (
                    <button
                      key={amt}
                      onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                      className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all
                        ${selectedAmount === amt && !customAmount
                          ? 'bg-fbc-green text-white border-fbc-green'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-fbc-green hover:text-fbc-green'}`}>
                      {currencySymbol[currency]}{amt}
                    </button>
                  ))}
                  <input
                    type="number"
                    value={customAmount}
                    onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    placeholder="Custom amount"
                    className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-fbc-green w-36"
                  />
                </div>

                {/* Donation Type */}
                <div className="flex gap-3 mb-2">
                  {['Online', 'Offline'].map(type => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type)}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all
                        ${donationType === type
                          ? 'bg-fbc-green text-white border-fbc-green'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-fbc-green'}`}>
                      {type} donation
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Personal info</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-medium text-gray-700 block mb-1.5">First name</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      placeholder="Aminata"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-fbc-green"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-700 block mb-1.5">Last name</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      placeholder="Koroma"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-fbc-green"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1.5">Email address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-fbc-green"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={() => setDonated(true)}
                className="w-full bg-fbc-green text-white font-bold py-4 rounded-2xl hover:bg-fbc-green-dark transition-all text-base shadow-card">
                Donate {currencySymbol[currency]}{displayAmount} now →
              </button>
              <p className="text-xs text-gray-400 text-center -mt-3">
                Secured by Stripe · All currencies accepted · No hidden fees
              </p>

            </div>

            {/* Right — Fund Info (1 col) */}
            <div className="col-span-1 flex flex-col gap-5">

              {/* Fund Card */}
              <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                <img
                  src={fund.image}
                  alt={fund.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{fund.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{fund.desc}</p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs font-semibold text-fbc-green">
                        £{fund.raised.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-400">
                        of £{fund.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-2 bg-fbc-green rounded-full"
                        style={{ width: `${Math.round((fund.raised / fund.goal) * 100)}%` }}>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1.5">
                      {Math.round((fund.raised / fund.goal) * 100)}% of goal reached
                    </div>
                  </div>

                  {/* Organiser */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Organiser
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-fbc-green flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        FBC
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">{fund.organiser}</div>
                        <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                          <span>📍</span>
                          <span>{fund.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Donor Wall */}
              <div className="bg-white rounded-2xl shadow-card p-5">
                <div className="text-xs font-bold text-gray-900 mb-3">Recent donors</div>
                <div className="flex items-center gap-1 mb-2">
                  {[
                    { initials: 'MB', bg: 'bg-green-400' },
                    { initials: 'AK', bg: 'bg-purple-400' },
                    { initials: 'PC', bg: 'bg-amber-400' },
                    { initials: 'DT', bg: 'bg-blue-400' },
                  ].map((donor, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${donor.bg} flex items-center justify-center text-white text-xs font-bold -ml-2 first:ml-0 border-2 border-white`}>
                      {donor.initials}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold -ml-2 border-2 border-white">
                    +308
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-900">312 alumni</span> have donated this year
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donate;