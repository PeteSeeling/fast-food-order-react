import { render, screen } from '@testing-library/react';
import App from './App';

test('Food Order', () => {
  render(<App />);
  const linkElement = screen.getByText(/Food Order/i);
  expect(linkElement).toBeInTheDocument();
});
