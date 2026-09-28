import { useMemo, useState } from "react";
import "./App.css";

const menuData = [
  {
    category: "Starters",
    items: [
      {
        name: "Paneer Tikka",
        price: 180,
        description: "Grilled paneer cubes marinated with aromatic spices",
        image:
          "https://production.owner-pluto.net/images/funnel/images/cb8d2a19-61d6-4632-946c-17ea012bab8c?fit=cover&h=768&w=768",
      },
      {
        name: "Veg Manchurian",
        price: 160,
        description: "Crispy vegetable balls in spicy Manchurian sauce",
        image:
          "https://poojafoods.co.uk/cdn/shop/files/VegManchurianbg.png?v=1749669878&width=1946",
      },
      {
        name: "Hara Bhara Kebab",
        price: 150,
        description: "Healthy green vegetable and spinach kebabs",
        image:
          "https://www.hercircle.in/hcm/EngageImage/1C7134BB-1C2C-43F1-8EDB-41F9117DCA38/D/0957FC99-5B67-4E67-A532-A8359646C297.jpg",
      },
      {
        name: "Crispy Corn",
        price: 140,
        description: "Crunchy golden corn tossed with delicious spices",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_240%2Ch_240/FOOD_CATALOG/IMAGES/CMS/2026/2/10/d0a33140-887b-4284-aee9-fb5bac24cfa4_50a95874-332e-4c01-9596-de0278831ee0.jpeg",
      },
    ],
  },

  {
    category: "Main Course",
    items: [
      {
        name: "Paneer Butter Masala",
        price: 220,
        description: "Soft paneer cooked in rich creamy tomato gravy",
        image:
          "https://hospitalitycareerprofile.com/uploads/images/202605/image_1200x800_69f84b925ad94.webp",
      },
      {
        name: "Veg Kolhapuri",
        price: 190,
        description: "Spicy mixed vegetables cooked in authentic Kolhapuri gravy",
        image:
          "https://static.wixstatic.com/media/34fc00_c87d13e633b74d9784c49b7d979f872a~mv2.png/v1/fill/w_1000%2Ch_1000%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01/34fc00_c87d13e633b74d9784c49b7d979f872a~mv2.png",
      },
      {
        name: "Dal Tadka",
        price: 150,
        description: "Yellow dal tempered with cumin, garlic and red chilli",
        image:
          "https://static.vecteezy.com/system/resources/previews/038/972/483/large_2x/ai-generated-dal-tadka-is-a-popular-indian-dish-where-cooked-spiced-lentils-are-finished-with-a-tempering-made-of-ghee-or-oil-and-spices-photo.jpg",
      },
      {
        name: "Mix Veg Handi",
        price: 200,
        description: "Fresh mixed vegetables cooked in rich handi gravy",
        image:
          "https://image.cdn.shpy.in/449844/SKU-0192_0-1765713261763.jpg?format=webp",
      },
      {
        name: "Kaju Masala",
        price: 240,
        description: "Creamy cashew curry prepared with aromatic spices",
        image:
          "https://i.pinimg.com/originals/f4/b7/8a/f4b78a28f797ce7211b98c00c06b9f1e.jpg",
      },
    ],
  },

  {
    category: "Breads",
    items: [
      {
        name: "Butter Naan",
        price: 45,
        description: "Soft tandoori naan brushed with butter",
        image:
          "https://cdn.uengage.io/uploads/10295/image-5432-1770195287.jpg",
      },
      {
        name: "Garlic Naan",
        price: 60,
        description: "Tandoori naan topped with garlic and coriander",
        image: "https://harikeshfoods.com/img/gallery3.jpg",
      },
      {
        name: "Butter Roti",
        price: 25,
        description: "Soft whole wheat tandoori roti with butter",
        image:
          "https://cdn.uengage.io/uploads/10295/image-1115-1770195298.jpg",
      },
      {
        name: "Cheese Naan",
        price: 90,
        description: "Soft naan stuffed with delicious melted cheese",
        image:
          "https://masalahouse.com.sa/wp-content/uploads/2022/09/Cheesy-Naan-Bread.jpg",
      },
    ],
  },

  {
    category: "Rice & Biryani",
    items: [
      {
        name: "Veg Biryani",
        price: 190,
        description: "Aromatic basmati rice cooked with fresh vegetables",
        image:
          "https://tb-static.uber.com/prod/image-proc/processed_images/2cf3b8f2e83b2852c4d3b6f33328abcd/c67fc65e9b4e16a553eb7574fba090f1.jpeg",
      },
      {
        name: "Paneer Biryani",
        price: 220,
        description: "Fragrant biryani layered with spicy paneer",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/16/edb8bb65-e673-406e-b3c5-e631c039592a_6ebab518-9c2f-4004-9bb2-20c7d76e5c04.jpg",
      },
      {
        name: "Jeera Rice",
        price: 120,
        description: "Steamed basmati rice tempered with cumin",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/b76df01260ecbd650836edeed8959234",
      },
    ],
  },

  {
    category: "Beverages",
    items: [
      {
        name: "Cold Coffee",
        price: 90,
        description: "Chilled creamy coffee topped with foam",
        image:
          "https://media.assettype.com/freepressjournal/2025-11-25/uuvq3j2h/Copy-of-ICED-KAAPI-WITH-JAGGERY-GHEE.jpg",
      },
      {
        name: "Fresh Lime Soda",
        price: 60,
        description: "Refreshing lime soda served chilled",
        image:
          "https://image.cdn.shpy.in/301880/__opt__aboutcom__coeus__resource-1739293406672.jpeg?format=webp",
      },
      {
        name: "Masala Chai",
        price: 30,
        description: "Hot Indian tea brewed with aromatic spices",
        image:
          "https://b.zmtcdn.com/data/dish_photos/f0f/01c37999c52a14299484f2e52addff0f.jpeg",
      },
      {
        name: "Mango Lassi",
        price: 100,
        description: "Creamy chilled yogurt drink blended with mango",
        image:
          "https://content.jwplatform.com/thumbs/uI6k9xmI-720.jpg",
      },
    ],
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...menuData.map((section) => section.category),
  ];

  const allItems = menuData.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      category: section.category,
    }))
  );

  const filteredItems = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return allItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-badge">🍽️ DIGITAL MENU</span>

            <h1>Shree Restaurant</h1>

            <p>
              Authentic taste, fresh ingredients &amp; unforgettable
              experiences.
            </p>

            <div className="hero-info">
              <span>⭐ 4.7</span>
              <span>•</span>
              <span>Pure Veg</span>
              <span>•</span>
              <span>₹₹</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANT INFO */}
      <section className="restaurant-info">
        <div className="info-item">
          <span className="info-icon">📍</span>
          <div>
            <strong>Location</strong>
            <p>Pune, Maharashtra</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">🕐</span>
          <div>
            <strong>Opening Hours</strong>
            <p>11:00 AM – 11:00 PM</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">📞</span>
          <div>
            <strong>Contact</strong>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </section>

      {/* MENU */}
      <main className="menu-section">
        <div className="section-heading">
          <span className="small-title">OUR MENU</span>
          <h2>Choose Your Favourite</h2>
          <p>Freshly prepared dishes made with love.</p>
        </div>

        {/* SEARCH */}
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* TOP BAR */}
        <div className="menu-top">
          <span>
            Showing <strong>{filteredItems.length}</strong> dishes
          </span>

          <span className="rating">⭐ 4.7 Customer Rating</span>
        </div>

        {/* MENU GRID */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article className="food-card" key={item.name}>
                <div className="food-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="food-image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80";
                    }}
                  />

                  <span className="food-category">
                    {item.category}
                  </span>
                </div>

                <div className="food-content">
                  <div className="food-title-row">
                    <h3>{item.name}</h3>
                    <span className="food-price">
                      ₹{item.price}
                    </span>
                  </div>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🍽️</div>

            <h3>No dishes found</h3>

            <p>Try another search or category.</p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              View All Dishes
            </button>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">Shree Restaurant</div>

        <p>Fresh food • Great taste • Happy moments</p>

        <div className="footer-line"></div>

        <small>
          © 2026 Shree Restaurant. All rights reserved.
        </small>

        <small className="digital-menu">
          Digital Menu
        </small>
      </footer>
    </div>
  );
}

export default App;