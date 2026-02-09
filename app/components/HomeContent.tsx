import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="content">
      <div className="hero-section">
        <div className="jumbotron">
          <h1>Seamless Ecommerce Solutions for Your Brand&apos;s Growth</h1>
          <p>
            We help brands expand their online presence through optimized
            marketplace strategies, ensuring your products reach the right
            audience.
          </p>
          <Link href="/services" className="btn btn-danger">
            Learn more
          </Link>
        </div>
      </div>

      <div className="boxes">
        <div className="d-block d-lg-flex boxes-row flex-row">
          <div className="box flex-grow-0 flex-md-grow-1">
            <div className="box-content-under">
              <ul className="content-list">
                <li>⭕ Product listing and optimization</li>
                <li>⭕ Pricing strategy and monitoring</li>
                <li>⭕ Performance tracking and analytics</li>
              </ul>
            </div>
            <div className="box-content one">
              <div>
                <h2>Marketplace Management</h2>
              </div>
            </div>
          </div>
          <div className="box flex-grow-0 flex-md-grow-1">
            <div className="box-content-under two">
              <ul className="content-list">
                <li>⭕ Bulk order fulfillment</li>
                <li>⭕ Brand protection and pricing control</li>
                <li>⭕ Strategic partnerships to enhance sales</li>
              </ul>
            </div>
            <div className="box-content two">
              <h2>Wholesale Distribution</h2>
            </div>
          </div>
        </div>
        <div className="d-block d-lg-flex boxes-row flex-row">
          <div className="box">
            <div className="box-content-under">
              <ul className="content-list">
                <li>⭕ Inventory forecasting and demand planning</li>
                <li>⭕ Warehousing and fulfillment solutions</li>
                <li>⭕ Returns management and customer support</li>
              </ul>
            </div>
            <div className="box-content three">
              <h2>Logistics & Fulfillment Support</h2>
            </div>
          </div>
          <div className="box">
            <div className="box-content-under">
              <ul className="content-list">
                <li>⭕ SEO-optimized product content</li>
                <li>⭕ Advertising and promotional strategies</li>
                <li>⭕ Competitor and market analysis</li>
              </ul>
            </div>
            <div className="box-content four">
              <h2>Brand Growth & Marketing Support</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
