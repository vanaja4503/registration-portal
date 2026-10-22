import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-3xl font-bold text-green-600">
          Login Successful!
        </h1>

        <p className="mb-2 text-gray-700">
          Welcome to your dashboard.
        </p>

        <p className="mb-6 text-gray-500">
          Logged in as: {email}
        </p>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Logout
        </button>

        <p className="mt-5">
          <Link to="/" className="text-blue-600 hover:underline">
            Registration Page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;