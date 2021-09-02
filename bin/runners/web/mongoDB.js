const mongoose = require('mongoose');
const articleModel = require('../../../models/article');
const url = 'mongodb://localhost:27017/articlesTable';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const run = () => {
    mongoose.connect(url, options);
    const db = mongoose.connection;

    db.on('eror', (err) => {
        console.log('Db erore: ', err);
    });

    db.once('open', () => {
        console.log('Conected DB');
    });

    db.once('close', () => {
        console.log('DB close');
    });


}
const createNewArticle = async (nameArticle, bodyArticle) => {
    const article = new articleModel;
    article.name = nameArticle;
    article.body = bodyArticle;

    const doc = await article.save();
}

const findAllArticle = async () => {
    const doc = await articleModel.find({});
    
    return doc;
}

module.exports = { runner: run, createNewArticle: createNewArticle, findAllArticle: findAllArticle };