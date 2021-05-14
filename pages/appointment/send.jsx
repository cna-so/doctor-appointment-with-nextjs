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
    name: "",
    lastname: "",
    phoneNumber: "",
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
    const res = await fetch(`${SERVER_URL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    const data = await res.json()
    console.log(data)
    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("شما وارد نشدە اید");
        return;
      }
      toast.error("مشکلی پیش امدە دوبارە تلاش کنید");
    } else {
      router.push('/appointment')
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
            <label htmlFor="name">: نام </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={inputChangeHandler}
              className="col-12 col-lg-12 m-2"
            />
            <label htmlFor="lastname">: نام خانوادگی</label>
            <input
              type="text"
              name="lastname"
              value={values.lastname}
              onChange={inputChangeHandler}
              className="col-12 col-lg-12 m-2"
            />
            <label htmlFor="number">: شمارە موبایل </label>
            <input
              type="number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={inputChangeHandler}
              className="col-12 col-lg-12 m-2"
            />
            <div className="d-flex justify-content-center">
              <input
                type="submit"
                value="درخواست نوبت"
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
