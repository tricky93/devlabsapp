import React from 'react';
import axios from 'axios';
import './App.css';
import {Alert} from './alert';
import {Ingredients} from './ingredients';

export class Recipe extends React.Component {
    state = {
        recipes: [],
        isLoading: false, 
        hasError: false
    }

    async componentDidMount(){
        this.setState({isLoading: true})
        try {
            const response = await axios.get('/random');
            
            this.setState({ recipes: response.data.recipes, isLoading: false})
        } catch (error) {
            this.setState({ isLoading: false, hasError: true})
        }
    }

    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
        };
    }

    render(){
        const {recipes, isLoading, hasError} = this.state;

        if(isLoading) return <div><h1>Loading...</h1></div>

        if(hasError) return <Alert/>

        return (
        <div className='recipe-cards'>
            {recipes.map((recipe, i) =>(
                <div key={i} className='card'>
                <h4>{recipe.recipe}</h4>
                <Ingredients ingredientsList={recipe.ingredients}/>
                </div>
            ))}   
        </div>)
    }
}