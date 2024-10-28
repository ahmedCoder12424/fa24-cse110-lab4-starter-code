import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';



test('create newExpense', () => {
  render(<App />);


  const inputs = document.getElementsByTagName("input");
  const expense_name = inputs[0];
  const expense_value = inputs[1];
  fireEvent.change(expense_name, { target: { value: 'Numaan' } });
  fireEvent.change(expense_value, { target: { value: 100 } });
  const save_button = screen.getByTestId('save-button');
  fireEvent.click(save_button);


  const output = document.getElementsByClassName("list-group-item d-flex justify-content-between align-items-center");

  const expense_name_output =  within(output[0] as HTMLElement).getByText("Numaan");
  const expense_value_output = within(output[0] as HTMLElement).getByText("$100");
  expect(expense_name_output).toBeInTheDocument();
  expect(expense_value_output).toBeInTheDocument();

  const remaining = screen.getByText("Remaining: $9900");
  const spent = screen.getByText("Spent so far: $100");

  expect(remaining).toBeInTheDocument();
  expect(spent).toBeInTheDocument();


  
});

test('create delete a expense', () => {
  render(<App />);


  const inputs = document.getElementsByTagName("input");
  const expense_name = inputs[0];
  const expense_value = inputs[1];
  fireEvent.change(expense_name, { target: { value: 'Numaan' } });
  fireEvent.change(expense_value, { target: { value: 100 } });
  const save_button = screen.getByTestId('save-button');
  fireEvent.click(save_button);


  const output = document.getElementsByClassName("list-group-item d-flex justify-content-between align-items-center");
  
  const expense_name_output =  within(output[0] as HTMLElement).getByText("Numaan");
  const expense_value_output = within(output[0] as HTMLElement).getByText("$100");
  const del_button = within(output[0] as HTMLElement).getByText("x");
  expect(expense_name_output).toBeInTheDocument();
  expect(expense_value_output).toBeInTheDocument();


  fireEvent.click(del_button);

  
  expect( screen.queryByText("Numaan")).toBeNull();
  expect( screen.queryByText("$100")).toBeNull();




});


test('verify budget', () => {
  render(<App />);


  const inputs = document.getElementsByTagName("input");
  const expense_name = inputs[0];
  const expense_value = inputs[1];
  fireEvent.change(expense_name, { target: { value: 'Numaan' } });
  fireEvent.change(expense_value, { target: { value: 100 } });
  const save_button = screen.getByTestId('save-button');
  fireEvent.click(save_button);


  const output = document.getElementsByClassName("list-group-item d-flex justify-content-between align-items-center");

  const expense_name_output =  within(output[0] as HTMLElement).getByText("Numaan");
  const expense_value_output = within(output[0] as HTMLElement).getByText("$100");
 
  expect(expense_name_output).toBeInTheDocument();
  expect(expense_value_output).toBeInTheDocument();

  const budget = screen.getByText("Budget: 10000");
  const remaining = screen.getByText("Remaining: $9900");
  const spent = screen.getByText("Spent so far: $100");
  expect(budget).toBeInTheDocument();
  expect(remaining).toBeInTheDocument();
  expect(spent).toBeInTheDocument();


  const inputs_2 = document.getElementsByTagName("input");
  const expense_name_2= inputs_2[0];
  const expense_value_2 = inputs_2[1];
  fireEvent.change(expense_name_2, { target: { value: 'Gowtham' } });
  fireEvent.change(expense_value_2, { target: { value: 2000 } });
  const save_button_2 = screen.getByTestId('save-button');
  fireEvent.click(save_button_2);

  const output2 = document.getElementsByClassName("list-group-item d-flex justify-content-between align-items-center");
  
  const expense_name_output_2 =  within(output2[0] as HTMLElement).getByText("Gowtham");
  const expense_value_output_2 = within(output2[0] as HTMLElement).getByText("$2000");

  expect(expense_name_output_2).toBeInTheDocument();
  expect(expense_value_output_2).toBeInTheDocument();

  const budget_2 = screen.getByText("Budget: 10000");
  const remaining_2 = screen.getByText("Remaining: $7900");
  const spent_2 = screen.getByText("Spent so far: $2100");
  expect(budget_2).toBeInTheDocument();
  expect(remaining_2).toBeInTheDocument();
  expect(spent_2).toBeInTheDocument();
 

});

