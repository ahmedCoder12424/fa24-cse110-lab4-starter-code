
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext} from "../../context/AppContext";

import { fetchBudget, updateBudget } from "../../utils/budget-utils";

const Budget = () => {
  const { budget, setBudget} = useContext(AppContext);
  const [buttonText, setButtonText] = useState("Edit")

  const budgetRef = useRef<HTMLParagraphElement>(null);
  // const updateBudget=(event: React.FormEvent<HTMLFormElement>) =>{

       // budget '''[[==]]
  // Fetch budget on component mount
  useEffect(() => {
	 loadBudget();
  }, []);

  // Function to load budget and handle errors
  const loadBudget = async () => {
	try {
  	const budget = await fetchBudget();
    setBudget(budget)
  	
	} catch (err: any) {
  	console.log(err.message);
	}
  };
  function editButton(){
   
    function handleClick(){
    
      if (buttonText == "Edit"){
        setButtonText("Save");
        if (budgetRef.current) { // Check if budgetRef.current is not null
          const budgetVal = budgetRef.current.textContent;
          setBudget(Number(budgetVal));
          console.log("budget value sent to server2", budget);
      
        
          
        }
        console.log("budget value sent to server3", budget);
      
      }
      else{
        setButtonText("Edit");

      
     
      }
      updateBudget(budget);
      console.log("budget value sent to server", budget);
 
   
    }
    return (
        
        <button onClick={handleClick}> {buttonText} </button>
     
    );
    

}
  //};
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div>Budget: <p id = "budgetag"  ref={budgetRef} contentEditable= {buttonText == "Save" ? true: false} suppressContentEditableWarning={true}> 
        {budget} </p>{editButton()}</div>

    </div>
  );
};

export default Budget;
