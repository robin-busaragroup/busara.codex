document.addEventListener('DOMContentLoaded', () => {
  fetch('research/posts.json')
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById('articles');
      data.articles.forEach((article) => {
        const articleEl = document.createElement('article');
        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = article.title;
        articleEl.appendChild(link);
        const date = document.createElement('span');
        date.textContent = ' - ' + article.date;
        articleEl.appendChild(date);
        container.appendChild(articleEl);
      });
    })
    .catch(() => {
      document.getElementById('articles').textContent = 'No research available.';
    });
});
