import { Database } from "sqlite/build/Database";
import { Expense } from "../types";
import { Request, Response } from "express";
import { LIMIT_WORKER_THREADS } from "sqlite3";

export async function createExpenseServer(req: Request, res: Response, db: Database) {
    const { id, cost, description } = req.body;
 
    if (!description || !id || !cost) {
        return res.status(400).send({ error: "Missing required fields" });
    }
 
    try {
        await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, description, cost]);
    } catch (error) {
        return res.status(400).send({ error: `Expense could not be created, + ${error}` });
    };
 
    res.status(201).send({ id, description, cost });
 
 
 }
 

export async function deleteExpense(req: Request, res: Response, db: Database) {
    // TO DO: Implement deleteExpense function

    console.log("printing expenses");

   // const { id, cost, description } = req.body;
    const id = req.params.id;

    console.log("delete expnse id: " + id);
   // console.log(expenses);
     
    if (!id) {
        return res.status(400).send({ error: "invalid id" });
    
    }
   /* let idExists = db.all('SELECT 1 FROM expenses WHERE id = ?;', id);
    console.log(idExists);
    if ((await idExists).length > 0){
        return res.status(400).send({ error: "id doesn't exist"});


    }*/

    try {
        await db.run('DELETE FROM expenses WHERE id=?;', id);
    } catch (error) {
        return res.status(400).send({ error: `Expense could not be deleted + ${error}` });
    };


    res.status(201).send(id);


}

export async function getExpenses(req: Request, res: Response, db: Database) {
   
   //let expenses = [];
    let expenses  = []
    try {
        expenses = await db.all('SELECT * FROM expenses');
       //await db.run('.schema;');
    } catch (error) {
        return res.status(400).send({ error: `Expenses could not be fetched + ${error}` });
    };

    res.status(200).send({ "data": expenses })
    
}