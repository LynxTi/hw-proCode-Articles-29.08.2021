const mongoose = require('mongoose');

const { Schema } = mongoose;

const generalSchema = new Schema ({
    name: {
        type: Schema.Types.String
    },
    body: {
        type: Schema.Types.String
    }
});

const model = mongoose.model('article', generalSchema)
module.exports = model;

