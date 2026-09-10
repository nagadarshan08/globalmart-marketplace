import {
  ArrowRight,
  Globe2,
  MapPin,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

import "./Growth.css";

function Growth() {
  const growthSteps = [
    {
      icon: Store,
      number: "01",
      title: "Local Business",
      description: "A vendor starts by showcasing products on GlobalMart.",
    },
    {
      icon: MapPin,
      number: "02",
      title: "Wider Reach",
      description: "Products become discoverable beyond the vendor's local area.",
    },
    {
      icon: Users,
      number: "03",
      title: "More Customers",
      description: "Vendors can connect with a larger and more diverse customer base.",
    },
    {
      icon: Globe2,
      number: "04",
      title: "Global Opportunities",
      description: "Businesses can explore opportunities across wider markets.",
    },
  ];

  return (
    <section className="growth-section">
      <div className="growth-container">

        {/* Heading */}
        <div className="growth-heading">
          <span className="growth-label">GROWTH & OPPORTUNITIES</span>

          <h2>
            From Local Reach
            <span> to Global Opportunity</span>
          </h2>

          <p>
            GlobalMart creates a path for local businesses to showcase
            their products, connect with more customers, and discover
            new marketplace opportunities.
          </p>
        </div>

        {/* Main Growth Visual */}
        <div className="growth-main">

          {/* Left Content */}
          <div className="growth-content">

            <div className="growth-content-icon">
              <TrendingUp size={25} />
            </div>

            <span className="growth-small-label">
              THE GLOBALMART GROWTH PATH
            </span>

            <h3>
              Start Local.
              <br />
              <span>Grow Without Borders.</span>
            </h3>

            <p>
              A simple marketplace experience can help businesses move
              from local visibility toward larger customer opportunities.
            </p>

            <div className="growth-highlight">
              <Globe2 size={18} />

              <div>
                <strong>One platform. More possibilities.</strong>
                <span>
                  Vendors can focus on their products while GlobalMart
                  connects them with marketplace participants.
                </span>
              </div>
            </div>

          </div>

          {/* Growth Journey */}
          <div className="growth-journey">

            <div className="growth-line"></div>

            {growthSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="growth-step" key={step.number}>

                  <div className="growth-step-number">
                    {step.number}
                  </div>

                  <div className="growth-step-icon">
                    <Icon size={21} />
                  </div>

                  <div className="growth-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  {index < growthSteps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="growth-step-arrow"
                    />
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom Message */}
        <div className="growth-bottom">

          <div className="growth-bottom-icon">
            <TrendingUp size={20} />
          </div>

          <div>
            <strong>Built for marketplace growth</strong>
            <span>
              Connecting businesses with customers and opportunities
              across markets.
            </span>
          </div>

          <div className="growth-bottom-badge">
            Local → Global
          </div>

        </div>

      </div>
    </section>
  );
}

export default Growth;