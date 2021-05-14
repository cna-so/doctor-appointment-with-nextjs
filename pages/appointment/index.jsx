import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { SERVER_URL } from "@/config/index";
import { parseCookie } from "helpers";

import Layout from "@/components/Layout";
import AppointmentItem from "@/components/AppointmentItem";

export default function Appointment({ appointment, token }) {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const deleteAppointmentHandler = async (id) => {
    if (confirm("از حذف این درخواست مطمعن هستید ؟")) {
      const res = await fetch(`${SERVER_URL}/appointments/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        console.log(error);
      } else {
        router.reload();
      }
    }
  };
  return (
    <>
      <Layout>
        <div className="container">
          <Link href="/appointment/send">
            <a className="btn btn-success text-light ">گرفتن نوبت</a>
          </Link>
          {appointment.length > 0 ? (
            <>
              {appointment.map((app) => (
                <AppointmentItem
                  key={app.id}
                  name={app.name}
                  lastname={app.lastname}
                  pNumber={app.phoneNumber}
                  deleteAppointmentHandler={() =>
                    deleteAppointmentHandler(app.id)
                  }
                />
              ))}
            </>
          ) : (
            <div className="py-5 ">
              <h1 className="text-center">موردی برای نمایش وجود ندارد </h1>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  const { token } = parseCookie(req);
  if (token) {
    const res = await fetch(`${SERVER_URL}/appointments/app`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const appointment = await res.json();
    return {
      props: { appointment, token },
    };
  } else {
    return {
      props: {},
    };
  }
};
