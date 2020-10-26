import React from 'react';
import { render, screen } from '@testing-library/react';
import { Ingredients } from './ingredients';

const ingredientsList = ['Tomatoes', 'Pasta', 'Garlic', 'Oil']

test('ingredients card contains unlisted items', () => {
    render(<Ingredients ingredientsList={ingredientsList}/>);

    screen.getByRole('list')
})