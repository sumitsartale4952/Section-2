import React from "react";
import  Expenseitem from './components/Expenseitem';


function App()
{
  const expense =[
    {
      id:'e1',
      title:'Toilet Paper',
      amount:94.12,
      date:new Date(2023, 7, 14),

    },
    {
      id:'e2',
      title:'Car Insurance',
      amount:294.67,
      date:new Date(2023, 2, 28),
     },
     {
      id:'e3',
      title:'New Desk (Wooden)',
      amount:450,
      date:new Date(2023, 5, 12),
     },
  ];
  return(
    <>
      <h1 className="heading-style1" >Hello, Wellcome!! </h1>
      <Expenseitem 
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date} />
      
      <Expenseitem 
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date} />
     
      <Expenseitem 
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date} />
      
     
    </>
  );
}

export default App;