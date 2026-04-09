import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function History() {
  const navigate = useNavigate();

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
          <h1 className="text-4xl font-bold">History of the Alumni</h1>
          <p className="text-fbc-gold mt-2 text-lg">Fourah Bay College Alumni Association</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
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
              Create Your Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
