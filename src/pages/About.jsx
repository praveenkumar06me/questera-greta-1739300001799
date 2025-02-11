import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-6">About FitLife</h1>
          
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Founder"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Story</h2>
              <p className="text-gray-600">
                Founded by Mike Thompson in 2020, FitLife emerged from a passion for helping people achieve their fitness goals through technology and personalized guidance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Meet Our Founder</h2>
              <p className="text-gray-600">
                Mike Thompson is a certified fitness trainer with over 15 years of experience in the fitness industry. His vision was to create a platform that makes fitness accessible to everyone, regardless of their experience level or location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-600">
                At FitLife, we're committed to transforming lives through innovative fitness solutions and creating a supportive community that motivates and inspires.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;