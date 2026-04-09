import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Lock, Eye, Mail, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';

function Settings() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    eventReminders: true,
    chapterUpdates: true,
    privateProfile: false,
    showEmail: false,
    showLocation: true,
    twoFactorAuth: false,
    dataRetention: '1year',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('fbc_user_settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelectChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    localStorage.setItem('fbc_user_settings', JSON.stringify(settings));
    setMessage('Settings saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem('fbc_joined_chapter');
    localStorage.removeItem('fbc_user_profile');
    localStorage.removeItem('fbc_user_settings');
    navigate('/');
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
          <h1 className="text-4xl font-bold">Settings</h1>
        </div>
      </div>

      {/* Settings Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {message && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            {message}
          </div>
        )}

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b">
            <Bell size={24} className="text-fbc-gold" />
            <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
          </div>

          <div className="space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive important updates via email</p>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? 'bg-fbc-gold' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Event Reminders */}
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Event Reminders</p>
                <p className="text-sm text-gray-600">Get notified about upcoming events</p>
              </div>
              <button
                onClick={() => handleToggle('eventReminders')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.eventReminders ? 'bg-fbc-gold' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.eventReminders ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Chapter Updates */}
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Chapter Updates</p>
                <p className="text-sm text-gray-600">News and announcements from your chapter</p>
              </div>
              <button
                onClick={() => handleToggle('chapterUpdates')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.chapterUpdates ? 'bg-fbc-gold' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.chapterUpdates ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b">
            <Eye size={24} className="text-fbc-gold" />
            <h2 className="text-2xl font-bold text-gray-900">Privacy & Visibility</h2>
          </div>

          <div className="space-y-4">
            {/* Private Profile */}
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Private Profile</p>
                <p className="text-sm text-gray-600">Only show profile to members you follow</p>
              </div>
              <button
                onClick={() => handleToggle('privateProfile')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.privateProfile ? 'bg-fbc-gold' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.privateProfile ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Show Email */}
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Show Email in Directory</p>
                <p className="text-sm text-gray-600">Allow other members to see your email</p>
              </div>
              <button
                onClick={() => handleToggle('showEmail')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.showEmail ? 'bg-fbc-gold' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.showEmail ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Show Location */}
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Show Location in Directory</p>
                <p className="text-sm text-gray-600">Allow other members to see your location</p>
              </div>
              <button
                onClick={() => handleToggle('showLocation')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.showLocation ? 'bg-fbc-gold' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.showLocation ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b">
            <Lock size={24} className="text-fbc-gold" />
            <h2 className="text-2xl font-bold text-gray-900">Security</h2>
          </div>

          <div className="space-y-4">
            {/* Two-Factor Authentication */}
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
              </div>
              <button
                onClick={() => handleToggle('twoFactorAuth')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.twoFactorAuth ? 'bg-fbc-gold' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.twoFactorAuth ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Data Retention */}
            <div className="p-4 hover:bg-gray-50 rounded-lg">
              <label className="block font-medium text-gray-900 mb-2">
                Data Retention Period
              </label>
              <select
                value={settings.dataRetention}
                onChange={(e) => handleSelectChange('dataRetention', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fbc-gold focus:border-transparent outline-none"
              >
                <option value="6months">6 Months</option>
                <option value="1year">1 Year</option>
                <option value="2years">2 Years</option>
                <option value="5years">5 Years</option>
                <option value="permanent">Permanent</option>
              </select>
              <p className="text-sm text-gray-600 mt-2">How long we keep your data after account deletion</p>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b">
            <Mail size={24} className="text-fbc-gold" />
            <h2 className="text-2xl font-bold text-gray-900">Account</h2>
          </div>

          <div className="space-y-4">
            {/* Change Password */}
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg border border-gray-200 transition-all">
              <p className="font-medium text-gray-900">Change Password</p>
              <p className="text-sm text-gray-600">Update your password regularly for security</p>
            </button>

            {/* Download Data */}
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg border border-gray-200 transition-all">
              <p className="font-medium text-gray-900">Download My Data</p>
              <p className="text-sm text-gray-600">Get a copy of your personal data</p>
            </button>

            {/* Delete Account */}
            <button className="w-full text-left p-4 hover:bg-red-50 rounded-lg border border-red-200 transition-all">
              <p className="font-medium text-red-600">Delete Account</p>
              <p className="text-sm text-red-500">Permanently delete your account and all associated data</p>
            </button>
          </div>
        </div>

        {/* Save & Logout Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSaveSettings}
            className="flex-1 bg-fbc-gold text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-all"
          >
            Save Settings
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-all"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
