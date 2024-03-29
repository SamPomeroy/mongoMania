const express = require('express')
const logger = require('morgan')

const app = express()
const recipeRouter = require('./routes/recipe/recipeRouter')

app.use(logger('dev'))
app.use(express.json())

app.use('/recipes/', recipeRouter)

module.exports = app