import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6">Welcome to FitLife</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Transform your life with personalized workouts, nutrition plans, and expert guidance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/workout-tracker')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Start Workout
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;