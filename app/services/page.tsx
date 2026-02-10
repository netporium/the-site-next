import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBackground from "../components/PageBackground";

export default function Services() {
  return (
    <>
      <PageBackground variant="services" />
      <Navbar />
      <div className="page-services">
        <div className="container">
          <div className="content">
            <div className="hero-section" style={{ height: "200px" }}>
              <div className="jumbotron" />
            </div>

            <div className="boxes shadow-lg bg-body rounded" style={{ padding: "100px", fontSize: "2rem" }}>
              <h1>Unlock Your eCommerce Potential</h1>
              <br />
              <p>
                We do more than just sell products—we build brands, forge
                partnerships, and create seamless shopping experiences. Whether
                you&apos;re a manufacturer looking to expand or a brand ready to
                dominate online retail, we&apos;ve got you covered.
              </p>
              <p>
                We take care of the heavy lifting, so you can focus on what you
                do best—creating amazing products.
              </p>
              <br />
            </div>
            <br />

            <div className="boxes services-sections shadow-lg bg-body rounded" style={{ padding: "100px", fontSize: "2rem" }}>
              <div className="boxes-row mb-5 w-100 justify-content-center flex-1 d-flex">
                <h1>What We Do Best</h1>
              </div>
              <div className="boxes-row flex-column flex-md-row d-flex">
                <div className="box title-box" style={{ padding: "20px", textAlign: "center" }}>
                  <h1>🚀 Wholesale & Distribution Partnerships</h1>
                </div>
                <div className="box">
                  <p>
                    Think of us as your gateway to new markets. We help brands and
                    manufacturers secure exclusive wholesale deals, ensuring their
                    products land in front of the right buyers at the right time.
                  </p>
                  <li>Strategic partnerships that maximize your revenue</li>
                  <li>Seamless logistics to keep inventory moving</li>
                  <li>Smart pricing & demand forecasting</li>
                </div>
              </div>
              <div className="boxes-row flex-column flex-md-row-reverse d-flex">
                <div className="box title-box" style={{ padding: "20px", textAlign: "center" }}>
                  <h1>📦 Product Listing & Optimization</h1>
                </div>
                <div className="box">
                  <p>
                    Your product might be incredible, but if it&apos;s not
                    optimized, it&apos;s invisible. We craft listings that sell
                    by combining strategy and creativity.
                  </p>
                  <ul className="services-list" style={{ listStyleType: "none" }}>
                    <li>🎯 Keyword-driven content that gets your products noticed</li>
                    <li>📸 High-converting visuals that tell your brand story</li>
                    <li>📈 SEO-optimized listings for maximum visibility</li>
                  </ul>
                </div>
              </div>
              <div className="boxes-row flex-column flex-md-row d-flex">
                <div className="box title-box" style={{ padding: "20px", textAlign: "center" }}>
                  <h1>📊 Inventory & Order Management</h1>
                </div>
                <div className="box">
                  Stockouts? Overstock? Lost shipments? Not on our watch. We
                  streamline your supply chain, making sure everything runs like
                  a well-oiled machine.
                  <ul className="services-list" style={{ listStyleType: "none" }}>
                    <li>✔ Real-time inventory tracking to prevent stock issues</li>
                    <li>✔ Automated order processing for efficiency</li>
                    <li>✔ Data-driven restocking strategies</li>
                  </ul>
                </div>
              </div>
              <div className="boxes-row flex-column flex-md-row-reverse d-flex">
                <div className="box title-box" style={{ padding: "20px", textAlign: "center" }}>
                  <h1>🎯 Brand Growth & Marketing Strategy</h1>
                </div>
                <div className="box">
                  A great product deserves a great audience. We use insights,
                  analytics, and creative campaigns to get your brand the
                  recognition it deserves.
                  <ul className="services-list" style={{ listStyleType: "none" }}>
                    <li>🔥 Competitor research to stay ahead of the game</li>
                    <li>📢 Marketing strategies that boost conversions</li>
                    <li>💡 Sales analytics & pricing intelligence</li>
                  </ul>
                </div>
              </div>
              <div className="boxes-row flex-column flex-md-row d-flex">
                <div className="box title-box" style={{ padding: "20px", textAlign: "center" }}>
                  <h1>💬 Customer Support & Compliance</h1>
                </div>
                <div className="box">
                  Your customers expect a smooth experience—we make sure they get
                  it. We manage feedback, resolve issues, and ensure compliance
                  with online marketplace policies.
                  <ul className="services-list" style={{ listStyleType: "none" }}>
                    <li>✅ Customer service support to maintain brand trust</li>
                    <li>✅ Returns & dispute resolution</li>
                    <li>✅ Platform compliance & risk management</li>
                  </ul>
                </div>
              </div>
            </div>

            <br />
            <div className="boxes shadow-lg bg-body rounded" style={{ padding: "100px" }}>
              <p>Let&apos;s Build Something Big Together</p>
              <p>
                Your journey to eCommerce success starts here. Whether
                you&apos;re scaling up or starting fresh, we&apos;re ready to
                help you grow.
              </p>
              <p>💡 Let&apos;s talk—contact us today and let&apos;s make it happen! 🚀</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
