import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Wellness Sessions</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Dashboard
        </Link>
        {token && (
          <>
            <Link to="/my-sessions" className="hover:underline">
              My Sessions
            </Link>
            <Link to="/editor" className="hover:underline">
              New Session
            </Link>
            <button
              onClick={handleLogout}
              className="ml-2 text-red-300 hover:underline"
            >
              Logout
            </button>
          </>
        )}
        {!token && (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
