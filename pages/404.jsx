import Layout from "@/components/Layout";
import Link from "next/link";
import {FaExclamationTriangle} from 'react-icons/fa'

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className="d-flex flex-column align-items-center justify-content-center py-5" >
        <h1><FaExclamationTriangle/> 404</h1>
        <h4>صفحە مورد نظر پیدا نشد.</h4>
        <Link href="/">بازگشت بە صفحە اصلی</Link>
      </div>
    </Layout>
  );
}
