import { useState, useContext, useEffect } from "react";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthContext from "@/context/AuthContext";
import Layout from "@/components/Layout";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    
    if (email.length < 6 || password.length < 5) {
      toast.error("رمز عبور و یا ایمیل وارد نشدە است");
      return
    }
    login({ email, password });
  };
  return (
    <>
      <ToastContainer />
      <Layout title="Login page">
        <div className="col-12 d-flex justify-content-center align-item-center my-5">
          <div className="login-container col-12 col-md-8">
            <div className="">
              <form
                onSubmit={loginSubmitHandler}
                className="d-flex flex-column"
              >
                <label htmlFor="email">ایمیل شما :</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">رمز عبور :</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <h5>
                  هنوز حسابی ندارید ؟
                  <Link href="/auth/register">
                    <a> ساخت حساب کاربری</a>
                  </Link>
                </h5>
                <div className="d-flex justify-content-center">
                  <input className="text-center" type="submit" value="ورود" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
