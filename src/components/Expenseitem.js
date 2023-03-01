import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";


function Expenseitem(props)
{
   
    
    return(
       
         <div className="expense-item">
            <ExpenseDate date ={props.date}/>
            <div className="expense-item__description"></div>
           
              <h2 className="heading-style"> {props.title}</h2>
              <div className="expense-item__price">${props.amount}</div>
           

    
        </div>
     
    );
}    
 export default Expenseitem;