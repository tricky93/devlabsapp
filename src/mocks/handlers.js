import { rest } from 'msw'

export const handlers = [

    rest.get('/random', (req, res, ctx) => {
        return res(
            ctx.status(200), 
            ctx.json({recipes: [
                {recipe: 'Pizza', ingredients: ['Flour', 'Tomatoes', 'cheese', 'water']},
                {recipe: 'Pizza', ingredients: ['Flour', 'Tomatoes', 'cheese', 'water']},
                {recipe: 'Pizza', ingredients: ['Flour', 'Tomatoes', 'cheese', 'water']},            
            ]})
        )
    }),
]