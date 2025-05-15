const menu = [
  {
    id: 1,
    title: "Anat Face Cleanser",
    category: "faceProduct",
    price: 15.99,
    img: "./images/face-product/anat1.jpg",
    desc: `Gentle yet effective cleanser designed to remove dirt, oil, and makeup without stripping your skin's natural moisture.`,
  },
  {
    id: 2,
    title: "Anat Hydrating Cream",
    category: "faceProduct",
    price: 13.99,
    img: "./images/face-product/anat2.jpg",
    desc: `A deeply moisturizing cream infused with botanicals to keep your skin soft, smooth, and glowing all day.`,
  },
  {
    id: 3,
    title: "Anat Face Serum",
    category: "faceProduct",
    price: 6.99,
    img: "./images/face-product/anat3.jpg",
    desc: `Lightweight serum enriched with vitamins and antioxidants to rejuvenate tired, dull skin and improve elasticity.`,
  },
  {
    id: 4,
    title: "Anat Night Moisturizer",
    category: "faceProduct",
    price: 20.99,
    img: "./images/face-product/anat4.jpg",
    desc: `Nourishing night cream that works while you sleep to restore skin hydration and reduce fine lines.`,
  },
  {
    id: 5,
    title: "Anat Face Mask",
    category: "faceProduct",
    price: 22.99,
    img: "./images/face-product/anat6.jpg",
    desc: `Detoxifying face mask formulated with clay and natural extracts to deeply cleanse and refresh your skin.`,
  },
  {
    id: 6,
    title: "Men's Classic T-Shirt",
    category: "men",
    price: 18.99,
    img: "./images/mens-wear/mw1.jpg",
    desc: `Timeless crew neck tee made from premium cotton for all-day comfort and versatile everyday wear.`,
  },
  {
    id: 7,
    title: "Men's Casual Shirt",
    category: "men",
    price: 8.99,
    img: "./images/mens-wear/mw2.jpg",
    desc: `Stylish casual shirt perfect for relaxed outings, crafted from breathable fabric with a modern fit.`,
  },
  {
    id: 8,
    title: "Men's Polo Tee",
    category: "men",
    price: 12.99,
    img: "./images/mens-wear/mw3.jpg",
    desc: `Smart and casual polo tee featuring soft material and a sleek collar for a polished look.`,
  },
  {
    id: 9,
    title: "Men's Hoodie Jacket",
    category: "men",
    price: 16.99,
    img: "./images/mens-wear/mw4.jpg",
    desc: `Warm and durable hoodie jacket designed for comfort during chilly days or cool urban nights.`,
  },
  {
    id: 10,
    title: "Classic White Sneakers",
    category: "shoe",
    price: 22.99,
    img: "./images/shoes/s1.jpg",
    desc: `Minimalist white sneakers that pair with anything—perfect for both casual and semi-formal styles.`,
  },
  {
    id: 11,
    title: "Urban Gray Trainers",
    category: "shoe",
    price: 22.99,
    img: "./images/shoes/s2.jpg",
    desc: `Modern gray trainers with breathable mesh and strong grip soles—ideal for daily movement and comfort.`,
  },
  {
    id: 12,
    title: "Sporty Running Shoes",
    category: "shoe",
    price: 22.99,
    img: "./images/shoes/s3.jpg",
    desc: `Designed for performance and comfort, these sporty running shoes provide stability and a stylish edge.`,
  },
  {
    id: 13,
    title: "Women's Pink Blouse",
    category: "women",
    price: 22.99,
    img: "./images/womens-wear/w1.webp",
    desc: `Elegant pink blouse with ruffle detail—adds a feminine touch to both work and casual outfits.`,
  },
  {
    id: 14,
    title: "Women's Floral Dress",
    category: "women",
    price: 22.99,
    img: "./images/womens-wear/w2.webp",
    desc: `Flowy floral dress perfect for spring days, garden events, or a breezy weekend stroll.`,
  },
  {
    id: 15,
    title: "Women's Casual Tee",
    category: "women",
    price: 22.99,
    img: "./images/womens-wear/w3.webp",
    desc: `Soft cotton tee designed for everyday wear with a relaxed fit and subtle styling details.`,
  },
  {
    id: 16,
    title: "Women's Trendy Jacket",
    category: "women",
    price: 22.99,
    img: "./images/womens-wear/w4.jpg",
    desc: `Chic jacket featuring a modern cut and durable fabric—layer it for style and warmth.`,
  },
];

const section = document.querySelector(".section-center");
const btnsDisplay = document.querySelector('.btn-container')


window.addEventListener("DOMContentLoaded", () => {
  populateData(menu);
 
  const allBtns = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );

  const categoryBtns = allBtns.map((category) => {
    return `
    <button type="button" class="filter-btn" data-id="${category}">${category}</button>
    `
  }).join("")


  btnsDisplay.innerHTML = categoryBtns
  const btns = document.querySelectorAll(".filter-btn");
 

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.target.dataset.id;
      const menuCategory = menu.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
  
      if (category === "all") {
        populateData(menu);
      } else {
        populateData(menuCategory);
      }
    });
  });

});



const populateData = (data) => {
  const displayMenu = data
    .map((item) => {
      return `
        <article class="menu-item">
        <img src="${item.img}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
           ${item.desc}
          </p>
        </div>
      </article>
        
        `;
    })
    .join("");

  section.innerHTML = displayMenu;
};
