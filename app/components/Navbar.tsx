"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const active = (path: string) => pathname === path;

  return (
    <>
      <div className="nav-wrapper">
        <div className="container">
          <nav className="navbar netporium-navbar bg-body-tertiary">
            <div className="w-100 h-100">
              <ul className="nav justify-content-center h-100">
                <li className="nav-item-netporium home">
                  <Link
                    href="/"
                    className="navbar-brand navbar-brand-netporium mb-0 h1"
                    aria-current="page"
                  >
                    Netporium
                  </Link>
                </li>
                <li
                  className={`nav-item-netporium ${active("/about") ? "active" : ""}`}
                >
                  <Link
                    href="/about"
                    className="nav-link nav-link-netporium"
                    aria-current="page"
                  >
                    About Us
                  </Link>
                </li>
                <li
                  className={`nav-item-netporium ${active("/services") ? "active" : ""}`}
                >
                  <Link
                    href="/services"
                    className="nav-link nav-link-netporium"
                    aria-current="page"
                  >
                    Services
                  </Link>
                </li>
                <li
                  className={`nav-item-netporium ${active("/contact") ? "active" : ""}`}
                >
                  <Link
                    href="/contact"
                    className="nav-link nav-link-netporium"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="spacer" />
    </>
  );
}
