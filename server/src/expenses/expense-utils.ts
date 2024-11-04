import { Expense } from "../types";
import { Request, Response } from "express";

export function createExpenseServer(req: Request, res: Response, expenses: Expense[]) {
    const { id, cost, description } = req.body;

    if (!description || !id || !cost) {
        return res.status(400).send({ error: "Missing required fields" });
    }

    const newExpense: Expense = {
        id: id,
        description,
        cost,
    };

    expenses.push(newExpense);
    res.status(201).send(newExpense);
}

export function deleteExpense(req: Request, res: Response, expenses: Expense[]) {
    // TO DO: Implement deleteExpense function

    console.log("printing expenses");

   // const { id, cost, description } = req.body;
    const id = req.params.id;

    console.log("delete expnse id: " + id);
    console.log(expenses);
     
    if (!id) {
        return res.status(400).send({ error: "Missing required fields" });
    
    }

   //const temp = expenses.filter((expense) => (expense.id != id));

    for (let i = 0; i < expenses.length; i++){
        console.log(expenses[i].id,id );
        if (expenses[i].id === id){
            expenses.splice(i,1);
            break;
        }
  }

   /* for (let i = 0; i < temp.length; i++){
          temp[i].id = i+1+"";
    }*/
    
   // expenses = temp.concat([]);
    console.log(expenses);
    res.status(201).send(id);


}

export function getExpenses(req: Request, res: Response, expenses: Expense[]) {
    res.status(200).send({ "data": expenses });
}