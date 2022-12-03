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
    expect(screen.getByTestId("messages-count").textContent).toBe("1");
    expect(screen.getByTestId("latest-message").textContent).toBe("Please push Buy button.");
    // expect(screen.getByLabelText("Messages").firstElementChild?.textContent).toBe("Please push Buy button.")
  })

  it('shows "Insert 100 yen to buy Cola" message when Buy button pushed', async () => {
    render(<App />)
    expect(screen.getByTestId("messages-count").textContent).toBe("1");
    expect(screen.getByTestId("latest-message").textContent).toBe("Please push Buy button.");
    await userEvent.click(screen.getByText("Buy"))
    expect(screen.getByTestId("messages-count").textContent).toBe("2");
    expect(screen.getByTestId("latest-message").textContent).toBe("Insert 100 yen to buy Cola");
  })

  it('has "Insert 100 yen coin" button', async () => {
    render(<App />)
    expect(screen.getByLabelText("Insert 100 yen coin")).toBeInTheDocument()
    expect(screen.getByLabelText("Insert 100 yen coin")?.textContent).toBe("Insert 100 yen coin")
    await userEvent.click(screen.getByLabelText("Insert 100 yen coin"))
  })

  it('shows "Cola" messages when Buy button is pushed after "Insert 100 yen coin" button is pushed', async() => {
    render(<App />)
    await userEvent.click(screen.getByLabelText("Insert 100 yen coin"))
    await userEvent.click(screen.getByText("Buy"))
    expect(screen.getByTestId("messages-count").textContent).toBe("2");
    expect(screen.getByTestId("latest-message").textContent).toBe("Cola");
  })

  it('shows "Insert 100 yen coin" when Buy button is pushed twiche while only 100 yen is inserted', async() => {
    render(<App />)
    await userEvent.click(screen.getByLabelText("Insert 100 yen coin"))
    await userEvent.click(screen.getByText("Buy"))
    expect(screen.getByTestId("messages-count").textContent).toBe("2");
    expect(screen.getByTestId("latest-message").textContent).toBe("Cola");
    await userEvent.click(screen.getByText("Buy"))
    expect(screen.getByTestId("messages-count").textContent).toBe("3");
    expect(screen.getByTestId("latest-message").textContent).toBe("Insert 100 yen to buy Cola");
  })

  it('shows "Cola" again when Buy button is pushed twiche while 200 yen are inserted', async() => {
    render(<App />)
    await userEvent.click(screen.getByLabelText("Insert 100 yen coin"))
    await userEvent.click(screen.getByLabelText("Insert 100 yen coin"))
    await userEvent.click(screen.getByText("Buy"))
    expect(screen.getByTestId("messages-count").textContent).toBe("2");
    expect(screen.getByTestId("latest-message").textContent).toBe("Cola");
    await userEvent.click(screen.getByText("Buy"))
    expect(screen.getByTestId("messages-count").textContent).toBe("3");
    expect(screen.getByTestId("latest-message").textContent).toBe("Cola");
  })
})
