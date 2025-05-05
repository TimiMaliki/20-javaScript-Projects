const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const about = document.querySelector(".about");



about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    //   console.log(btn);
    //   console.log(e.target);
    });
    content.forEach((article) => {
    //   console.log(article);
      article.classList.remove("active");
    });

    const el = document.getElementById(id);
    el.classList.add("active");
  }
});


