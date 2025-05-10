const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
    // document.documentElement.classList.toggle('dark-theme')
    if(document.documentElement.classList.contains('dark-theme')){
        document.documentElement.classList.toggle('dark-theme')
        toggleBtn.textContent = "Day"
         //false it doesnt have the class but when it those it becomes true
        // console.log('true')
       
    }
    else{
        document.documentElement.classList.toggle('dark-theme')
        toggleBtn.textContent = "Night"
            // when if() finds out it does have the class it then goes to else and finds out its true and when switches back to if() becoming false
        // console.log('false')
    }
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;