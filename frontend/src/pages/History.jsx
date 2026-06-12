import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function History() {
  const navigate = useNavigate();

  const archiveItems = [
    {
      year: '2014',
      title: 'Alumni USA Bus Donation',
      desc: 'US-based alumni donation of a 30-seater campus bus to ease student transit.',
      imageSrc: '/images/history/alumni-bus-donation.jpg'
    },
    {
      year: '2017',
      title: 'FBC Alumni Association UK Launch',
      desc: 'Official launch event hosted at the House of Commons in Westminster, London.',
      imageSrc: '/images/history/fbcaa-uk-launch.jpg'
    },
    {
      year: '2026',
      title: 'FBC200 Float Parade',
      desc: 'Alumni procession through Freetown marking the journey to the bicentenary.',
      imageSrc: '/images/history/fbc200-float-parade.jpg'
    },
    {
      year: '2026',
      title: 'Alumni and Management Meeting',
      desc: 'Planning session with college leadership for anniversary activities and mobilisation.',
      imageSrc: '/images/history/alumni-management-meeting.jpg'
    },
    {
      year: '2020s',
      title: 'Scholarship and Student Support',
      desc: 'Ongoing fundraising for educational resources, tuition grants, and mentorship.',
      imageSrc: '/images/history/scholarship-support.jpg'
    },
    {
      year: '2020s',
      title: 'Library and Campus Support',
      desc: 'Refurbishments and learning materials supplied to campus library and sanitation facilities.',
      imageSrc: '/images/history/library-support.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-24 text-stone-850">
      
      {/* Top Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8 print:hidden">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 hover:opacity-85 transition-opacity text-xs font-bold uppercase tracking-widest text-fbc-green mb-4 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <span className="text-xs uppercase tracking-widest text-fbc-gold font-bold">
          Fourah Bay College Alumni Association · Freetown · Global Diaspora
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-950 mt-3 tracking-tight">
          The FBC Alumni Story
        </h1>
        <p className="text-gray-600 font-sans text-base md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          For generations, Fourah Bay College alumni have carried the college’s name beyond the classroom — building chapters, supporting students, preserving legacy, and giving back to the institution that shaped them.
        </p>

        {/* Hero Archival Image */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="border border-stone-200 bg-white p-2 rounded-sm shadow-sm">
            {/* TODO: Replace /images/history/fbc-alumni-archive.jpg with an official FBC alumni archive image or float parade photo */}
            <img 
              src="/images/history/fbc-alumni-archive.jpg" 
              alt="Fourah Bay College Alumni Archive" 
              className="w-full h-[300px] md:h-[450px] object-cover rounded-sm filter grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                // Try other placeholder options
                e.target.src = "/images/history/old-fourah-bay-college.jpg";
                e.target.onerror = (err) => {
                  err.target.style.display = 'none';
                  err.target.nextSibling.style.display = 'flex';
                };
              }}
            />
            <div className="hidden h-[250px] md:h-[350px] bg-stone-100 flex-col items-center justify-center text-stone-400 rounded-sm">
              <span className="text-sm font-semibold uppercase tracking-wider">Archival Image Placeholder</span>
              <span className="text-xs mt-1">/images/history/fbc-alumni-archive.jpg</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic mt-3 text-center">
            Archival record of global alumni gatherings and student-body support initiatives.
          </p>
        </div>
      </div>

      {/* 1. Opening Story Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200">
        <h2 className="font-serif text-3xl font-bold text-gray-950 mb-8">
          A Legacy That Continued After Graduation
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed font-sans text-base md:text-lg">
          <p>
            The story of Fourah Bay College did not end at graduation. Across Sierra Leone and the diaspora, FBC graduates have remained connected by a shared identity, a sense of duty, and a desire to support the college that shaped them.
          </p>
          <p>
            Over the years, alumni have contributed through reunions, fundraising, scholarships, campus support, professional mentorship, chapter activities, and bicentenary preparations. The alumni movement exists to keep that bond alive and to turn shared history into practical support for current and future generations.
          </p>
        </div>
      </div>

      {/* 2. Alumni Journey Timeline */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200">
        <h2 className="font-serif text-3xl font-bold text-gray-950 mb-12">
          Milestones in the Alumni Journey
        </h2>
        
        <div className="relative border-l border-fbc-gold pl-8 md:ml-40 ml-4 space-y-12">
          {/* Milestone 2014 */}
          <div className="relative">
            <div className="md:absolute md:-left-36 md:w-28 md:text-right font-serif font-bold text-fbc-green text-lg md:text-xl">
              2014
            </div>
            <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-stone-50 border-2 border-fbc-gold flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-fbc-green"></div>
            </div>
            <div>
              <div className="block md:hidden text-fbc-green font-bold text-sm uppercase tracking-wider mb-1">2014</div>
              <h4 className="font-serif font-bold text-gray-955 text-base md:text-lg">Alumni USA Donates Bus to FBC</h4>
              <p className="text-gray-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                An FBC alumni organisation based in the United States donated a 30-seater bus to help ease transport challenges on campus.
              </p>
            </div>
          </div>

          {/* Milestone 2017 */}
          <div className="relative">
            <div className="md:absolute md:-left-36 md:w-28 md:text-right font-serif font-bold text-fbc-green text-lg md:text-xl">
              2017
            </div>
            <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-stone-50 border-2 border-fbc-gold flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-fbc-green"></div>
            </div>
            <div>
              <div className="block md:hidden text-fbc-green font-bold text-sm uppercase tracking-wider mb-1">2017</div>
              <h4 className="font-serif font-bold text-gray-955 text-base md:text-lg">FBC Alumni Association UK Launches</h4>
              <p className="text-gray-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                The UK chapter was launched at the House of Commons in Westminster, London, strengthening the FBC alumni network in the diaspora.
              </p>
            </div>
          </div>

          {/* Milestone 2020s */}
          <div className="relative">
            <div className="md:absolute md:-left-36 md:w-28 md:text-right font-serif font-bold text-fbc-green text-lg md:text-xl">
              2020s
            </div>
            <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-stone-50 border-2 border-fbc-gold flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-fbc-green"></div>
            </div>
            <div>
              <div className="block md:hidden text-fbc-green font-bold text-sm uppercase tracking-wider mb-1">2020s</div>
              <h4 className="font-serif font-bold text-gray-955 text-base md:text-lg">Scholarships, Library Support and Campus Projects</h4>
              <p className="text-gray-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                Alumni activities have supported scholarships, teaching and learning resources, safe learning environments, and refurbishment needs including library and sanitation facilities.
              </p>
            </div>
          </div>

          {/* Milestone 2026 Meeting */}
          <div className="relative">
            <div className="md:absolute md:-left-36 md:w-28 md:text-right font-serif font-bold text-fbc-green text-lg md:text-xl">
              2026
            </div>
            <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-stone-50 border-2 border-fbc-gold flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-fbc-green"></div>
            </div>
            <div>
              <div className="block md:hidden text-fbc-green font-bold text-sm uppercase tracking-wider mb-1">2026</div>
              <h4 className="font-serif font-bold text-gray-955 text-base md:text-lg">Alumni and FBC Management Unite Ahead of Bicentennial</h4>
              <p className="text-gray-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                Alumni representatives met with FBC leadership and the Bicentennial Anniversary Planning Committee to align activities, resource mobilisation, and preparations for FBC200.
              </p>
            </div>
          </div>

          {/* Milestone 2026 Parade */}
          <div className="relative">
            <div className="md:absolute md:-left-36 md:w-28 md:text-right font-serif font-bold text-fbc-green text-lg md:text-xl">
              2026
            </div>
            <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-stone-50 border-2 border-fbc-gold flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-fbc-green"></div>
            </div>
            <div>
              <div className="block md:hidden text-fbc-green font-bold text-sm uppercase tracking-wider mb-1">2026</div>
              <h4 className="font-serif font-bold text-gray-955 text-base md:text-lg">Float Parade Builds Momentum for FBC200</h4>
              <p className="text-gray-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                Alumni, students, staff, and well-wishers joined a colourful procession through Freetown as part of the build-up to Fourah Bay College’s bicentenary.
              </p>
            </div>
          </div>

          {/* Milestone 2026 Seed Fund */}
          <div className="relative">
            <div className="md:absolute md:-left-36 md:w-28 md:text-right font-serif font-bold text-fbc-green text-lg md:text-xl">
              2026
            </div>
            <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-stone-50 border-2 border-fbc-gold flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-fbc-green"></div>
            </div>
            <div>
              <div className="block md:hidden text-fbc-green font-bold text-sm uppercase tracking-wider mb-1">2026</div>
              <h4 className="font-serif font-bold text-gray-955 text-base md:text-lg">Innovation Seed Fund Opens for Recent Graduates</h4>
              <p className="text-gray-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                An innovation funding opportunity opened for eligible recent FBC graduates, connecting alumni development with entrepreneurship, mentorship, and future opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Alumni Activities Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 border-t border-stone-200">
        <h2 className="font-serif text-3xl font-bold text-gray-955 mb-10 text-center">
          How Alumni Have Given Back
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-stone-200 p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-serif text-base font-bold text-fbc-green mb-3">
              Student Support
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Scholarships, financial assistance, mentorship, and support for current students.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-stone-200 p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-serif text-base font-bold text-fbc-green mb-3">
              Campus Development
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Library support, teaching resources, transport support, infrastructure support, and practical college needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-stone-200 p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-serif text-base font-bold text-fbc-green mb-3">
              Diaspora Chapters
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Alumni chapters outside Sierra Leone help graduates stay connected, organise activities, and support college development.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-stone-200 p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-serif text-base font-bold text-fbc-green mb-3">
              FBC200 Mobilisation
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Alumni have supported bicentenary planning, publicity, fundraising conversations, float parade activities, and legacy-building efforts.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Archive/Gallery Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 border-t border-stone-200">
        <h2 className="font-serif text-3xl font-bold text-gray-955 mb-10 text-center">
          From the Alumni Archive
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archiveItems.map((item, index) => (
            <div key={index} className="bg-white border border-stone-200 p-4 rounded hover:shadow-md transition-shadow duration-300">
              <div className="h-44 bg-stone-100 flex flex-col items-center justify-center text-stone-400 rounded mb-4 relative overflow-hidden border border-stone-200">
                {/* TODO: Replace /images/history/... paths with official alumni archive images */}
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="text-center p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-fbc-gold block mb-1">Archive Entry</span>
                  <span className="text-[11px] font-medium text-stone-500">{item.title}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-fbc-gold">{item.year}</span>
                <h4 className="font-serif font-bold text-gray-950 text-sm mt-1">{item.title}</h4>
                <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Closing Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 text-center">
        <h2 className="font-serif text-3xl font-bold text-gray-955 mb-6">
          The Story Continues
        </h2>
        <p className="text-gray-600 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Today, the FBC Alumni platform continues this journey by helping graduates reconnect, discover chapters, support students, share opportunities, and participate in the future of Fourah Bay College. The alumni story is still being written — by every graduate who chooses to stay connected and give back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/signup')}
            className="w-full sm:w-auto px-8 py-3 bg-fbc-green hover:bg-fbc-green-dark text-white font-bold rounded text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Join the Alumni Network</span>
            <ArrowRight size={13} />
          </button>
          
          <button
            onClick={() => navigate('/chapters')}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Explore Chapters
          </button>

          <button
            onClick={() => navigate('/donate')}
            className="w-full sm:w-auto px-6 py-3 border border-fbc-gold text-fbc-green hover:bg-fbc-gold/10 font-bold rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Support FBC200
          </button>
        </div>
      </div>

    </div>
  );
}

export default History;
