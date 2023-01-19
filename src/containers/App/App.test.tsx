import React from 'react'
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import App from './App';

test('renders learn react link', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>);
  expect(screen.getByText('Vite + React')).toBeInTheDocument();
});
