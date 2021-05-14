import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="container-bg">
        <div className="container d-flex flex-column justify-space-between">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
Layout.defaultProps = {
  title: "Doctor Medical",
  description: "Doctor appointment for visit",
  keywords: "dc , doctor , booking",
};
