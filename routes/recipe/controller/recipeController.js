const Recipe = require('../model/Recipe')

module.exports = {
    getAllRecipe: ()=>{
        return new Promise((resolve, reject)=>{
            Recipe.find({})
            .then((payload)=>{
                resolve(payload)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    
    },
    createRecipe: (body)=>{
        return new Promise((resolve, reject)=>{
            // if(error){
            //     reject(error)
            // }else{
                let savedRecipe = new Recipe({
                    recipeName: body.recipeName,
                    ingredients: body.ingredients,
                    instructions: body.instructions
                })
                savedRecipe.save()
                    .then((payload)=>{
                        resolve(payload)
                    })
                    .catch((error)=>{
                        reject(error)
                    })
            // }
        })
    }
}