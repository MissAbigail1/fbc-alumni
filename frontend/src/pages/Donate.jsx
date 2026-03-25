import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Check, Heart, Users, Globe, Wallet, CreditCard, Smartphone } from 'lucide-react';

function Donate() {
  const [selectedFund, setSelectedFund] = useState(0);
  const [currency, setCurrency] = useState('GBP');
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donated, setDonated] = useState(false);

  const amounts = [10, 25, 50, 100, 250];
  const currencies = ['GBP', 'USD', 'EUR', 'SLL'];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'paypal', name: 'PayPal', icon: <span className="font-bold text-blue-800 italic text-lg leading-none">P</span> },
    { id: 'orange', name: 'Orange Money', icon: <Smartphone className="w-5 h-5 text-orange-500" /> },
    { id: 'afrimoney', name: 'Afrimoney', icon: <Smartphone className="w-5 h-5 text-blue-500" /> },
  ];

  const currencySymbol = {
    GBP: '£', USD: '$', EUR: '€', SLL: 'Le'
  };

  const funds = [
    {
      name: 'General Scholarship Fund',
      desc: 'Supporting deserving FBC students with tuition and living expenses.',
      image: '/general-scholarship.png',
    },
    {
      name: 'Women in STEM Bursary',
      desc: 'Empowering female science and engineering students at FBC.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      name: 'Library & Infrastructure',
      desc: 'Upgrading FBC learning facilities and library resources.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
    },
  ];

  const displayAmount = customAmount || selectedAmount;
  const fund = funds[selectedFund];

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <Navbar />

      {/* Simple Header */}
      <div className="text-center pt-14 pb-10 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Support FBC</h1>
        <p className="text-gray-500 max-w-lg mx-auto text-base">
          Choose a fund, pick an amount, and make a difference. It's that simple. 
          Your donation empowers the next generation of Fourah Bay graduates.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
            <Heart className="w-6 h-6 text-fbc-green mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">$2.4M</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Raised this year</div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
            <Users className="w-6 h-6 text-fbc-green mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">850+</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Students funded</div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
            <Globe className="w-6 h-6 text-fbc-green mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Countries</div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
            <Wallet className="w-6 h-6 text-fbc-green mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">4</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Active funds</div>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6">
        {donated ? (
          <div className="bg-white rounded-3xl shadow-card p-14 text-center border border-gray-100">
            <div className="w-24 h-24 bg-fbc-green-light rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-12 h-12 text-fbc-green" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
            <p className="text-gray-500 mb-2">
              Your <span className="font-semibold text-gray-900">{currencySymbol[currency]}{displayAmount}</span> donation to the <span className="font-semibold text-fbc-green">{fund.name}</span> was successful.
            </p>
            <p className="text-gray-400 text-sm mb-10">
              A receipt has been sent to {form.email || 'your email'}.
            </p>
            <button
              onClick={() => {
                setDonated(false);
                setCustomAmount('');
                setSelectedAmount(50);
                setForm({ firstName: '', lastName: '', email: '' });
              }}
              className="px-8 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors w-full">
              Make another donation
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-card-hover overflow-hidden border border-gray-100">
            
            {/* Fund Banner Image */}
            <div className="h-44 relative">
              <img src={fund.image} alt={fund.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h2 className="text-white text-2xl font-bold mb-1">{fund.name}</h2>
                  <p className="text-white/80 text-sm">{fund.desc}</p>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              {/* 1. Select Fund */}
              <div className="mb-8">
                <label className="text-sm font-bold text-gray-900 block mb-3 uppercase tracking-wider text-gray-500">1. Select your cause</label>
                <div className="flex flex-col gap-2">
                  {funds.map((f, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedFund(i)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between
                        ${selectedFund === i
                          ? 'border-fbc-green bg-fbc-green-light ring-1 ring-fbc-green'
                          : 'border-gray-200 hover:border-gray-300'}`}>
                      <div className="flex items-center gap-4">
                        <img src={f.image} alt={f.name} className="w-12 h-12 rounded-lg object-cover shadow-sm" />
                        <span className={`text-sm font-semibold ${selectedFund === i ? 'text-fbc-green' : 'text-gray-700'}`}>
                          {f.name}
                        </span>
                      </div>
                      {selectedFund === i && <Check className="w-5 h-5 text-fbc-green mr-2" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Select Amount */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold block uppercase tracking-wider text-gray-500">2. Choose amount</label>
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    {currencies.map(c => (
                      <button
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={`text-xs px-3 py-1.5 rounded-md font-bold transition-colors ${
                          currency === c ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
                        }`}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-3">
                  {amounts.map(amt => (
                    <button
                      key={amt}
                      onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                      className={`py-3.5 rounded-xl border text-base font-bold transition-all
                        ${selectedAmount === amt && !customAmount
                          ? 'bg-fbc-green text-white border-fbc-green shadow-md'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}>
                      {currencySymbol[currency]}{amt}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={customAmount}
                  onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                  placeholder="Or enter a custom amount..."
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none focus:border-fbc-green focus:ring-1 focus:ring-fbc-green transition-colors"
                />
              </div>

              {/* 3. Personal Details */}
              <div className="mb-8">
                <label className="text-sm font-bold block mb-3 uppercase tracking-wider text-gray-500">3. Your details</label>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={e => setForm({ ...form, firstName: e.target.value })}
                    placeholder="First name"
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-fbc-green focus:ring-1 focus:ring-fbc-green transition-all"
                  />
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={e => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Last name"
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-fbc-green focus:ring-1 focus:ring-fbc-green transition-all"
                  />
                </div>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="Email address"
                  className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-fbc-green focus:ring-1 focus:ring-fbc-green transition-all"
                />
              </div>

              {/* 4. Payment Method */}
              <div className="mb-10">
                <label className="text-sm font-bold block mb-3 uppercase tracking-wider text-gray-500">4. Payment Method</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {paymentMethods.map(pm => (
                    <div
                      key={pm.id}
                      onClick={() => setPaymentMethod(pm.id)}
                      className={`px-4 py-3 rounded-xl border cursor-pointer transition-all flex items-center gap-4
                        ${paymentMethod === pm.id
                          ? 'border-fbc-green bg-fbc-green-light ring-1 ring-fbc-green shadow-sm'
                          : 'border-gray-200 hover:border-gray-300'}`}>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 ${paymentMethod === pm.id ? 'text-fbc-green' : 'text-gray-500'}`}>
                        {pm.icon}
                      </div>
                      <span className={`text-sm font-semibold ${paymentMethod === pm.id ? 'text-gray-900' : 'text-gray-600'}`}>
                        {pm.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={() => setDonated(true)}
                className="w-full bg-fbc-green text-white font-bold py-4 text-lg rounded-2xl hover:bg-fbc-green-dark hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-card">
                <Heart className="w-5 h-5 fill-current" />
                Donate {currencySymbol[currency]}{displayAmount || '0'} Now
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-5 font-medium flex items-center justify-center gap-1.5">
                <span className="text-[10px]">🔒</span> Secured by Stripe & Local Payment Providers. No hidden fees.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donate;