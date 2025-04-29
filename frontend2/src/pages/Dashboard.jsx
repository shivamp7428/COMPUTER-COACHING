import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch logged-in user data
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/User/getuser", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Not logged in", err);
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    window.open("http://localhost:5000/api/v1/User/logout", "_self");
  };

  if (!user) {
    return (
      <div className="text-center mt-20 text-lg font-medium">
        Loading user...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-md p-8 rounded-xl text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName || user.Name}</h1>

      {user.photos ? (
        <img
          src={user.photos[0].value}
          alt="profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
      ) : (
        <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-4">
          👤
        </div>
      )}

      <p className="text-gray-600 mb-2">
        <strong>Email:</strong> {user.emails ? user.emails[0].value : user.Email}
      </p>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
