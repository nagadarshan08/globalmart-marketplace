import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Store,
  TrendingUp,
} from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-shape hero-bg-shape-one"></div>
      <div className="hero-bg-shape hero-bg-shape-two"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-icon">
              <Globe2 size={15} />
            </span>

            Connecting Local Businesses Globally
          </div>

          <h1>
            Connect Local Sellers
            <span> With Global Buyers</span>
          </h1>

          <p className="hero-description">
            GlobalMart brings vendors, resellers, and buyers together in one
            trusted marketplace — helping local products reach customers
            across markets.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero-actions">

            <button className="hero-primary-button">
              Explore Marketplace
              <ArrowRight size={17} />
            </button>

            <button className="hero-secondary-button">
              <Store size={17} />
              Become a Vendor
            </button>

          </div>

          {/* TRUST ITEMS */}
          <div className="hero-trust">

            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <ShieldCheck size={17} />
              </div>

              <div>
                <strong>Verified</strong>
                <span>Vendors</span>
              </div>
            </div>

            <div className="hero-trust-divider"></div>

            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <ShieldCheck size={17} />
              </div>

              <div>
                <strong>Secure</strong>
                <span>Commerce</span>
              </div>
            </div>

            <div className="hero-trust-divider"></div>

            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <Globe2 size={17} />
              </div>

              <div>
                <strong>Global</strong>
                <span>Reach</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="hero-image-frame">

            <img
              src="/images/hero-marketplace.jpg"
              alt="Global marketplace"
              className="hero-image"
            />

            <div className="hero-image-overlay"></div>

          </div>

          {/* GLOBAL MARKETPLACE CARD */}
          <div className="hero-marketplace-card">

            <div className="marketplace-card-icon">
              <Globe2 size={20} />
            </div>

            <div className="marketplace-card-content">
              <strong>Global Marketplace</strong>
              <span>Local products, global opportunities</span>
            </div>

            <div className="marketplace-status">
              <span></span>
            </div>

          </div>

          {/* GROWTH CARD */}
          <div className="hero-growth-card">

            <div className="growth-icon">
              <TrendingUp size={19} />
            </div>

            <div>
              <span>Market Reach</span>
              <strong>Global</strong>
            </div>

          </div>

          {/* DECORATIVE DOTS */}
          <div className="hero-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;