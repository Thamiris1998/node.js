const mongoose = require('mongoose');
const uri = "mongodb+srv://thamiris:123@cluster0-lnznc.mongodb.net/recipes?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
