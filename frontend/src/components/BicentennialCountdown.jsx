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



  return (
    <section id="bicentennial-countdown" className="w-full py-20 lg:py-16 xl:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-block max-w-full bg-fbc-green text-white text-[10px] sm:text-xs font-bold px-3 sm:px-5 py-2.5 rounded-lg uppercase tracking-wider border border-fbc-green/30 shadow-sm text-center">
            1827 — 2027 · FOURAH BAY COLLEGE BICENTENARY
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-serif font-bold text-center text-gray-900 mb-6 leading-tight">
          Two Centuries of Learning, Leadership, and Legacy
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-12 xl:mb-16 text-base sm:text-lg leading-relaxed font-light">
          As Fourah Bay College approaches its 200th anniversary, alumni across Sierra Leone and the diaspora are coming together to honour the college's history, celebrate its contribution to society, and support its future.
        </p>

        {/* Countdown Grid */}
        <div className="flex justify-center items-start gap-1 sm:gap-4 md:gap-8 lg:gap-6 mb-12 sm:mb-16 lg:mb-12 xl:mb-16 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-fbc-green">
              {String(countdown.days).padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-[9px] sm:text-sm font-semibold uppercase tracking-wide mt-2 sm:mt-3">
              Days
            </div>
          </div>

          <div className="text-3xl sm:text-5xl md:text-6xl font-light text-gray-400">:</div>

          <div className="text-center">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-fbc-green">
              {String(countdown.hours).padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-[9px] sm:text-sm font-semibold uppercase tracking-wide mt-2 sm:mt-3">
              Hours
            </div>
          </div>

          <div className="text-3xl sm:text-5xl md:text-6xl font-light text-gray-400">:</div>

          <div className="text-center">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-fbc-green">
              {String(countdown.minutes).padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-[9px] sm:text-sm font-semibold uppercase tracking-wide mt-2 sm:mt-3">
              Minutes
            </div>
          </div>

          <div className="text-3xl sm:text-5xl md:text-6xl font-light text-gray-400">:</div>

          <div className="text-center">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-fbc-green">
              {String(countdown.seconds).padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-[9px] sm:text-sm font-semibold uppercase tracking-wide mt-2 sm:mt-3">
              Seconds
            </div>
          </div>
        </div>

        {/* CTA Text */}
        <div className="text-center mt-16 lg:mt-12 xl:mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Counting down to 200 years of Fourah Bay College. Join us for bicentenary celebrations and the alumni gala.
          </p>
        </div>
      </div>

      <style jsx>{`
        #bicentennial-countdown {
          background: linear-gradient(135deg, #faf8f4 0%, #f5f3f0 100%);
        }
      `}</style>
    </section>
  );
}

export default BicentennialCountdown;
