import React from 'react'
import { render, screen } from '@testing-library/react';
import Reserve from './components/Reserve';
import Header from './components/Header'
import { MemoryRouter } from 'react-router-dom'

test('Render reservation page heading', () => {
  render(<MemoryRouter><Reserve /></MemoryRouter>);
  const heading = screen.getByText("Reservations");
  expect(heading).toBeInTheDocument();
})

