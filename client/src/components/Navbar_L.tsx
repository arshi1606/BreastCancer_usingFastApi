"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApolloClient, gql, useLazyQuery } from "@apollo/client";
import Cookies from "js-cookie";

const GET_USER = gql`
  query {
    getUser {
      id
      name
    }
  }
`;

const Navbar: React.FC = () => {
  const router = useRouter();
  const client = useApolloClient();

  // Initialize isLoggedIn based on the token stored in cookies
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!Cookies.get("token"));

  // useLazyQuery gives us a function to trigger the query manually
  const [loadUser, { data, loading, error }] = useLazyQuery(GET_USER, {
    fetchPolicy: "network-only",
    onError: (err) => console.error("GET_USER error:", err),
  });

  // On mount, check if token exists and trigger the query
  useEffect(() => {
    const token = Cookies.get("token");
    const loggedIn = !!token;
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      loadUser();
    }
  }, [loadUser]);

  const handleLogout = () => {
    Cookies.remove("token");
    client.clearStore();
    router.push("/");
    setIsLoggedIn(false);
  };

  const userName = data && data.getUser ? data.getUser.name : "";

  return (
    <nav className="flex items-center py-4 px-10 bg-white/95 shadow-sm sticky top-0 z-50">
      {/* Left Section: Logo */}
      <div className="flex-1">
        <img src="/static/assets/img/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="flex-1">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/doctors">Doctors</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </div>

      {/* Right Section: Authentication or User Info */}
      <div className="flex-1 flex justify-end items-center space-x-4">
        {isLoggedIn ? (
          <>
            {loading ? (
              <span className="text-gray-700 font-semibold">Loading...</span>
            ) : error ? (
              <span className="text-red-600">Error loading user</span>
            ) : (
              <span className="text-gray-700 font-semibold">
                Hello, {userName}!
              </span>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/auth/signin"
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
