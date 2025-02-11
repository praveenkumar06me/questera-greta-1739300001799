import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <a
                  href="mailto:support@fitlife.com"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <FaEnvelope className="mr-3 text-xl" />
                  support@fitlife.com
                </a>
                <a
                  href="https://instagram.com/fitlife_wellness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <FaInstagram className="mr-3 text-xl" />
                  @fitlife_wellness
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full p-3 border rounded-lg"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;