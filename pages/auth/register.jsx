import { useState, useContext, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthContext from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { emailRegex, passwordRegex } from "helpers";

export default function login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => toast.error(error));

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      toast.error("ایمیل شما اشتباه است");
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error("رمز عبور شما سادە است از حروف و اعداد استفادە کنید");
      return;
    }
    if (password !== repeatPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    register({ username, email, password });
  };

  return (
    <>
      <ToastContainer />
      <Layout title="register page">
        <div className="col-12 d-flex justify-content-center align-item-center my-5">
          <div className="login-container col-12 col-md-8">
            <div className="">
              <form
                onSubmit={registerSubmitHandler}
                className="d-flex flex-column"
              >
                <label htmlFor="username"> : نام کاربری </label>
                <input
                  type="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="email">: ایمیل شما </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">: رمز عبور </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="repeatPassword"> : تکرار رمز عبور</label>
                <input
                  type="password"
                  name="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />

                <div className="d-flex justify-content-center">
                  <input
                    className="text-center"
                    type="submit"
                    value="ثبت نام"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
