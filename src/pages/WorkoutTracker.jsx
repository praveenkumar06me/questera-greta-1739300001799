import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

function WorkoutTracker() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const workout = location.state?.workout;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, isAuthenticated, navigate]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-6">
            {workout ? workout.title : 'Workout'} Session
          </h1>

          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-4">{formatTime(time)}</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTimer}
              className={`px-8 py-3 rounded-lg font-semibold ${
                isActive ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
              }`}
            >
              {isActive ? 'Pause' : 'Start'}
            </motion.button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Workout Details</h2>
            {workout ? (
              <div className="space-y-2">
                <p><strong>Duration:</strong> {workout.duration}</p>
                <p><strong>Level:</strong> {workout.level}</p>
              </div>
            ) : (
              <p>Custom workout session</p>
            )}
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigate('/workouts')}
              className="text-blue-600 hover:underline"
            >
              ← Back to Workouts
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WorkoutTracker;