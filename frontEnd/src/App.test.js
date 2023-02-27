import { screen } from '@testing-library/react';
import App from './App';
import {renderWithRouter } from '../src/components/test/test-utils'



test('renders learn react link', () => {
  renderWithRouter(<App/>)
  const linkElement = screen.getByText(/Iniciar sessão/i);
  expect(linkElement).toBeInTheDocument();
});
