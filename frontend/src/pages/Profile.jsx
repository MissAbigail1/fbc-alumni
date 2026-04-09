import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Briefcase, Calendar, Edit2, Settings, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Load profile data from localStorage
    const savedProfile = localStorage.getItem('fbc_user_profile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      // Default profile data
      setProfile({
        id: 1,
        name: 'Amara Johnson',
        email: 'amara.johnson@email.com',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        chapter: 'USA',
        graduationYear: 2015,
        location: 'New York, USA',
        occupation: 'Software Engineer',
        bio: 'FBC graduate passionate about technology and community engagement. Active member of the USA Chapter.',
        joinedDate: 'January 2024',
        membershipStatus: 'Active',
      });
    }
  }, []);

  if (!profile) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-fbc-green text-white">
        <div className="max-w-4xl mx-auto px-6 py-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-1"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-xl font-bold">My Profile</h1>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-48 h-48 rounded-full object-cover border-4 border-fbc-gold mb-4"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => navigate('/edit-profile')}
                  className="flex items-center gap-2 bg-fbc-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                >
                  <Edit2 size={18} />
                  Edit Profile
                </button>
                <button
                  onClick={() => navigate('/settings')}
                  className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
                >
                  <Settings size={18} />
                  Settings
                </button>
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-1">{profile.name}</h2>
              <div className="flex items-center gap-2 text-fbc-gold font-semibold mb-6">
                <span className="inline-block w-2 h-2 bg-fbc-gold rounded-full"></span>
                {profile.membershipStatus}
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-fbc-gold mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-medium">{profile.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-fbc-gold mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase size={18} className="text-fbc-gold mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Occupation</p>
                    <p className="text-gray-900 font-medium">{profile.occupation}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-fbc-gold mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Graduation Year</p>
                    <p className="text-gray-900 font-medium">{profile.graduationYear}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-fbc-gold mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Chapter</p>
                    <p className="text-gray-900 font-medium">{profile.chapter}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-fbc-gold mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p className="text-gray-900 font-medium">{profile.joinedDate}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
