import {
  Search,
  MessageCircle,
  ShoppingCart,
  MapPin,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description:
        "Browse products and discover trusted vendors from different markets.",
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Connect",
      description:
        "Compare products and connect with the right vendor for your needs.",
    },
    {
      number: "03",
      icon: ShoppingCart,
      title: "Order",
      description:
        "Place your order through a simple and secure purchasing process.",
    },
    {
      number: "04",
      icon: MapPin,
      title: "Track",
      description:
        "Follow your order status from confirmation through delivery.",
    },
    {
      number: "05",
      icon: PackageCheck,
      title: "Receive",
      description:
        "Receive your product and complete your marketplace journey.",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        {/* HEADING */}

        <div className="how-heading">
          <span className="how-label">
            HOW IT WORKS
          </span>

          <h2>
            From Discovery to
            <span> Delivery</span>
          </h2>

          <p>
            GlobalMart keeps the buying journey simple, transparent,
            and easy to follow from the first search to final delivery.
          </p>
        </div>


        {/* JOURNEY */}

        <div className="how-journey">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                className="how-step"
                key={step.number}
              >

                {/* CONNECTOR */}

                {index < steps.length - 1 && (
                  <div className="how-connector">
                    <ArrowRight size={15} />
                  </div>
                )}


                {/* ICON */}

                <div className="how-step-icon">
                  <Icon size={23} strokeWidth={2} />
                </div>


                {/* NUMBER */}

                <span className="how-step-number">
                  {step.number}
                </span>


                {/* CONTENT */}

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>


        {/* BOTTOM JOURNEY CARD */}

        <div className="how-summary">

          <div className="how-summary-left">

            <div className="how-summary-icon">
              <ShoppingCart size={21} />
            </div>

            <div>
              <strong>
                One simple marketplace journey
              </strong>

              <span>
                Discover → Connect → Order → Track → Receive
              </span>
            </div>

          </div>

          <div className="how-summary-badge">
            Simple & Transparent
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;