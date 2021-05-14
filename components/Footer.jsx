import Link from "next/link";
import { BiPhone } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="f-container row">
      <div className="info col-12 col-md-6">
        <div className="f-top">
          <h2>
            <Link href="/register">
              <a>عضویت </a>
            </Link>
            برای درخواست مشاورە و نوبت دهی دکتر
          </h2>
          <p>
            فقط چند ساعت برای دادن مشاورە طول میکشد کە بە صورت رایگان میباشد
          </p>
        </div>
        <div className="f-bottom">
          <p>
            تهران، منطقه 3, محله احتشامیه، خیابان شهید کلاهدوز (خیابان دولت) بین
            چهارراه اختیاریه و دیباجی
          </p>
          <div className="header-call d-flex justify-content-center align-items-center">
            <BiPhone size={45} className="p-2" />
            <h3>021 444 4444</h3>
          </div>
          <p>شنبە تا چهارشنبە از ساعت 10:00 صبح تا 10:00 شب</p>
        </div>
      </div>
      <div className="call col-12 col-md-6">
        <h2 className="py-2">درخواست مشاورە</h2>
        <form className="d-flex flex-column px-md-5 ">
          <label htmlFor="name"> :اسم شما</label>
          <input type="text" name="name" placeholder="نام خود را وارد کنید" />
          <label htmlFor="number"> :شمارە شما</label>
          <input
            type="number"
            name="number"
            placeholder="شمارە خود را وارد کنید"
          />
          <label htmlFor="message"> :پیام شما</label>
          <textarea
            name="message"
            placeholder="پیام خود را وارد کنید"
          ></textarea>
          <div className="d-flex align-items-center justify-content-center">
            <input type="submit" value="ثبت درخواست" />
          </div>
        </form>
      </div>
    </div>
  );
}
