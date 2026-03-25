import { Users } from 'lucide-react';

function AlumniLeadership() {
  const leaders = [
    {
      id: 1,
      name: 'Prof. Francis Sesay',
      role: 'Global President',
      chapter: 'Sierra Leone HQ',
      image: 'https://images.unsplash.com/photo-1570295999919-9cebcdd003c0?q=80&w=300&auto=format&fit=crop',
      bio: 'Distinguished academic and visionary leader',
      initials: 'FS',
      bg: 'bg-green-100',
      text: 'text-green-800',
    },
    {
      id: 2,
      name: 'Dr. David Tucker',
      role: 'International VP',
      chapter: 'UK Chapter',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      bio: 'Medical consultant and diaspora advocate',
      initials: 'DT',
      bg: 'bg-blue-100',
      text: 'text-blue-800',
    },
    {
      id: 3,
      name: 'Dr. Aisha Kamara',
      role: 'Secretary General',
      chapter: 'Sierra Leone HQ',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
      bio: 'Administrator and community builder',
      initials: 'AK',
      bg: 'bg-purple-100',
      text: 'text-purple-800',
    },
    {
      id: 4,
      name: 'Alpha Bah',
      role: 'Treasurer',
      chapter: 'USA Chapter',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
      bio: 'Economist and financial strategist',
      initials: 'AB',
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
    },
    {
      id: 5,
      name: 'Chioma Okonkwo',
      role: 'West Africa Director',
      chapter: 'Nigeria Chapter',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
      bio: 'Strategic expansion lead for the continent',
      initials: 'CO',
      bg: 'bg-orange-100',
      text: 'text-orange-800',
    },
    {
      id: 6,
      name: 'Amara Jallow',
      role: 'Partnerships Lead',
      chapter: 'Gambia Chapter',
      image: 'https://images.unsplash.com/photo-1507001957142-f48db60a3df0?q=80&w=300&auto=format&fit=crop',
      bio: 'Community engagement and partnerships',
      initials: 'AJ',
      bg: 'bg-pink-100',
      text: 'text-pink-800',
    },
  ];

  return (
    <section className="bg-gray-50 px-16 py-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-fbc-green text-xs font-semibold uppercase tracking-widest mb-2 block">
            Leadership
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Meet Our Alumni Leadership
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Guiding the FBC Alumni movement globally across all chapters and regions
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-gray-100">
              {/* Image */}
              <div className="relative h-32 overflow-hidden bg-gray-200">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Avatar + Name */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${leader.bg} ${leader.text}`}>
                    {leader.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-xs font-semibold text-fbc-green">{leader.role}</p>
                  </div>
                </div>

                {/* Chapter */}
                <div className="mb-2 pb-2 border-b border-gray-100">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                    {leader.chapter}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-3">
            Interested in chapter leadership opportunities?
          </p>
          <button className="bg-fbc-green text-white font-semibold px-6 py-2 rounded-lg hover:bg-fbc-green-dark transition-all text-xs">
            Learn About Leadership Roles
          </button>
        </div>
      </div>
    </section>
  );
}

export default AlumniLeadership;
