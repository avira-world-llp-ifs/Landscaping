"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loggedIn") === "true") {
      setIsLoggedIn(true);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return isLoggedIn ? <h1>Welcome to Dashboard</h1> : <p>Loading...</p>;
}
