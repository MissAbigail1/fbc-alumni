import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    country: '',
    jobTitle: '',
    employer: '',
    graduationYear: '',
    faculty: '',
    degree: '',
    memory: '',
    goals: [],
    diaspora: '',
  });

  const toggleGoal = (goal) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-200 w-full max-w-md p-8">

        {/* Step 0 - Register */}
        {step === 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 text-center mb-1">Join FBC Alumni</h2>
            <p className="text-sm text-gray-500 text-center mb-6">Create your free profile in under 2 minutes</p>

            {/* SSO Buttons */}
            <div className="flex gap-3 mb-4">
              <button className="flex-1 border border-gray-300 text-gray-600 text-sm py-2 rounded-lg hover:bg-gray-50">
                Continue with Google
              </button>
              <button className="flex-1 border border-gray-300 text-gray-600 text-sm py-2 rounded-lg hover:bg-gray-50">
                Continue with LinkedIn
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">or sign up with email</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">Full name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  placeholder="e.g. Aminata Koroma"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">Email address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  placeholder="At least 8 characters"
                />
              </div>
            </div>

            <button
              onClick={() => setStep(1)}
              className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg mt-5 hover:bg-gray-700">
              Create account
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              Already have an account?{' '}
              <span className="text-blue-600 cursor-pointer hover:underline">Sign in</span>
            </p>
          </div>
        )}

        {/* Steps 1, 2, 3 - Progress Bar */}
        {step > 0 && (
          <div className="flex items-center gap-2 mb-6">
            {['About you', 'FBC story', 'Goals'].map((label, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0
                  ${step > i + 1 ? 'bg-green-600 text-white' :
                    step === i + 1 ? 'bg-gray-900 text-white' :
                    'bg-gray-100 text-gray-400'}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span className={`text-xs ${step === i + 1 ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  {label}
                </span>
                {i < 2 && <div className={`flex-1 h-px ${step > i + 1 ? 'bg-green-600' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>
        )}

        {/* Step 1 - About You */}
        {step === 1 && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-semibold text-gray-900">Tell us about yourself</h2>
              <button onClick={() => setStep(2)} className="text-xs text-gray-400 hover:text-gray-600">Skip</button>
            </div>
            <p className="text-sm text-gray-500 mb-5">Help other alumni find and recognise you.</p>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-1">City <span className="text-gray-400 font-normal">optional</span></label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                    placeholder="Freetown"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-1">Country <span className="text-gray-400 font-normal">optional</span></label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={e => setFormData({...formData, country: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                    placeholder="Sierra Leone"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">Job title <span className="text-gray-400 font-normal">optional</span></label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={e => setFormData({...formData, jobTitle: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  placeholder="e.g. Software engineer, teacher..."
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">Employer <span className="text-gray-400 font-normal">optional</span></label>
                <input
                  type="text"
                  value={formData.employer}
                  onChange={e => setFormData({...formData, employer: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  placeholder="e.g. Ministry of Health..."
                />
              </div>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg mt-5 hover:bg-gray-700">
              Continue →
            </button>
          </div>
        )}

        {/* Step 2 - FBC Story */}
        {step === 2 && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-semibold text-gray-900">Your FBC story</h2>
              <button onClick={() => setStep(3)} className="text-xs text-gray-400 hover:text-gray-600">Skip</button>
            </div>
            <p className="text-sm text-gray-500 mb-5">Tell us about your time at Fourah Bay College.</p>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">Graduation year</label>
                <input
                  type="number"
                  value={formData.graduationYear}
                  onChange={e => setFormData({...formData, graduationYear: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  placeholder="e.g. 2022"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">Faculty</label>
                <input
                  type="text"
                  value={formData.faculty}
                  onChange={e => setFormData({...formData, faculty: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  placeholder="e.g. Faculty of Economics..."
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">Degree <span className="text-gray-400 font-normal">optional</span></label>
                <input
                  type="text"
                  value={formData.degree}
                  onChange={e => setFormData({...formData, degree: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                  placeholder="e.g. BSc Economics..."
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1">A memory of FBC <span className="text-gray-400 font-normal">optional</span></label>
                <textarea
                  value={formData.memory}
                  onChange={e => setFormData({...formData, memory: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500 h-20 resize-none"
                  placeholder="Share a favourite memory from Mount Aureol..."
                />
              </div>
            </div>
            <button
              onClick={() => setStep(3)}
              className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg mt-5 hover:bg-gray-700">
              Continue →
            </button>
          </div>
        )}

        {/* Step 3 - Goals */}
        {step === 3 && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-semibold text-gray-900">What are you here for?</h2>
              <button onClick={() => navigate('/dashboard')} className="text-xs text-gray-400 hover:text-gray-600">Skip</button>
            </div>
            <p className="text-sm text-gray-500 mb-5">Select all that apply.</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['Find a mentor', 'Be a mentor', 'Network with alumni', 'Attend events', 'Donate to FBC', 'Reconnect with classmates', 'Find job opportunities', 'Stay updated on FBC news'].map(goal => (
                <button
                  key={goal}
                  onClick={() => toggleGoal(goal)}
                  className={`text-xs px-4 py-2 rounded-full border transition-all
                    ${formData.goals.includes(goal)
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}>
                  {goal}
                </button>
              ))}
            </div>
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-900 block mb-2">Are you based outside Sierra Leone?</label>
              <div className="flex gap-3">
                {['Yes — I am in the diaspora', 'No — I am in Sierra Leone'].map(option => (
                  <button
                    key={option}
                    onClick={() => setFormData({...formData, diaspora: option})}
                    className={`flex-1 text-xs px-3 py-2 rounded-full border transition-all
                      ${formData.diaspora === option
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <button
             onClick={() => navigate('/feed')}
              className="w-full bg-green-600 text-white text-sm font-semibold py-3 rounded-lg hover:bg-green-700">
              Complete profile — go to my dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Signup;