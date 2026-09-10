import {
  Store,
  ShoppingCart,
  RefreshCw,
  Settings,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import "./Roles.css";

const roles = [
  {
    number: "01",
    title: "Vendor",
    tag: "Sell & Grow",
    icon: Store,
    description:
      "Reach more customers by listing products and managing your business through GlobalMart.",
    features: [
      "List Products",
      "Manage Inventory",
      "Manage Orders",
    ],
  },
  {
    number: "02",
    title: "Buyer",
    tag: "Discover & Buy",
    icon: ShoppingCart,
    description:
      "Discover products from trusted vendors, compare options, place orders, and track deliveries.",
    features: [
      "Explore Products",
      "Place Orders",
      "Track Delivery",
    ],
  },
  {
    number: "03",
    title: "Reseller",
    tag: "Promote & Earn",
    icon: RefreshCw,
    description:
      "Promote eligible products, connect them with customers, and track your sales through the marketplace.",
    features: [
      "Find Products",
      "Promote Products",
      "Track Sales",
    ],
  },
  {
    number: "04",
    title: "Admin",
    tag: "Manage & Control",
    icon: Settings,
    description:
      "Manage vendors, listings, users, orders, and marketplace activities from one central platform.",
    features: [
      "Approve Vendors",
      "Moderate Listings",
      "Manage Platform",
    ],
  },
];

function Roles() {
  return (
    <section className="roles" id="roles">
      <div className="roles-container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="roles-header">

          <p className="roles-eyebrow">
            ONE PLATFORM, MULTIPLE ROLES
          </p>

          <h2 className="roles-title">
            Built for Every{" "}
            <span>Marketplace User</span>
          </h2>

          <p className="roles-description">
            Every participant gets a focused experience designed around
            their needs — from selling and buying to managing the entire
            marketplace.
          </p>

        </div>


        {/* =========================
            ROLE CARDS
        ========================== */}
        <div className="roles-grid">

          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                className="role-card"
                key={role.title}
              >

                {/* Card Number */}
                <span className="role-number">
                  {role.number}
                </span>


                {/* Icon */}
                <div className="role-icon">
                  <Icon
                    size={21}
                    strokeWidth={2}
                  />
                </div>


                {/* Title + Tag */}
                <h3 className="role-title">

                  {role.title}

                  <span className="role-tag">
                    {role.tag}
                  </span>

                </h3>


                {/* Description */}
                <p className="role-description">
                  {role.description}
                </p>


                {/* Features */}
                <div className="role-features">

                  {role.features.map((feature) => (
                    <span
                      className="role-feature"
                      key={feature}
                    >

                      <CheckCircle2
                        size={12}
                      />

                      {feature}

                    </span>
                  ))}

                </div>


                {/* Learn More */}
                <span className="role-learn-more">

                  Learn More

                  <ArrowUpRight
                    size={14}
                  />

                </span>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Roles;