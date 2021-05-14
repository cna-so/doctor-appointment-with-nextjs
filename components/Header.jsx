import { useContext, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import AuthContext from "@/context/AuthContext";

export default function Header() {
  const { user, logout, checkUserLogged } = useContext(AuthContext);

  useEffect(() => checkUserLogged(), []);

  return (
    <header className="d-flex justify-content-between align-items-center flex-column flex-md-row ">
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/images/logo.png" width={50} height={50} />
          </a>
        </Link>
      </div>

      <nav className="header-nav" id="navbarToggleExternalContent">
        <ul className="flex-column-reverse flex-md-row">
          {user ? (
            <>
              <li>
                <button className="btn btn-danger" onClick={logout}>خارج شدن</button>
              </li>
              <li>
                <Link href="/auth/dashboard">
                  <a>درخواست ها</a>
                </Link>
              </li>
              <li>
                <Link href="/appointment">
                  <a>گرفتن نوبت</a>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/auth/login">
                <a>ورود/عضویت</a>
              </Link>
            </li>
          )}
          <li>
            <Link href="/">
              <a>صفحە اصلی</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
