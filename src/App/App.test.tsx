import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders a component with the role of application.', () => {
  render(<App />);
  const applicationContainer = screen.getByRole('application');
  expect(applicationContainer).toBeInTheDocument();
});
