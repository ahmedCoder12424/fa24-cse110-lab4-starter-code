import { Expense } from "../../types/types";
import { AppContext} from "../../context/AppContext";
import { useContext } from "react";
import { deleteExpense } from "../../utils/expense-utils";

const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here

  const { expenses, setExpenses } = useContext(AppContext);

  const handleDeleteExpense = async (currentExpense: Expense) => {
    // Exercise: Remove expense from expenses context array
     const expense_id = currentExpense.id;
    
    deleteExpense(expense_id);
  
    const temp = expenses.filter((expense) => ( expense.id != expense_id));
    for (let i = 0; i < temp.length; i++){

          temp[i].id = i+1+"";
    }
    setExpenses(temp.concat([]));
   
         
      

  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.description}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
