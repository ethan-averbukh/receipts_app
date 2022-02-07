import logo from "./logo.svg";
import "./App.css";
import receipts from "./receiptsData";
import React, { useState } from "react";
import Receipts from "./Receipts/Receipts";
import SearchReceipts from "./Form/SearchReceipts";
import Title from "./Header/Title";
import Buttons from './Buttons/Buttons';

//Bad Practice for global variable. Keep variable in another file maybe?
const allreceiptsCopy = [...receipts];

function App() {
  const [allreceipts, setAllReceipts] = useState(receipts);

  const handlePaidStatus = (orderName) => {
    const foundOrder = allreceiptsCopy.filter((item)=> item.person === orderName);
    foundOrder.paid = !foundOrder.paid;
    setAllReceipts(allreceiptsCopy);

  }

  // Filter receipts by persons order name. Receives User input value from Receipt.js
  const filterReceipt = (orderName) => {
    
      const foundOrder = allreceiptsCopy.filter(
        (order) => order.person === orderName
      );
      console.log(foundOrder);
      const updatedState = foundOrder;
      setAllReceipts(updatedState);
  };
  // Filter receipts by order paid status. Receives User input value from Receipt.js
  const filterPaid = (orderName, paidStatus) => {
    
  }
  const filterUnpaid = (orderName) => {
    const paidReceipts = allreceiptsCopy.filter((item)=> item.paid === false);
  }
  const resetAllReceipts = () => {
    setAllReceipts(allreceiptsCopy);
  }

  return (
    <div>
      <Title title={"Korilla Receipts"} />
      <SearchReceipts filterOrders={filterReceipt} />
      <Buttons handleRestoreAll={resetAllReceipts} handleFilterPaid={filterPaid} handleFilterUnpaid={filterUnpaid} />
      <Receipts personsOrders={allreceipts} 
      hanldePaidUpdate={handlePaidStatus}/>
    </div>
  );
}

export default App;
