import React from 'react';
import { render, screen } from '@testing-library/react';
import {Menu} from './menu';


test('menu has a accessible link with correct href', () => {

    render(<Menu/>);

    expect(screen.getByText(/home/i));
    expect(screen.getByText(/create/i));
    expect(screen.getByText(/login/i));
    expect(document.querySelector('a').getAttribute('href')).toBe('./App.js');
})

test('menu has three links', () => {
    render(<Menu/>);

    expect(screen.getAllByRole('link').length).toBe(3);
})