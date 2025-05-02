const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "faceProduct",
    price: 15.99,
    img: "./images/face-product/anat1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category:"faceProduct",
    price: 13.99,
    img: "./images/face-product/anat2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "faceProduct",
    price: 6.99,
    img: "./images/face-product/anat3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "faceProduct",
    price: 20.99,
    img: "./images/face-product/anat4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "faceProduct",
    price: 22.99,
    img: "./images/face-product/anat6.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "men",
    price: 18.99,
    img: "./images/mens-wear/mw1.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "men",
    price: 8.99,
    img: "./images/mens-wear/mw2.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "men",
    price: 12.99,
    img: "./images/mens-wear/mw3.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "men",
    price: 16.99,
    img: "./images/mens-wear/mw4.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "shoe",
    price: 22.99,
    img: "./images/shoes/s1.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "bison steak",
    category:  "shoe",
    price: 22.99,
    img: "./images/shoes/s2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "bison steak",
    category:  "shoe",
    price: 22.99,
    img: "./images/shoes/s3.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "bison steak",
    category:  "women",
    price: 22.99,
    img: "./images/womens-wear/w1.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "bison steak",
    category:  "women",
    price: 22.99,
    img: "./images/womens-wear/w2.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "bison steak",
    category:  "women",
    price: 22.99,
    img: "./images/womens-wear/w3.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "bison steak",
    category:  "women",
    price: 22.99,
    img: "./images/womens-wear/w4.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const section = document.querySelector(".section-center");
const btns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  populateData(menu);
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.target.dataset.id;
    const menuCategory = menu.filter((item) => {
        if(item.category === category){
            return item
        }
    })

    if(category === 'all'){
        populateData(menu);
    }else{
        populateData(menuCategory);
    }

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
