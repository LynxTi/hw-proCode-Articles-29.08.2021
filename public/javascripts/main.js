// const { socket } = require("socket.io");
const socket = io();

const form = document.querySelector('.newArticleForm');
const articlesBlock = document.querySelector('.articlesBlock');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const userArticleName = formData.get('nameArticle');
    const userAticle = formData.get('bodyArticle');

        // if (userArticle !== '') {
            socket.emit('/creatNewArticle', { articleName: userArticleName, article: userAticle });
        // }

 
});

const renderArticleBlock = (articlesArr) => {
    const articlesHtml = articlesArr.reduce((htmlcode, artcile) => {
        htmlcode += `<div>${artcile.name}</div>`
        return htmlcode;
    }, '');

    articlesBlock.innerHTML = articlesHtml;

}

socket.on(`/returAllArticle`, (data) => {
    renderArticleBlock(data)
});



