import React from 'react';
import { render } from '@testing-library/react';
import {Square, STATUS} from './Square'

test('Renders X when hit', () => {
    const { getByText } = render(<Square status={STATUS.HIT} />);
    const hitElement = getByText(/X/i);
    expect(hitElement).toBeInTheDocument();
});

test('Renders O when miss', () => {
    const { getByText } = render(<Square status={STATUS.MISS} />);
    const missElement = getByText(/O/i);
    expect(missElement).toBeInTheDocument();
});

test('Renders a blank square when miss', () => {
    const { getByRole } = render(<Square status={STATUS.UNKNOWN} />);
    const unknownElement = getByRole(/button/);
    expect(unknownElement).toBeEmpty();
});