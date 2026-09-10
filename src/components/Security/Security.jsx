import {
  BadgeCheck,
  CreditCard,
  Eye,
  LockKeyhole,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import "./Security.css";

function Security() {
  const securityFeatures = [
    {
      icon: UserCheck,
      title: "Vendor Verification",
      description:
        "Verify vendor information before allowing businesses to actively participate in the marketplace.",
    },
    {
      icon: CreditCard,
      title: "Secure Transactions",
      description:
        "Protect the purchasing experience with secure payment and transaction handling.",
    },
    {
      icon: LockKeyhole,
      title: "Data Protection",
      description:
        "Keep user and marketplace information protected through appropriate access and security controls.",
    },
    {
      icon: Eye,
      title: "Activity Monitoring",
      description:
        "Monitor marketplace activity to identify unusual behaviour and potential risks.",
    },
  ];

  return (
    <section className="security-section">
      <div className="security-container">

        {/* Heading */}
        <div className="security-heading">
          <span className="security-label">SECURITY & TRUST</span>

          <h2>
            Commerce Built Around
            <span> Trust & Protection</span>
          </h2>

          <p>
            GlobalMart is designed with security and transparency in mind,
            helping create a safer experience for vendors, buyers,
            resellers, and administrators.
          </p>
        </div>

        {/* Main Security Panel */}
        <div className="security-main">

          {/* Left Visual */}
          <div className="security-visual">

            <div className="security-circle security-circle-one"></div>
            <div className="security-circle security-circle-two"></div>

            <div className="security-shield">
              <ShieldCheck size={55} strokeWidth={1.5} />
            </div>

            <div className="security-visual-text">
              <strong>Trusted Marketplace</strong>
              <span>Protection at every step</span>
            </div>

            {/* Floating Verification */}
            <div className="security-floating security-floating-one">
              <div className="security-floating-icon">
                <BadgeCheck size={17} />
              </div>

              <div>
                <span>Vendor Status</span>
                <strong>Verified</strong>
              </div>
            </div>

            {/* Floating Payment */}
            <div className="security-floating security-floating-two">
              <div className="security-floating-icon">
                <LockKeyhole size={17} />
              </div>

              <div>
                <span>Transaction</span>
                <strong>Protected</strong>
              </div>
            </div>

          </div>

          {/* Right Features */}
          <div className="security-features">

            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  className="security-feature"
                  key={feature.title}
                >
                  <div className="security-feature-number">
                    0{index + 1}
                  </div>

                  <div className="security-feature-icon">
                    <Icon size={21} />
                  </div>

                  <div className="security-feature-content">
                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Trust Strip */}
        <div className="security-trust-strip">

          <div className="security-trust-item">
            <ShieldCheck size={19} />
            <span>Security-focused platform</span>
          </div>

          <div className="security-trust-divider"></div>

          <div className="security-trust-item">
            <UserCheck size={19} />
            <span>Verified marketplace participants</span>
          </div>

          <div className="security-trust-divider"></div>

          <div className="security-trust-item">
            <Eye size={19} />
            <span>Continuous activity monitoring</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Security;