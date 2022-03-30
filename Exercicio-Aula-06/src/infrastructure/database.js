const mongoose = require('mongoose');

const uri = `mongodb+srv://adm:adm@cluster0.z6flp.mongodb.net/myFirstDatabase?`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const SuperSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type:String,
        unique: true,
    },
    forca: Number,
    poder: String,
    origem: String,
});

const SuperModel = mongoose.model('SuperModel', SuperSchema);

module.exports = {
    SuperModel,
};