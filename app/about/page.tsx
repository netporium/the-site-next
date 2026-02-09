import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBackground from "../components/PageBackground";

export default function About() {
  return (
    <>
      <PageBackground variant="about" />
      <Navbar />
      <div>
        <div className="container">
          <div className="content">
            <div className="hero-section" style={{ height: "200px" }}>
              <div className="jumbotron" />
            </div>
            <div
              className="boxes shadow-lg bg-body rounded"
              style={{
                minHeight: "800px",
                padding: "100px",
                fontSize: "2rem",
              }}
            >
              <h1>About Us</h1>
              <br />
              <p>
                At Netporium, we specialize in helping brands and manufacturers
                expand their reach through strategic online retail solutions. Our
                expertise lies in connecting businesses with new markets,
                optimizing product visibility, and managing seamless eCommerce
                operations.
              </p>
              <br />
              <p>
                With a focus on wholesale partnerships, we provide end-to-end
                solutions—from product sourcing and listing optimization to
                inventory management and sales growth. Our team understands the
                complexities of online retail and works closely with our partners
                to ensure their products reach the right audience, on the right
                platforms.
              </p>
              <br />
              <p>
                We believe in data-driven strategies, transparency, and long-term
                partnerships. Whether you&apos;re a manufacturer looking to scale
                your online presence or a brand seeking an experienced eCommerce
                partner, we&apos;re here to drive results.
              </p>
              <br />
              <h3>Why Choose Us?</h3>
              <ul style={{ listStyleType: "none" }}>
                <li>&#10004; Industry Expertise – Years of experience in online retail and marketplace management.</li>
                <li>&#10004; Growth-Focused Strategies – Tailored solutions to maximize product visibility and sales.</li>
                <li>&#10004; Reliable & Transparent – A partnership built on trust, integrity, and measurable results.</li>
              </ul>
              Let&apos;s take your business to the next level. Partner with us today!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
