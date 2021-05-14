import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "@/components/Layout";
import RowCase from "@/components/RowCase";

import { SERVER_URL } from "@/config/index";
import { parseCookie } from "helpers";

export default function Dashboard({ requests, token }) {
  const router = useRouter();
  const deleteReqHandler = async (id) => {
    if (confirm("از حذف این درخواست مطمعن هستید ؟")) {
      const res = await fetch(`${SERVER_URL}/requests/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(error);
      } else {
        router.reload();
      }
    }
  };
  return (
    <Layout>
      <div className="container">
      <Link href="/auth/request">
            <a className="btn btn-success text-light ">درخواست مشاورە</a>
          </Link>
        {requests.length > 0 ? (
          <>
            {requests.map((req) => (
              <RowCase
                key={req.id}
                subject={req.subject}
                description={req.description}
                pNumber={req.number}
                deleteReqHandler={() => deleteReqHandler(req.id)}
              />
            ))}
          </>
        ) : (
          <div className="py-5">
            <h1>شما هیچ درخواست مشاورە ای ندارید. </h1>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ req }) => {
  const { token } = parseCookie(req);
  if (token) {
    const res = await fetch(`${SERVER_URL}/requests/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const requests = await res.json();
    return {
      props: { requests, token },
    };
  } else {
    return {
      props: {},
    };
  }
};
