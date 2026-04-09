import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
import { useEffect, useState } from 'react';

function EditProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    chapter: '',
    graduationYear: '',
    location: '',
    occupation: '',
    bio: '',
    profileImage: '',
  });
  const [message, setMessage] = useState('');

  const chapters = ['Sierra Leone', 'UK', 'USA', 'Nigeria', 'Gambia'];

  useEffect(() => {
    // Load profile data from localStorage
    const savedProfile = localStorage.getItem('fbc_user_profile');
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    } else {
      setFormData({
        name: 'Amara Johnson',
        email: 'amara.johnson@email.com',
        chapter: 'USA',
        graduationYear: 2015,
        location: 'New York, USA',
        occupation: 'Software Engineer',
        bio: 'FBC graduate passionate about technology and community engagement. Active member of the USA Chapter.',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('fbc_user_profile', JSON.stringify(formData));
    setMessage('Profile updated successfully!');
    setTimeout(() => {
      navigate('/profile');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-fbc-green text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate('/profile')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-4xl font-bold">Edit Profile</h1>
        </div>
      </div>

      {/* Edit Form */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {message && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Profile Image Upload */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Profile Picture
              </label>
              <div className="flex items-center gap-6">
                <img
                  src={formData.profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-fbc-gold"
                />
                <div>
                  <label className="flex items-center gap-2 bg-fbc-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all cursor-pointer">
                    <Upload size={18} />
                    Upload Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-2">JPG, PNG or GIF. Max 5MB</p>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fbc-gold focus:border-transparent outline-none"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fbc-gold focus:border-transparent outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Chapter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chapter *
                </label>
                <select
                  name="chapter"
                  value={formData.chapter}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fbc-gold focus:border-transparent outline-none"
                >
                  <option value="">Select a chapter</option>
                  {chapters.map(ch => (
                    <option key={ch} value={ch}>{ch}</option>
                  ))}
                </select>
              </div>

              {/* Graduation Year */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Graduation Year *
                </label>
                <input
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                  min="1900"
                  max={new Date().getFullYear()}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fbc-gold focus:border-transparent outline-none"
                  placeholder="2015"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fbc-gold focus:border-transparent outline-none"
                  placeholder="City, Country"
                />
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fbc-gold focus:border-transparent outline-none"
                  placeholder="Your profession"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fbc-gold focus:border-transparent outline-none resize-none"
                placeholder="Tell us about yourself, your career, and your connection to FBC..."
              />
              <p className="text-sm text-gray-500 mt-2">
                {formData.bio.length}/500 characters
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-fbc-gold text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-all"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => navigate('/profile')}
                className="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
