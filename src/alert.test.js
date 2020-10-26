import React from 'react';
import { render, screen, findAllByTestId } from '@testing-library/react';
import {Alert} from './alert';

test('Alert componet renders the correct error message', () => {
    render(<Alert errorMessage={'This is an error'}/>);

    screen.getByText(/this is an error/i);
})

test('Alert component renders default message when passed no props', () => {
    render(<Alert />);

    screen.getByText(/technical error/i);
})