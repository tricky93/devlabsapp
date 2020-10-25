import { render, screen } from '@testing-library/react';
import App from './App';
import {Name} from './name';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('calls API and renders name', async () => {
  render(<Name/>);
  await screen.findByText(/paddy/i);
})