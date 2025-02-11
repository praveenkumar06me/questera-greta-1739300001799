import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const workoutPlans = [
  {
    id: 1,
    title: "Beginner Full Body",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "45 min",
    level: "Beginner"
  },
  {
    id: 2,
    title: "HIIT Cardio",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "30 min",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Strength Training",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "60 min",
    level: "Advanced"
  }
];

function Workouts() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredWorkouts = selectedLevel === 'all'
    ? workoutPlans
    : workoutPlans.filter(workout => workout.level.toLowerCase() === selectedLevel);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Workout Plans</h1>
          <div className="flex space-x-4">
            {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-full ${
                  selectedLevel === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkouts.map((workout) => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={workout.image}
                alt={workout.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{workout.title}</h3>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>{workout.duration}</span>
                  <span>{workout.level}</span>
                </div>
                <button
                  onClick={() => navigate('/workout-tracker', { state: { workout } })}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Start Workout
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workouts;