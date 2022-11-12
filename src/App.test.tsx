import '@testing-library/jest-dom' 
import { render, screen } from '@testing-library/react';
import { App } from "./App";

it('Hello Worldが書かれている', () => {
  render(<App />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
})