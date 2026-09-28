import { useState } from "react";
import "./App.css";

const menuData = [
  {
    category: "Starters",
    items: [
      {
        name: "Paneer Tikka",
        description: "Grilled paneer with onions and capsicum",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Veg Manchurian",
        description: "Crispy vegetable balls in Manchurian sauce",
        price: 160,
        image:
          "https://images.unsplash.com/photo-1625398407796-82650a8c5d6b?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Paneer Butter Masala",
        description: "Paneer cooked in rich tomato butter gravy",
        price: 220,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Veg Kolhapuri",
        description: "Spicy mixed vegetables in Kolhapuri masala",
        price: 190,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    category: "Breads",
    items: [
      {
        name: "Butter Naan",
        description: "Soft naan topped with butter",
        price: 45,
        image:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Garlic Naan",
        description: "Naan topped with garlic and coriander",
        price: 60,
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Cold Coffee",
        description: "Chilled creamy coffee",
        price: 90,
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Fresh Lime Soda",
        description: "Refreshing sweet and salty lime soda",
        price: 60,
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...menuData.map((section) => section.category)];

  const filteredSections = menuData
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(
      (section) =>
        (activeCategory === "All" || section.category === activeCategory) &&
        section.items.length > 0
    );

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-overlay">
          <p className="welcome">WELCOME TO</p>
          <h1>Shree Paripurana Bhojanalay</h1>
          <p className="tagline">
            Authentic taste • Fresh ingredients • Made with love
          </p>
        </div>
      </header>

      <main className="menu-container">
        <div className="restaurant-info">
          <div>
            <h2>Our Menu</h2>
            <p>Scan. Choose. Enjoy.</p>
          </div>

          <div className="rating">
            ⭐ 4.7
          </div>
        </div>

        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "category active" : "category"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredSections.map((section) => (
          <section className="menu-section" key={section.category}>
            <h2 className="section-title">{section.category}</h2>

            <div className="menu-grid">
              {section.items.map((item) => (
                <div className="food-card" key={item.name}>
                  <img src={item.image} alt={item.name} />

                  <div className="food-details">
                    <div className="food-name-row">
                      <h3>{item.name}</h3>
                      <span className="price">₹{item.price}</span>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {filteredSections.length === 0 && (
          <div className="no-results">
            <div>🍽️</div>
            <h3>No food found</h3>
            <p>Try searching for another dish.</p>
          </div>
        )}
      </main>

      <footer>
        <p>Thank you for visiting ❤️</p>
        <span>Scan • Order • Enjoy</span>
      </footer>
    </div>
  );
}

export default App;