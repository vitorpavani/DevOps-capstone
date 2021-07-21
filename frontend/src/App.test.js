import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
