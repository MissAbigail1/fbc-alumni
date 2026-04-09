import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, History } from 'lucide-react';
import { useState } from 'react';

function AlumniExecutives() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('executives');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-fbc-green text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <h1 className="text-4xl font-bold">Alumni - History & Executives</h1>
          <p className="text-fbc-gold mt-2 text-lg">Fourah Bay College Alumni Association</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('executives')}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'executives'
                  ? 'text-fbc-green border-fbc-green'
                  : 'text-gray-600 border-transparent hover:text-fbc-green'
              }`}
            >
              <Users size={20} />
              Executives
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'text-fbc-green border-fbc-green'
                  : 'text-gray-600 border-transparent hover:text-fbc-green'
              }`}
            >
              <History size={20} />
              History
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Executives Tab */}
        {activeTab === 'executives' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Executive Committee</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* President */}
              <div className="border-l-4 border-fbc-gold pl-6 py-4">
                <h3 className="text-lg font-semibold text-fbc-green mb-2">President</h3>
                <p className="text-gray-700 text-lg font-medium">Position to be filled</p>
                <p className="text-gray-500 text-sm mt-1">Elections: July 1, 2025 - June 30, 2027</p>
              </div>

              {/* Vice President */}
              <div className="border-l-4 border-fbc-gold pl-6 py-4">
                <h3 className="text-lg font-semibold text-fbc-green mb-2">Vice President</h3>
                <p className="text-gray-700 text-lg font-medium">Position to be filled</p>
                <p className="text-gray-500 text-sm mt-1">Elections: July 1, 2025 - June 30, 2027</p>
              </div>

              {/* Secretary General */}
              <div className="border-l-4 border-fbc-gold pl-6 py-4">
                <h3 className="text-lg font-semibold text-fbc-green mb-2">Secretary General</h3>
                <p className="text-gray-700 text-lg font-medium">Position to be filled</p>
                <p className="text-gray-500 text-sm mt-1">Elections: July 1, 2025 - June 30, 2027</p>
              </div>

              {/* Treasurer */}
              <div className="border-l-4 border-fbc-gold pl-6 py-4">
                <h3 className="text-lg font-semibold text-fbc-green mb-2">Treasurer</h3>
                <p className="text-gray-700 text-lg font-medium">Position to be filled</p>
                <p className="text-gray-500 text-sm mt-1">Elections: July 1, 2025 - June 30, 2027</p>
              </div>

              {/* Public Relations Officer */}
              <div className="border-l-4 border-fbc-gold pl-6 py-4">
                <h3 className="text-lg font-semibold text-fbc-green mb-2">Public Relations Officer</h3>
                <p className="text-gray-700 text-lg font-medium">Position to be filled</p>
                <p className="text-gray-500 text-sm mt-1">Elections: July 1, 2025 - June 30, 2027</p>
              </div>

              {/* Social Secretary */}
              <div className="border-l-4 border-fbc-gold pl-6 py-4">
                <h3 className="text-lg font-semibold text-fbc-green mb-2">Social Secretary</h3>
                <p className="text-gray-700 text-lg font-medium">Position to be filled</p>
                <p className="text-gray-500 text-sm mt-1">Elections: July 1, 2025 - June 30, 2027</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-fbc-gold/10 rounded-lg border border-fbc-gold">
              <h3 className="text-lg font-semibold text-fbc-green mb-3">About the Executive Committee</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Executive Committee is the governing body of the Fourah Bay College Alumni Association. It consists of the elected officers, the immediate past president, the auditor, and two ex-officio members.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Officers are elected by the membership for two-year terms and assume office on July 1, serving through June 30 of the following year. For more details, please refer to the <span className="font-semibold">Constitutional and Bylaws</span> page.
              </p>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-fbc-green mb-6">Our Legacy</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                The Fourah Bay College Alumni Association has a rich history spanning generations of dedicated graduates 
                who have maintained strong connections to their alma mater and to each other across the globe.
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Milestones</h3>
              <div className="space-y-8">
                
                {/* 1827 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-fbc-gold text-white flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-fbc-green mb-2">1827</h4>
                    <p className="text-gray-700">
                      Fourah Bay College established as the first university in Sub-Saharan Africa, 
                      beginning a legacy of academic excellence and distinguished alumni.
                    </p>
                  </div>
                </div>

                {/* Early 20th Century */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-fbc-gold text-white flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-fbc-green mb-2">Early 20th Century</h4>
                    <p className="text-gray-700">
                      Alumni networks begin to form as graduates spread across West Africa and beyond, 
                      maintaining connections through correspondence and periodic gatherings.
                    </p>
                  </div>
                </div>

                {/* Mid 20th Century */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-fbc-gold text-white flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-fbc-green mb-2">Mid-20th Century</h4>
                    <p className="text-gray-700">
                      Formal Alumni Association structures established. Chapters organize in major cities 
                      across West Africa, Europe, and North America to support fellow alumni.
                    </p>
                  </div>
                </div>

                {/* Modern Era */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-fbc-gold text-white flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-fbc-green mb-2">Modern Era</h4>
                    <p className="text-gray-700">
                      The Alumni Association evolves to include digital platforms, virtual events, 
                      and expanded mentorship programs connecting thousands of graduates worldwide.
                    </p>
                  </div>
                </div>

                {/* Bicentennial */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-fbc-gold text-white flex items-center justify-center font-bold">
                      5
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-fbc-green mb-2">2027 - Bicentennial Celebration</h4>
                    <p className="text-gray-700">
                      Fourah Bay College celebrates 200 years of excellence. The Alumni Association 
                      continues its mission to unite graduates and support their alma mater's future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-fbc-green/5 rounded-lg p-6 border-l-4 border-fbc-green">
                <h4 className="text-lg font-semibold text-fbc-green mb-3">5,000+</h4>
                <p className="text-gray-700">Alumni members worldwide actively engaged in the network</p>
              </div>
              <div className="bg-fbc-gold/5 rounded-lg p-6 border-l-4 border-fbc-gold">
                <h4 className="text-lg font-semibold text-fbc-green mb-3">42 Countries</h4>
                <p className="text-gray-700">Alumni chapters and networks spanning six continents</p>
              </div>
              <div className="bg-fbc-green/5 rounded-lg p-6 border-l-4 border-fbc-green">
                <h4 className="text-lg font-semibold text-fbc-green mb-3">Ongoing Support</h4>
                <p className="text-gray-700">Continuous mentorship, fundraising, and collaborative programs</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-8 bg-gradient-to-r from-fbc-green to-fbc-green/80 text-white rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">Be Part of Our Story</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of FBC alumni worldwide. Connect with classmates, mentor students, 
                and contribute to the college's continued success.
              </p>
              <button
                onClick={() => navigate('/signup')}
                className="bg-fbc-gold text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-all"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlumniExecutives;
