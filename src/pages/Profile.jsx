import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-8">Profile</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-gray-600">{user?.email || 'Not available'}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Membership Status</h2>
              <p className="text-gray-600">Active</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Workout History</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Total Workouts: 15</p>
                <p className="text-gray-600">This Month: 8</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Settings</h2>
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Edit Profile
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;