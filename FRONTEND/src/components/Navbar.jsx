import { Link, useRouter } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authRoute } from '../routing/auth.route.js';
import { logout } from '../store/slice/authSlice.js';

const Navbar = () => {
    const dispatch = useDispatch();
    const router = useRouter();

  const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
    dispatch(logout());
    router.navigate({ to: '/auth' });
    };

    return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         {/* Left - App Name */}
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
            URL Shortener
            </Link>

          {/* Right - Auth buttons */}
            <div>
            {user ? (
            <div className="flex items-center space-x-4">
                <span className="text-gray-700 text-sm">
                Welcome, <span className="font-medium">{user?.name || 'User'}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to={authRoute.to}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
