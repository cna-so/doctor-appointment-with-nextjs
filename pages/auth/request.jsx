import { useState } from "react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/components/Layout";

import { parseCookie } from "helpers";
import { SERVER_URL } from "@/config/index";

export default function SendAppointment({ token }) {
  const router = useRouter();
  const [values, setValues] = useState({
    subject: "",
    description: "",
    number: "",
  });
  const SendAppointmentHandler = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("لطفا همە ی فرم ها را پر کنید");
      return;
    }
    const res = await fetch(`${SERVER_URL}/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("No token included");
        return;
      }
      toast.error("Something Went Wrong");
    } else {
      router.push("/auth/dashboard");
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <ToastContainer />
      <Layout>
        <div className="container send d-md-flex align-items-md-center justify-content-md-center">
          <form
            onSubmit={SendAppointmentHandler}
            className=" col-sm-12 col-lg-7 "
          >
            <label htmlFor="subject">:موضوع </label>
            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={inputChangeHandler}
              className="col-12 col-lg-12 m-2"
            />
            <label htmlFor="number">: شمارە تلفن</label>
            <input
              type="number"
              name="number"
              value={values.number}
              onChange={inputChangeHandler}
              className="col-12 col-lg-12 m-2"
            />
            <label htmlFor="number">: توضیحات</label>
            <textarea
              name="description"
              value={values.description}
              onChange={inputChangeHandler}
              className="col-12 col-lg-12 m-2"
            ></textarea>
            <div className="d-flex justify-content-center">
              <input
                type="submit"
                value="درخوست مشاورە"
                className="py-2 px-4 my-3 btn btn-success "
              />
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  const { token } = parseCookie(req);

  return {
    props: { token },
  };
};
