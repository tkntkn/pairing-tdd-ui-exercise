import '@testing-library/jest-dom' 
import userEvent from '@testing-library/user-event' 
import { render, screen } from '@testing-library/react';
import { App } from "./App";

describe('vending machine', () => {
  it('has Buy button', async () => {
    render(<App />)
    expect(screen.getByText("Buy")).toBeInTheDocument()
    await userEvent.click(screen.getByText("Buy"))
  })

  it('shows "Please push Buy button." message at first', async () => {
    render(<App />)
    expect(screen.getByLabelText("Messages").firstElementChild?.textContent).toBe("Please push Buy button.")
  })

  it('shows "Cola" message when Buy button pushed', async () => {
    render(<App />)
    await userEvent.click(screen.getByText("Buy"))
    expect(screen.getByLabelText("Messages").firstElementChild?.textContent).toBe("Please push Buy button.")
    expect(screen.getByLabelText("Messages").lastElementChild?.textContent).toBe("Cola")
  })
})
