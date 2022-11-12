import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { addExcla, App } from "./App";

describe("addExcla", () => {
  it("adds !", () => {
    expect(addExcla("test message")).toBe("test message!");
  })
})

it('Vite + React! が書かれている', () => {
  render(<App />);
  expect(screen.getByText("Vite + React!").tagName.toLowerCase()).toBe("h1");
})