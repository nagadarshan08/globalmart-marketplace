import {
  ShieldCheck,
  LockKeyhole,
  PackageSearch,
  Globe2,
  CheckCircle2,
} from "lucide-react";

import "./TrustSection.css";

function TrustSection() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      number: "01",
      title: "Verified Vendors",
      description:
        "Connect with trusted businesses through a marketplace designed around vendor verification and credibility.",
    },
    {
      icon: LockKeyhole,
      number: "02",
      title: "Secure Commerce",
      description:
        "Create a safer buying and selling experience with secure transactions and protection throughout the journey.",
    },
    {
      icon: PackageSearch,
      number: "03",
      title: "Order Visibility",
      description:
        "Keep users informed with clear order status, tracking information, and delivery updates.",
    },
    {
      icon: Globe2,
      number: "04",
      title: "Global Opportunities",
      description:
        "Help local businesses discover new customers and expand their products into wider markets.",
    },
  ];

  return (
    <section className="trust-section" id="about">
      <div className="trust-container">

        {/* LEFT SIDE */}
        <div className="trust-intro">

          <span className="trust-label">
            WHY GLOBALMART
          </span>

          <h2>
            A Marketplace
            <span> Built on Trust</span>
          </h2>

          <p className="trust-intro-text">
            GlobalMart is designed to make online commerce more reliable,
            transparent, and accessible for vendors, buyers, and resellers.
          </p>

          {/* Trust visual */}
          <div className="trust-highlight">

            <div className="trust-highlight-icon">
              <ShieldCheck size={25} />
            </div>

            <div className="trust-highlight-content">
              <strong>Trust at Every Step</strong>

              <span>
                From vendor verification to order delivery
              </span>
            </div>

            <CheckCircle2
              size={21}
              className="trust-check"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="trust-points">

          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                className="trust-point"
                key={point.number}
              >

                <div className="trust-point-top">

                  <div className="trust-point-icon">
                    <Icon size={22} />
                  </div>

                  <span className="trust-point-number">
                    {point.number}
                  </span>

                </div>

                <h3>{point.title}</h3>

                <p>{point.description}</p>

                <div className="trust-point-line"></div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default TrustSection;