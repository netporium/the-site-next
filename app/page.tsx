import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageBackground from "./components/PageBackground";
import HomeContent from "./components/HomeContent";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <PageBackground variant="home" />
      <Navbar />
      <div>
        <div className="container">
          <HomeContent />
          <div className="contact-section shadow bg-body rounded" style={{ padding: "40px", marginBottom: "100px" }}>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
