import {
  CheckCircle2,
  Clock3,
  CreditCard,
  MapPin,
  Package,
  PackageCheck,
  Truck,
} from "lucide-react";

import "./OrderJourney.css";

function OrderJourney() {
  const steps = [
    {
      number: "01",
      icon: CreditCard,
      title: "Order Placed",
      description: "Buyer selects a product and places the order securely.",
    },
    {
      number: "02",
      icon: CheckCircle2,
      title: "Vendor Confirms",
      description: "Vendor receives the order and confirms availability.",
    },
    {
      number: "03",
      icon: Package,
      title: "Packed",
      description: "The product is prepared and packed for shipment.",
    },
    {
      number: "04",
      icon: Truck,
      title: "Shipped",
      description: "The order is handed over for delivery to the buyer.",
    },
    {
      number: "05",
      icon: MapPin,
      title: "In Transit",
      description: "Buyer can follow the order while it is on the way.",
    },
    {
      number: "06",
      icon: PackageCheck,
      title: "Delivered",
      description: "The product reaches the buyer and the order is completed.",
    },
  ];

  return (
    <section className="order-section">
      <div className="order-container">

        {/* Heading */}
        <div className="order-heading">
          <span className="order-label">ORDER JOURNEY</span>

          <h2>
            From Order to
            <span> Delivery</span>
          </h2>

          <p>
            Keep buyers and vendors informed with a clear and transparent
            journey from the moment an order is placed until delivery.
          </p>
        </div>

        {/* Journey */}
        <div className="order-journey">

          <div className="order-progress-line">
            <div className="order-progress-fill"></div>
          </div>

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="order-step" key={step.number}>

                <div className="order-step-top">
                  <div className="order-step-icon">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  <span className="order-step-number">
                    {step.number}
                  </span>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            );
          })}
        </div>

        {/* Tracking Preview */}
        <div className="tracking-preview">

          <div className="tracking-left">

            <div className="tracking-icon">
              <Clock3 size={22} />
            </div>

            <div>
              <span className="tracking-label">
                ORDER TRACKING
              </span>

              <h3>
                Always know where your order is
              </h3>

              <p>
                Buyers can view order status and delivery progress
                through a simple tracking experience.
              </p>
            </div>

          </div>

          <div className="tracking-status">

            <div className="status-item status-complete">
              <div className="status-dot">
                <CheckCircle2 size={14} />
              </div>
              <span>Confirmed</span>
            </div>

            <div className="status-line"></div>

            <div className="status-item status-complete">
              <div className="status-dot">
                <CheckCircle2 size={14} />
              </div>
              <span>Packed</span>
            </div>

            <div className="status-line"></div>

            <div className="status-item status-active">
              <div className="status-dot">
                <Truck size={14} />
              </div>
              <span>Shipped</span>
            </div>

            <div className="status-line"></div>

            <div className="status-item">
              <div className="status-dot">
                <PackageCheck size={14} />
              </div>
              <span>Delivered</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OrderJourney;