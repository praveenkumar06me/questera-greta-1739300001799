import { Link, useNavigate } from 'react-router-dom';
import { FaDumbbell, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaDumbbell className="text-2xl" />
            <span className="font-bold text-xl">FitLife</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/workouts" className="hover:text-gray-300">Workouts</Link>
            <Link to="/nutrition" className="hover:text-gray-300">Nutrition</Link>
            <Link to="/progress" className="hover:text-gray-300">Progress</Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="hover:text-gray-300">
                  <FaUser className="inline mr-1" />Profile
                </Link>
                <button onClick={handleLogout} className="hover:text-gray-300">
                  <FaSignOutAlt className="inline mr-1" />Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-gray-300">
                <FaSignInAlt className="inline mr-1" />Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;