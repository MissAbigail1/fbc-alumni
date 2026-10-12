import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

// Replace these placeholder images with the official alumni archive images provided by the FBC Alumni Association.
const alumniArchiveImages = [
  {
    src: "/images/history/alumni-archive-1.jpg",
    alt: "FBC alumni gathering",
    caption: "Alumni gathering and fellowship",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-2.jpg",
    alt: "FBC alumni student support activity",
    caption: "Student support initiative",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-3.jpg",
    alt: "FBC alumni chapter activity",
    caption: "Chapter activity and planning",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-4.jpg",
    alt: "FBC200 alumni mobilisation activity",
    caption: "FBC200 mobilisation and meetings",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-5.jpg",
    alt: "FBC alumni group coordination",
    caption: "Alumni representatives coordination",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-6.jpg",
    alt: "FBC alumni event speaker",
    caption: "Alumni event address",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-7.jpg",
    alt: "FBC alumni gathering at event",
    caption: "Alumni gathering",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-8.jpg",
    alt: "FBC alumni panel discussion",
    caption: "Alumni panel and leadership",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-9.jpg",
    alt: "FBC alumni committee sitting",
    caption: "Alumni committee session",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-10.jpg",
    alt: "FBC alumni activity",
    caption: "Alumni activity",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-11.jpg",
    alt: "FBC alumni formal dinner gathering",
    caption: "Alumni formal dinner and fellowship",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-12.jpg",
    alt: "FBC alumni football team",
    caption: "Alumni football team",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-13.jpg",
    alt: "FBC alumni at construction gate",
    caption: "Alumni representatives at FBC gate",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-14.jpg",
    alt: "FBC alumnus calling on site",
    caption: "Alumnus coordinating on site",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-15.jpg",
    alt: "FBC alumni parade march",
    caption: "Alumni parade procession",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-16.jpg",
    alt: "FBC alumnus standing at gate",
    caption: "Alumnus standing at campus gate",
    year: "Archive",
  },
  {
    src: "/images/history/alumni-archive-17.jpg",
    alt: "FBC alumni marching together",
    caption: "Alumni march past together",
    year: "Archive",
  },
];

// Image-only archive card — no card box, no badge, no caption text displayed.
const ArchiveImageCard = ({ image }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
      {!hasError ? (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[#f0f7f3] border border-dashed border-[#1a5c38]/25 flex flex-col items-center justify-center text-center">
          <ImageIcon className="w-7 h-7 text-fbc-green opacity-40 mb-2" />
          <span className="text-[10px] font-semibold text-fbc-green/60 uppercase tracking-wider">Alumni Archive Image</span>
        </div>
      )}
    </div>
  );
};

function History() {
  const navigate = useNavigate();

  const [selectedStory, setSelectedStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!selectedStory) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedStory(null);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedStory]);

  const maxIndex = Math.max(0, alumniArchiveImages.length - visibleCards);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const archiveItems = [
    {
      year: '2011',
      title: 'HE Ex-President Obasanjo Becomes Honorary Alumnus',
      desc: 'HE President Obasanjo, the past President of Nigeria, was formally made honorary alumnus of Fourah Bay College. He was delighted to become an honorary alumnus of Fourah Bay College, having missed the opportunity in 1956.',
      imageSrc: '/images/history/obasanjo-honorary-alumnus.jpg',
      fullStory: 'HE President Obasanjo, the past President of Nigeria was formally made honorary alumnus of Fourah Bay College. He was delighted to become an honorary alumnus of Fourah Bay College having missed the opportunity in 1956. At a ceremony in his honor at the Adjai Crowther Ampitheatre, the Pro-Chancellor Dr. Modupe Taylor-Pearce called the college ‘a center of excellence’ and called on Alumni to support the college.\n\nThe FBC Alumni have since elected and confirmed a new Executive committee who will run a series of events to raise funds for the organisation. So far the executive have organised an Alumni Jamboree which will enable the Association to put money towards an Alumni Complex.'
    },
    {
      year: '2011',
      title: 'First Annual FBC Alumni Reunion Banquet',
      desc: 'The revived FBC Alumni Association worked to reconnect alumni and strengthen the association, culminating in the First Annual FBC Alumni Reunion Banquet held at Parliament Building in November 2011.',
      imageSrc: '/images/history/fbc-alumni-reunion-banquet-2011.jpg',
      fullStory: 'The Fourah Bay College Alumni Association has been revived and operational for a period of time. The Executive of the organization have been working steadfastly to get the majority of the Alumni involved in the association. Regular meetings of the executive of the organization have been taking place since the earlier part of the year to plan on the launching of the FBC Alumni Relations and Development Office and the reunion banquet. The Banquet was held at Parliament Building in November 2011.\n\nFirst Annual FBC Alumni Reunion Banquet\n\nThe First of what is intended to be an annual reunion of Alumni of FBC was planned on Friday 25 November 2011 in the hall of Parliament with the President HE Ernest Bai Koroma as the Distinguished Grand Chief Patron. Although the event was well publicized, and tickets were sold at Le 150,000 per person, we fell far short of the expected guest target of 600 people. The hope was to have a fundraising event with a raffle draw.\n\nUnfortunately, alumni did not respond and there were many events taking place at the time. Although the President was unable to make the event, the program went on smoothly with a three-course meal. In his speech at the reunion, the President of the FBC Alumni Association, Dr. ...'
    },
    {
      year: '2011',
      title: 'FBC Alumni Launches Alumni Relations and Development Office',
      desc: 'The FBC Alumni formally launched the Fourah Bay College Alumni Relations and Development Office in September 2011, establishing a central contact point for alumni and strengthening the relationship between the College and its alumni.',
      imageSrc: '/images/history/fbc-alumni-relations-office-2011.jpg',
      fullStory: 'The FBC Alumni formally launched the Fourah Bay College Alumni Relations and Development Office in September 2011. The office was to act as the central contact point for alumni to get information, if needed. The space for this office was kindly donated by the college authorities and is located in the Strasser-King Multipurpose Building. It was officially opened by an Alumnus, Mr. Tunde Cole who is the Managing Director of N.P. Ltd. as well as the current President of the Sierra Leone Chamber of Commerce, Industry, and Agriculture on Friday 9th September 2011 in a grand ceremony to mark the event. View the photo gallery here.\n\nAt this event, Mr. Tunde Cole pledged Le 20 million to the FBC Alumni Association. In his speech to mark the occasion, Dr. Kishore Shankerdas said, “Ask not what your college can do for you but what you can do for your college.”'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-24 text-stone-850">


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

        {/* Carousel Gallery Section */}
        <div className="mt-16 text-center max-w-6xl mx-auto border border-stone-200 bg-stone-100/30 p-8 rounded-lg shadow-sm">
          <span className="text-xs uppercase tracking-widest text-fbc-gold font-bold">
            Archive Gallery
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#1a5c38] mt-2 mb-3">
            From the Alumni Archive
          </h2>
          <p className="text-gray-600 font-sans text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            Archival moments from alumni gatherings, student-support initiatives, chapter activities, and FBC200 mobilisation.
          </p>

          {/* Carousel container */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="relative px-12 focus:outline-none focus:ring-1 focus:ring-[#1a5c38]/20 rounded-md"
          >
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
              >
                {alumniArchiveImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <ArchiveImageCard image={image} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 ml-2 z-20 w-10 h-10 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1a5c38] hover:border-[#1a5c38] flex items-center justify-center shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#1a5c38]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 z-20 w-10 h-10 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#1a5c38] hover:border-[#1a5c38] flex items-center justify-center shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#1a5c38]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-[#1a5c38] w-5' : 'bg-stone-300 hover:bg-stone-400 w-2'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
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
                <button
                  onClick={() => setSelectedStory(item)}
                  className="mt-4 text-[11px] font-bold uppercase tracking-wide text-fbc-green hover:underline focus:outline-none"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[calc(100vh-2rem)] border border-stone-200 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
              <span className="text-[10px] font-bold uppercase tracking-widest text-fbc-gold">{selectedStory.year}</span>
              <button
                onClick={() => setSelectedStory(null)}
                className="text-stone-500 hover:text-stone-800 text-2xl leading-none"
                aria-label="Close story"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="mb-4">
                <img src={selectedStory.imageSrc} alt={selectedStory.title} className="w-full h-56 object-cover rounded border border-stone-200" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-950 mb-3">{selectedStory.title}</h3>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{selectedStory.fullStory}</div>
            </div>
          </div>
        </div>
      )}

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
            onClick={() => navigate('/events')}
            className="w-full sm:w-auto px-8 py-3 bg-fbc-green hover:bg-fbc-green-dark text-white font-bold rounded text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View Upcoming Events</span>
            <ArrowRight size={13} />
          </button>

          <button
            onClick={() => navigate('/chapters')}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Explore Chapters
          </button>

          <button
            onClick={() => navigate('/constitutional-bylaws')}
            className="w-full sm:w-auto px-6 py-3 border border-fbc-gold text-fbc-green hover:bg-fbc-gold/10 font-bold rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Read the Constitution
          </button>
        </div>
      </div>

    </div>
  );
}

export default History;
