import {
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Share2,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Footer Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">

            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Globe2 size={19} />
              </div>

              <span>
                Global<span>Mart</span>
              </span>
            </div>

            <p>
              Connecting local businesses, vendors, resellers,
              and buyers through one trusted marketplace.
            </p>

            <div className="footer-socials">

              <a href="#" aria-label="GlobalMart">
                <Globe2 size={16} />
              </a>

              <a href="#" aria-label="Contact">
                <Mail size={16} />
              </a>

              <a href="#" aria-label="Community">
                <MessageCircle size={16} />
              </a>

              <a href="#" aria-label="Share">
                <Share2 size={16} />
              </a>

            </div>

          </div>

          {/* Marketplace */}
          <div className="footer-column">
            <h3>Marketplace</h3>

            <a href="#explore">Explore Products</a>
            <a href="#explore">Categories</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#business">Become a Vendor</a>
          </div>

          {/* Business */}
          <div className="footer-column">
            <h3>Business</h3>

            <a href="#business">For Vendors</a>
            <a href="#business">For Resellers</a>
            <a href="#business">For Buyers</a>
            <a href="#business">Admin</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>

            <a href="#about">About GlobalMart</a>
            <a href="#about">Our Platform</a>
            <a href="#about">Security</a>
            <a href="#footer">Contact Us</a>
          </div>

          {/* Support */}
          <div className="footer-column footer-contact">
            <h3>Support</h3>

            <div>
              <Mail size={15} />
              <span>support@globalmart.com</span>
            </div>

            <div>
              <MapPin size={15} />
              <span>India</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <span>
            © 2026 GlobalMart. All rights reserved.
          </span>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;