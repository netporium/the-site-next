import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-100 footer-netporium">
      <div className="container footer-contents">
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row">
            <Link
              href="/"
              className="navbar-brand navbar-brand-netporium footer-nav-btn"
            >
              Netporium
            </Link>
            <Link href="/about" className="footer-nav-btn">
              About Us
            </Link>
            <Link href="/services" className="footer-nav-btn">
              Services
            </Link>
            <Link href="/contact" className="footer-nav-btn">
              Contact
            </Link>
          </div>
          <div className="d-flex flex-row">
            <span className="footer-nav-btn">
              <i className="fab fa-twitter" />
            </span>
            <span className="footer-nav-btn">
              <i className="fab fa-facebook" />
            </span>
            <span className="footer-nav-btn">
              <i className="fab fa-linkedin" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
