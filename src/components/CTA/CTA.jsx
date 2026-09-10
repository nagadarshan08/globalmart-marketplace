import {
  ArrowRight,
  Globe2,
  Store,
  CheckCircle2,
} from "lucide-react";

import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-glow cta-glow-one"></div>
        <div className="cta-glow cta-glow-two"></div>

        <div className="cta-content">

          <div className="cta-icon">
            <Globe2 size={28} />
          </div>

          <span className="cta-label">
            JOIN THE MARKETPLACE
          </span>

          <h2>
            Ready to Connect
            <span> With GlobalMart?</span>
          </h2>

          <p>
            Discover products, connect with trusted businesses,
            and create new opportunities through one connected marketplace.
          </p>

          <div className="cta-actions">

            <button className="cta-primary">
              Explore Marketplace
              <ArrowRight size={17} />
            </button>

            <button className="cta-secondary">
              <Store size={17} />
              Become a Vendor
            </button>

          </div>

          <div className="cta-trust">

            <div>
              <CheckCircle2 size={15} />
              Verified Vendors
            </div>

            <div>
              <CheckCircle2 size={15} />
              Secure Commerce
            </div>

            <div>
              <CheckCircle2 size={15} />
              Global Opportunities
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;