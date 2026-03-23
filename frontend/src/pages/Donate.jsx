import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Donate() {
  const navigate = useNavigate();
  const [selectedFund, setSelectedFund] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('GBP');
  const [frequency, setFrequency] = useState('One-off');
  const [donated, setDonated] = useState(false);

  const funds = [
    { name: 'General scholarship fund', desc: 'Supports any deserving FBC student', raised: 14200, goal: 20000 },
    { name: 'Women in STEM bursary', desc: 'Supports female science students', raised: 6400, goal: 10000 },
    { name: 'Library & infrastructure', desc: 'Upgrades FBC learning facilities', raised: 4200, goal: 15000 },
  ];

  const amounts = [10, 25, 50, 100, 250];
  const currencies = ['GBP £', 'USD $', 'EUR €', 'SLL Le'];
  const frequencies = ['One-off', 'Monthly', 'Annually'];

  const currencySymbol = currency === 'GBP £' ? '£' :
    currency === 'USD $' ? '$' :
    currency === 'EUR €' ? '€' : 'Le';

  const displayAmount = customAmount || selectedAmount;

  return (
    <div className="min-h-screen bg-white">

     <Navbar />

      <div className="px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Give back to FBC</h1>
        <p className="text-sm text-gray-500 mb-6">Your donation funds the next generation of Fourah Bay graduates</p>

        {/* Impact Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { val: '£24,800', label: 'Raised this year' },
            { val: '18', label: 'Students funded' },
            { val: '312', label: 'Donors worldwide' },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-xl font-semibold text-gray-900">{stat.val}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {donated ? (
          /* Success State */
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              ✓
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Thank you for your donation!
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Your {currencySymbol}{displayAmount} donation to the {funds[selectedFund].name} has been received. You will get a confirmation email shortly.
            </p>
            <button
              onClick={() => { setDonated(false); setCustomAmount(''); setSelectedAmount(50); }}
              className="border border-gray-300 text-gray-600 text-sm px-6 py-2 rounded-lg hover:bg-gray-50">
              Make another donation
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8">

            {/* Left — Choose Fund */}
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-3">Choose a fund</div>
              <div className="flex flex-col gap-3">
                {funds.map((fund, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedFund(i)}
                    className={`border rounded-lg p-4 cursor-pointer transition-all
                      ${selectedFund === i
                        ? 'border-green-500 border-2'
                        : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{fund.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{fund.desc}</div>
                    <div className="text-xs text-green-600 mb-2">
                      £{fund.raised.toLocaleString()} raised of £{fund.goal.toLocaleString()} goal
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full">
                      <div
                        className="h-1 bg-green-500 rounded-full"
                        style={{ width: `${Math.round((fund.raised / fund.goal) * 100)}%` }}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Amount */}
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-3">Your donation</div>

              {/* Currency */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {currencies.map(c => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`text-xs px-3 py-1 rounded-full border transition-all
                      ${currency === c
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}>
                    {c}
                  </button>
                ))}
              </div>

              {/* Amount Grid */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {amounts.map(amt => (
                  <button
                    key={amt}
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                    className={`text-sm py-2 rounded-lg border transition-all
                      ${selectedAmount === amt && !customAmount
                        ? 'border-green-500 bg-green-50 text-green-800 font-semibold'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                    {currencySymbol}{amt}
                  </button>
                ))}
                <button
                  onClick={() => setSelectedAmount(null)}
                  className="text-sm py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                  Other
                </button>
              </div>

              {/* Custom Amount */}
              <input
                type="number"
                value={customAmount}
                onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                placeholder="Or enter custom amount"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500 mb-3"
              />

              {/* Frequency */}
              <div className="flex gap-2 mb-5">
                {frequencies.map(f => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`flex-1 text-xs py-2 rounded-lg border transition-all
                      ${frequency === f
                        ? 'bg-gray-100 text-gray-900 font-semibold border-gray-400'
                        : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}>
                    {f}
                  </button>
                ))}
              </div>

              {/* Donate Button */}
              <button
                onClick={() => setDonated(true)}
                className="w-full bg-green-600 text-white text-sm font-semibold py-3 rounded-lg hover:bg-green-700 mb-2">
                Donate {currencySymbol}{displayAmount} to {funds[selectedFund].name}
              </button>
              <div className="text-xs text-gray-400 text-center mb-5">
                Secured by Stripe · All currencies accepted
              </div>

              {/* Donor Wall */}
              <div className="border-t border-gray-100 pt-4">
                <div className="text-xs font-semibold text-gray-900 mb-3">Recent donors</div>
                <div className="flex items-center gap-1 mb-2">
                  {[
                    { initials: 'MB', bg: 'bg-green-100', text: 'text-green-800' },
                    { initials: 'AK', bg: 'bg-purple-100', text: 'text-purple-800' },
                    { initials: 'PC', bg: 'bg-amber-100', text: 'text-amber-800' },
                    { initials: 'DT', bg: 'bg-blue-100', text: 'text-blue-800' },
                  ].map((donor, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${donor.bg} flex items-center justify-center text-xs font-semibold ${donor.text} -ml-1 first:ml-0 border-2 border-white`}>
                      {donor.initials}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 -ml-1 border-2 border-white">
                    +308
                  </div>
                </div>
                <div className="text-xs text-gray-500">312 alumni have donated this year</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donate;