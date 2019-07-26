const mongoose = require('../database');

const RecipesSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    ingredients:{
        type : Array , 
        "default" : [],
    },
    methodOfPreparation:{
        type : Array , 
        "default" : [],
    },
    date:{
        type: Date, 
        default: Date.now 
    },
    timeOfPreparation:{
        type: String,
        require: true,
    },
    status:{
        type: String,
        "default" : null,
    }
});

const Recipes = mongoose.model('Recipes', RecipesSchema)
module.exports = Recipes;