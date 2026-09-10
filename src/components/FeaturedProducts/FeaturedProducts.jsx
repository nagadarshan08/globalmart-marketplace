import {
  ArrowRight,
  BadgeCheck,
  Heart,
  MapPin,
  Star,
} from "lucide-react";

import electronicsImage from "../../assets/images/electronics.jpg";
import localProductsImage from "../../assets/images/local-products.jpg";
import homeImage from "../../assets/images/home.jpg";
import industrialImage from "../../assets/images/industrial.jpg";

import "./FeaturedProducts.css";

function FeaturedProducts() {
  const products = [
    {
      image: electronicsImage,
      category: "Electronics",
      name: "Smart Electronics Collection",
      vendor: "TechWorld",
      location: "Bengaluru, India",
      price: "₹24,999",
      rating: "4.8",
      reviews: "124",
    },
    {
      image: localProductsImage,
      category: "Local Products",
      name: "Handcrafted Local Products",
      vendor: "CraftHub",
      location: "Davangere, India",
      price: "₹1,299",
      rating: "4.9",
      reviews: "86",
    },
    {
      image: homeImage,
      category: "Home & Living",
      name: "Modern Home Collection",
      vendor: "HomeCraft",
      location: "Mysuru, India",
      price: "₹4,899",
      rating: "4.7",
      reviews: "93",
    },
    {
      image: industrialImage,
      category: "Industrial",
      name: "Professional Power Tool Kit",
      vendor: "ProTools",
      location: "Bengaluru, India",
      price: "₹8,750",
      rating: "4.8",
      reviews: "71",
    },
  ];

  return (
    <section className="featured-section">
      <div className="featured-container">

        {/* Heading */}
        <div className="featured-heading">
          <div>
            <span className="featured-label">
              FEATURED PRODUCTS
            </span>

            <h2>
              Explore Popular
              <span> Products</span>
            </h2>
          </div>

          <div className="featured-heading-right">
            <p>
              Discover products from trusted vendors and local
              businesses across different markets.
            </p>

            <button className="featured-view-all">
              View Marketplace
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="featured-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>

              {/* Image */}
              <div className="product-image-wrapper">

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                <div className="product-image-overlay"></div>

                <span className="verified-badge">
                  <BadgeCheck size={14} />
                  Verified Vendor
                </span>

                <button
                  className="wishlist-button"
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  <Heart size={18} />
                </button>

                <span className="product-category">
                  {product.category}
                </span>
              </div>

              {/* Product Content */}
              <div className="product-content">

                <h3>{product.name}</h3>

                <div className="product-vendor">
                  <span>{product.vendor}</span>

                  <span className="product-location">
                    <MapPin size={14} />
                    {product.location}
                  </span>
                </div>

                <div className="product-rating">
                  <div className="rating-stars">
                    <Star size={14} fill="currentColor" />
                    <span>{product.rating}</span>
                  </div>

                  <span className="review-count">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="product-bottom">

                  <div className="product-price">
                    <span>Starting from</span>
                    <strong>{product.price}</strong>
                  </div>

                  <button className="product-view-button">
                    View
                    <ArrowRight size={15} />
                  </button>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="featured-bottom">
          <div className="featured-bottom-dot"></div>

          <span>
            More products and vendors are being added to GlobalMart
          </span>

          <button>
            Explore all
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;