import {
  Laptop,
  Shirt,
  House,
  Factory,
  Leaf,
  Car,
  ArrowRight,
} from "lucide-react";

import electronicsImage from "../../assets/images/electronics.jpg";
import fashionImage from "../../assets/images/fashion.jpg";
import homeImage from "../../assets/images/home.jpg";
import industrialImage from "../../assets/images/industrial.jpg";
import localProductsImage from "../../assets/images/local-products.jpg";
import automotiveImage from "../../assets/images/automotive.jpg";

import "./Categories.css";

function Categories() {
  const categories = [
    {
      name: "Electronics",
      description: "Devices, gadgets and technology products",
      count: "1,240+ Products",
      image: electronicsImage,
      icon: Laptop,
    },
    {
      name: "Fashion",
      description: "Clothing, accessories and lifestyle products",
      count: "2,850+ Products",
      image: fashionImage,
      icon: Shirt,
    },
    {
      name: "Home & Living",
      description: "Furniture, home essentials and decor",
      count: "1,760+ Products",
      image: homeImage,
      icon: House,
    },
    {
      name: "Industrial",
      description: "Tools, equipment and industrial products",
      count: "980+ Products",
      image: industrialImage,
      icon: Factory,
    },
    {
      name: "Local Products",
      description: "Unique products from local businesses",
      count: "3,420+ Products",
      image: localProductsImage,
      icon: Leaf,
    },
    {
      name: "Automotive & Parts",
      description: "Vehicle parts, accessories and tools",
      count: "1,120+ Products",
      image: automotiveImage,
      icon: Car,
    },
  ];

  return (
    <section className="categories-section" id="explore">

      <div className="categories-container">

        {/* SECTION HEADING */}

        <div className="categories-heading">

          <div>
            <span className="categories-label">
              EXPLORE CATEGORIES
            </span>

            <h2>
              Discover Products From
              <span> Different Markets</span>
            </h2>
          </div>

          <div className="categories-heading-right">
            <p>
              Explore products from trusted vendors, local businesses,
              and resellers across different categories.
            </p>

            <button className="categories-all-button">
              Explore All
              <ArrowRight size={16} />
            </button>
          </div>

        </div>


        {/* CATEGORY GRID */}

        <div className="categories-grid">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <article
                className="category-card"
                key={category.name}
              >

                {/* IMAGE */}

                <div className="category-image-wrapper">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-image"
                  />

                  <div className="category-image-overlay"></div>

                  {/* ICON */}

                  <div className="category-icon">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* PRODUCT COUNT */}

                  <span className="category-count">
                    {category.count}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="category-content">

                  <div>
                    <h3>{category.name}</h3>

                    <p>
                      {category.description}
                    </p>
                  </div>

                  <button className="category-link">
                    Explore
                    <ArrowRight size={16} />
                  </button>

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Categories;