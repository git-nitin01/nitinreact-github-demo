import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App'; 

describe('App component', () => {
  test('renders Vite and React logos', () => {
    render(<App />);

    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('renders the heading and button', () => {
    render(<App />);

    const heading = screen.getByText(/Vite \+ React/i);
    const button = screen.getByRole('button', { name: /count is 0/i });

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('increments the counter when the button is clicked', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);

    expect(button).toHaveTextContent('count is 1');
  });
});
