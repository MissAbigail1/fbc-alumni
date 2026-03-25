import { useEffect, useState } from 'react';

function BicentennialCountdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      // Target date: February 18, 2027
      const targetDate = new Date('2027-02-18T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { label: 'Days', value: countdown.days },
    { label: 'Hours', value: countdown.hours },
    { label: 'Minutes', value: countdown.minutes },
    { label: 'Seconds', value: countdown.seconds },
  ];

  return (
    <section id="bicentennial-countdown" className="w-full bg-[#063b21] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-block bg-yellow-700 text-white text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest border border-yellow-600">
            FBC200 - 18 February 2027
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-6 leading-tight">
          200 Years of Shaping{' '}
          <span className="text-yellow-400">Africa's Finest Minds</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Join us as we celebrate 200 years of excellence, legacy, and impact. Fourah Bay College continues to shape the leaders, thinkers, and changemakers of Africa and the world.
        </p>

        {/* Countdown Grid */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-16">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-black text-yellow-400">
              {String(countdown.days).padStart(2, '0')}
            </div>
            <div className="text-gray-300 text-sm font-bold uppercase tracking-widest mt-2">
              Days
            </div>
          </div>

          <div className="text-5xl md:text-6xl font-black text-yellow-400">:</div>

          <div className="text-center">
            <div className="text-6xl md:text-7xl font-black text-yellow-400">
              {String(countdown.hours).padStart(2, '0')}
            </div>
            <div className="text-gray-300 text-sm font-bold uppercase tracking-widest mt-2">
              Hours
            </div>
          </div>

          <div className="text-5xl md:text-6xl font-black text-yellow-400">:</div>

          <div className="text-center">
            <div className="text-6xl md:text-7xl font-black text-yellow-400">
              {String(countdown.minutes).padStart(2, '0')}
            </div>
            <div className="text-gray-300 text-sm font-bold uppercase tracking-widest mt-2">
              Minutes
            </div>
          </div>

          <div className="text-5xl md:text-6xl font-black text-yellow-400">:</div>

          <div className="text-center">
            <div className="text-6xl md:text-7xl font-black text-yellow-400">
              {String(countdown.seconds).padStart(2, '0')}
            </div>
            <div className="text-gray-300 text-sm font-bold uppercase tracking-widest mt-2">
              Seconds
            </div>
          </div>
        </div>

        {/* CTA Text */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-base">
            Mark your calendars for the FBC 200th Anniversary on <span className="text-yellow-400 font-bold">June 27, 2027</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        #bicentennial-countdown {
          background: linear-gradient(135deg, #063b21 0%, #0f5a35 100%);
        }

        .group:hover .drop-shadow-lg {
          filter: drop-shadow(0 0 15px rgba(255, 204, 51, 0.6));
        }
      `}</style>
    </section>
  );
}

export default BicentennialCountdown;
