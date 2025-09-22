import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FirstScreen heading text', () => {
  render(<App />);
  const heading = screen.getByText(/Fitness Tracker/i);
  expect(heading).toBeInTheDocument();
});
