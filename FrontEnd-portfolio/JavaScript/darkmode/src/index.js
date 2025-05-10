const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
    // document.documentElement.classList.toggle('dark-theme')
    if(document.documentElement.classList.contains('dark-theme')){
        document.documentElement.classList.toggle('dark-theme')
        toggleBtn.textContent = "Day"
        console.log('true')
    }
    else{
        document.documentElement.classList.toggle('dark-theme')
        toggleBtn.textContent = "Night"

        console.log('false')
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