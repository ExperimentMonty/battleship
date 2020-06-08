import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders battleship title', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/battleship/i);
  expect(headerElement).toBeInTheDocument();
});
