import React, { useState , useContext} from "react";
import { AppContext} from "../../context/AppContext";
import { Expense } from "../../types/types"

const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here

  // Exercise: Create name and cost to state variables

  const { expenses, setExpenses } = useContext(AppContext);
  const expense_id = expenses.length +"";
  const [name, setName]= useState("");
  const [cost, setCost] = useState(0);
  


  const updateName=(event: React.ChangeEvent<HTMLInputElement>) =>{

    setName(event.target.value);



  };

  const updateCost=(event: React.ChangeEvent<HTMLInputElement>) =>{
 
    if (!isNaN(+event.target.value)){
        setCost(+event.target.value);

    }



  };

  

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();

    const newExpense : Expense = {
      id: expense_id,
      name: name,
      cost: cost,
   
     };

  
    setExpenses([newExpense, ...expenses]);
    console.log(expenses);

    

    // Exercise: Add add new expense to expenses context array
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={updateName}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={updateCost}
          ></input>
        </div>
        <div className="col-sm">
          <button  data-testid = "save-button" type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
