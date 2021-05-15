import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { FRONT_URL, SERVER_URL } from "@/config/index";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const register = async (user) => {
    try {
      const res = await fetch(`${FRONT_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(res)
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        router.push('/auth/dashboard')
      } else {
        setError(null);
        setError(err.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const login = async ({ email: identifier, password }) => {
    try {
      const res = await fetch(`${FRONT_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        router.push("/auth/dashboard");
      } else {
        setError(null);
        setError(data.message);
      }
    } catch (err) {
      // console.log(err);
    }
  };
  const logout = async () => {
    const res = await fetch(`${FRONT_URL}/api/logout`, {
      method: "POST",
    });
    if (res.ok) {
      setUser(null);
      router.push("/");
    }
  };
  const checkUserLogged = async (user) => {
    const res = await fetch(`${FRONT_URL}/api/user`);
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, error, checkUserLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
