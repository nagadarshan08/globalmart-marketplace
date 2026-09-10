import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Store,
  Users,
  TrendingUp,
} from "lucide-react";

import "./Benefits.css";

function Benefits() {
  const benefits = [
    {
      icon: Globe2,
      title: "Wider Market Reach",
      description:
        "Help local businesses reach customers beyond their immediate location.",
    },
    {
      icon: Users,
      title: "Connected Marketplace",
      description:
        "Bring vendors, buyers, and resellers together on one platform.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description:
        "Create new opportunities for vendors and resellers to grow their business.",
    },
    {
      icon: Store,
      title: "Simple Selling",
      description:
        "Give businesses an easier way to showcase products and manage marketplace activity.",
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">

        {/* Heading */}
        <div className="benefits-heading">
          <span className="benefits-label">WHY GLOBALMART</span>

          <h2>
            More Reach.
            <span>More Opportunities.</span>
          </h2>

          <p>
            GlobalMart is designed to create value for every participant
            by connecting local businesses with a wider marketplace.
          </p>
        </div>

        {/* Main Content */}
        <div className="benefits-main">

          {/* Left Visual */}
          <div className="benefits-visual">

            <div className="benefits-glow"></div>

            <div className="benefits-visual-content">
              <div className="benefits-globe">
                <Globe2 size={42} strokeWidth={1.5} />
              </div>

              <span className="benefits-visual-label">
                GLOBAL COMMERCE
              </span>

              <h3>
                From Local
                <br />
                <span>to Global</span>
              </h3>

              <p>
                Connect products, businesses, and customers
                across markets through one marketplace.
              </p>
            </div>

            {/* Floating Cards */}

            <div className="benefit-floating-card benefit-floating-one">
              <div className="floating-icon">
                <Store size={17} />
              </div>

              <div>
                <span>For Vendors</span>
                <strong>Reach More Buyers</strong>
              </div>
            </div>

            <div className="benefit-floating-card benefit-floating-two">
              <div className="floating-icon">
                <Users size={17} />
              </div>

              <div>
                <span>For Buyers</span>
                <strong>More Choices</strong>
              </div>
            </div>

            <div className="benefit-floating-card benefit-floating-three">
              <div className="floating-icon">
                <TrendingUp size={17} />
              </div>

              <div>
                <span>For Resellers</span>
                <strong>New Opportunities</strong>
              </div>
            </div>

          </div>

          {/* Right Benefits */}
          <div className="benefits-list">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div className="benefit-item" key={benefit.title}>

                  <div className="benefit-number">
                    0{index + 1}
                  </div>

                  <div className="benefit-icon">
                    <Icon size={22} />
                  </div>

                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>

                    <p>{benefit.description}</p>

                    <div className="benefit-check">
                      <CheckCircle2 size={14} />
                      <span>Designed for marketplace growth</span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="benefit-arrow"
                  />

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Benefits;