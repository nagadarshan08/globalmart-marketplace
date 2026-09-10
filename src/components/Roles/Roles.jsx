import {
  Store,
  ShoppingCart,
  RefreshCw,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./Roles.css";

function Roles() {
  const roles = [
    {
      icon: Store,
      number: "01",
      title: "Vendor",
      subtitle: "Sell & Grow",
      description:
        "Reach more customers by listing products and managing your business through GlobalMart.",
      features: [
        "List Products",
        "Manage Inventory",
        "Manage Orders",
      ],
    },
    {
      icon: ShoppingCart,
      number: "02",
      title: "Buyer",
      subtitle: "Discover & Buy",
      description:
        "Discover products from trusted vendors, compare options, place orders, and track deliveries.",
      features: [
        "Explore Products",
        "Place Orders",
        "Track Delivery",
      ],
    },
    {
      icon: RefreshCw,
      number: "03",
      title: "Reseller",
      subtitle: "Source & Resell",
      description:
        "Source products from vendors and create new business opportunities by reselling them to customers.",
      features: [
        "Source Products",
        "Resell Products",
        "Grow Business",
      ],
    },
    {
      icon: Settings,
      number: "04",
      title: "Admin",
      subtitle: "Manage & Protect",
      description:
        "Maintain a healthy marketplace by managing users, vendors, products, and platform activity.",
      features: [
        "Manage Users",
        "Verify Vendors",
        "Monitor Platform",
      ],
    },
  ];

  return (
    <section className="roles-section" id="business">

      <div className="roles-container">

        {/* HEADING */}

        <div className="roles-heading">

          <div>
            <span className="roles-label">
              ONE PLATFORM, MULTIPLE ROLES
            </span>

            <h2>
              Built for Every
              <span> Marketplace User</span>
            </h2>
          </div>

          <p>
            Every participant gets a focused experience designed
            around their needs — from selling and buying to managing
            the entire marketplace.
          </p>

        </div>


        {/* ROLE GRID */}

        <div className="roles-grid">

          {roles.map((role) => {

            const Icon = role.icon;

            return (
              <article
                className="role-card"
                key={role.title}
              >

                {/* CARD TOP */}

                <div className="role-card-top">

                  <div className="role-icon">
                    <Icon size={23} />
                  </div>

                  <span className="role-number">
                    {role.number}
                  </span>

                </div>


                {/* TITLE */}

                <div className="role-title">

                  <h3>
                    {role.title}
                  </h3>

                  <span>
                    {role.subtitle}
                  </span>

                </div>


                {/* DESCRIPTION */}

                <p className="role-description">
                  {role.description}
                </p>


                {/* FEATURES */}

                <div className="role-features">

                  {role.features.map((feature) => (

                    <div
                      className="role-feature"
                      key={feature}
                    >
                      <CheckCircle2 size={14} />

                      <span>
                        {feature}
                      </span>
                    </div>

                  ))}

                </div>


                {/* LINK */}

                <button className="role-link">

                  Learn More

                  <ArrowRight size={15} />

                </button>

              </article>
            );
          })}

        </div>


        {/* BOTTOM MESSAGE */}

        <div className="roles-bottom">

          <div className="roles-bottom-icon">
            <GlobeIcon />
          </div>

          <div className="roles-bottom-text">
            <strong>
              One marketplace. Multiple opportunities.
            </strong>

            <span>
              GlobalMart connects every participant through one
              connected commerce ecosystem.
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}


/* Small reusable icon */

function GlobeIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
}

export default Roles;