// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//          debug();
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
 
test('renders Hello World text', () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/Hello World/i);
  expect(helloWorldElement).toBeInTheDocument();
});
