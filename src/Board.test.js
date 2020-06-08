import React from 'react';
import { render } from '@testing-library/react';
import Board from "./Board";

test('Board has 100 squares', () => {
    const { queryAllByRole } = render(<Board />);
    const squareElements = queryAllByRole(/button/);
    expect(squareElements.length).toBe(100);
});

test('Board starts blank', () => {
    const {queryAllByRole} = render(<Board />);
    const squareElements = queryAllByRole(/button/);
    squareElements.forEach((square) => {
        expect(square).toBeEmpty();
    });
});