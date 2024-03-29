const express = require('express')
const router = express.Router()
const {getAllRecipe, createRecipe} = require('./controller/recipeController')

router.get('/get-all-recipe', (req, res)=>{
    getAllRecipe()
        .then((payload)=>{
            res.json({message: 'success', data: payload})
        })
        .catch((error)=>{
            res.status(500).json({message: 'error', error: error})
        })
})

router.post('/create-recipe', (req, res)=>{
    createRecipe(req.body)
        .then((payload)=>{
            res.json({message: 'recipe successfully created', data: payload})
        })
        .catch((error)=>{
            res.status(500).json({message: 'error', error})
        })
})

module.exports = router