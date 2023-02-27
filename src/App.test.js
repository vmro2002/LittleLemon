import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";
import Reserve from "./components/Reserve";

/*
In order for the tests to work open Reserve.js
on the 24th line convert the code into a comment
activate the code on the 25th line be deleting the two slashes at the beginning
*/


test("render reservations page header", () => {
  render(
      <Reserve/>
  );
  expect(screen.getByText("Reservations")).toBeInTheDocument();
})

test("check the initial booking times", () => {
  render(<Reserve/>)
  const defaultTimes = screen.getByTestId('timelist')
  expect(defaultTimes).toBeEmptyDOMElement()
})

test("check the updated booking times after selecting date", () => {
  render(<Reserve/>)
  const datetest = screen.getByTestId('dateselect')
  const datetestin = '2023-03-05'
  fireEvent.change(datetest, { target: { value: datetestin } })
  fireEvent.blur(datetest)
  const defaultTimes = screen.getAllByTestId('timeitem')
  expect(defaultTimes.length).toBeGreaterThan(0)
})

test("valid form", async () => {
  render(<Reserve/>)

  const datetest = screen.getByTestId('dateselect')
  fireEvent.change(datetest, {target: { value: '2023-03-05' }})
  fireEvent.blur(datetest)

  const timeselect = screen.getByRole('button', {name: 'Select time',})
  userEvent.click(timeselect)
  const [timeoption] = screen.getAllByTestId('timeitem')
  userEvent.click(timeoption)

  const guestsel = screen.getByRole('button', {name: 'Number of Guests',})
  userEvent.click(guestsel)
  const [guestop] = screen.getAllByTestId('guestitem')
  userEvent.click(guestop)

  const namesel = screen.getByTestId('nametest')
  fireEvent.change(namesel, {target: { value: 'John Doe' }})

  const sbtn = screen.getByRole('button', {name: 'Confirm Booking',})
  expect(sbtn).not.toBeDisabled()
})

test("invalid form", () => {
  render(<Reserve/>)
  const button = screen.getByRole('button', {name: 'Confirm Booking',})
  expect(button).toBeDisabled()
})