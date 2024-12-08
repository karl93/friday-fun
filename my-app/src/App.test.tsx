import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('title loads', () => {
  render(<App />);
  const title = screen.getByText(/Friday fun/i);
  expect(title).toBeInTheDocument();
});