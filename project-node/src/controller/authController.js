const express = require('express');
const Recipes = require('../model/Recipes');
const router = express.Router();

router.post('/created', async (req,res) =>{
    try{
        Recipes.create(req.body);
        return res.status(200).send({ text : "Receita criada com sucesso!"});
    } catch (err) {
        return res.status(400).send({ error: err});
    }
});

router.get('/findAll', async (req,res) =>{
    try {
      var recipes = await Recipes.find({});
      return res.json({recipes});
      } catch (err) {
        throw err;
      }
});

router.get('/findById/:id', async (req,res) =>{
    try {
        const id = req.params.id;
        var recipe = await Recipes.findOne({_id: id});
        return res.json({recipe});
      } catch (err) {
        throw err;
      }
});

module.exports = app => app.use('/api', router);