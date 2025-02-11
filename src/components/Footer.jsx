import { FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FitLife</h3>
            <p className="text-gray-300">
              Transforming lives through fitness and wellness.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:support@fitlife.com" className="flex items-center text-gray-300 hover:text-white">
                <FaEnvelope className="mr-2" /> support@fitlife.com
              </a>
              <a href="https://instagram.com/fitlife_wellness" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                <FaInstagram className="mr-2" /> @fitlife_wellness
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#/workouts" className="text-gray-300 hover:text-white">Workouts</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© 2024 FitLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;