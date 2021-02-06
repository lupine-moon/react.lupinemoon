import { render, screen } from '@testing-library/react';

import React from 'react';

import App from '@app/containers/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/under construction/i);
  expect(linkElement).toBeInTheDocument();
});
