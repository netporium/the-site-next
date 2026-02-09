import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBackground from "../components/PageBackground";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageBackground variant="contact" />
      <Navbar />
      <div>
        <div className="container">
          <div className="content">
            <div className="hero-section" style={{ height: "200px" }}>
              <div className="jumbotron" />
            </div>
            <div className="boxes shadow-lg bg-body rounded d-flex flex-row">
              <div
                className="col-6 contact-image d-none d-md-block"
                style={{
                  backgroundImage: "url('/images/contact-graphic.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
              />
              <div className="col-12 col-md-6 contact-form" style={{ padding: "100px" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
