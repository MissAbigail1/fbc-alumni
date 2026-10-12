import { render, screen } from '@testing-library/react';
import App from './App';

test('restores the requested public navigation surface including Directory', () => {
  render(<App />);

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('History')).toBeInTheDocument();
  expect(screen.getByText('Constitution')).toBeInTheDocument();
  expect(screen.getByText('Events')).toBeInTheDocument();
  expect(screen.getByText('Updates')).toBeInTheDocument();
  expect(screen.getByText('Directory')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
