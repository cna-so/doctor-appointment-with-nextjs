import { useEffect, useContext } from "react";
import Image from "next/image";
import { BiPhone } from "react-icons/bi";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/components/Layout";
import ItemBox from "@/components/ItemBox";
import AuthContext from "@/context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user === null) {
      toast.info("برای دسترسی بە همە امکانات وارد شوید");
    }
  });

  return (
    <>
      <ToastContainer position="top-left" />
      <Layout>
        <div className="header d-flex  align-items-center row">
          <div className="">
            <div className="header-img "></div>
            <div className="header-content">
              <h1 className="py-3">دکتر مهناز احمدیان</h1>
              <h4 className="pt-2 pb-2">متخصص تغذیە و رژیم درمانی</h4>
              <div className="header-call d-flex justify-content-center align-items-center">
                <BiPhone size={45} className="p-2" />
                <h3>021 444 4444</h3>
              </div>
            </div>
          </div>
          <div className="our-services">
            <h3>ما چە خدماتی ارائە میکنیم ؟</h3>
            <div className="row ">
              <ItemBox
                title="گروە های تخصصی"
                description="عضویت در گروه های تخصصی و انتقال تجربه افراد موفق برای تاثیر گذاری بیشتر در انگیزه و رسیدن به هدف"
              />
              <ItemBox
                title="پزشک و مربی اختصآصی"
                description="دریافت ساده ترین و کاربردی ترین برنامه غذایی و ورزشی اختصاصی متناسب با سبک زندگی شما و پیگیری و پشتیبانی لحظه ای برای رسیدن به موفقیت"
              />
              <ItemBox
                title="جعبە ابزار سلامت"
                description="گزارشی از وضعیت قبل و بعد سلامتی و یادآور های شخصی سازی شده و آموزش های اختصاصی"
              />
            </div>
          </div>
          <div className="meet-us row">
            <div className="content col-12 col-md-6 d-flex flex-column justify-content-center">
              <h2>دربارە دکتر مهناز احمدیان, دکتر تغذیە و رژیم درمانی</h2>
              <h4>
                دکتر احمدیان یکی از اولین و بهترین دکتر های تغذیە و رژیم درمانی
              </h4>
              <p>
                یکی از بهترین دکتر ها برای رژیم درمانی و کاهش و افزایش وزن.او با
                استفادە از متد های روز دنیا و کمترین استفادە از دارو و بجای ان
                استفادە از ورزش رژیم و خواب درست شمارا بە سوی اندام ایدە التان
                پرتاب میکند
              </p>
            </div>
            <div className="meet-img col-12 col-md-6">
              <Image src="/images/dc2.png" width={500} height={500} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
