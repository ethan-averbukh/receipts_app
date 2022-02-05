import logo from "./logo.svg";
import "./App.css";
import receipts from "./receiptsData";
import React, { useState } from "react";
import Receipts from "./Receipts/Receipts";
import SearchReceipts from "./Form/SearchReceipts";
import Title from "./Header/Title";
import Buttons from './Buttons/Buttons';

function App() {
  const [allreceipts, setAllReceipts] = useState(receipts);
  const [isPaid, setIsPaid] = useState(false);

  const filterReceipt = (orderName) => {
    const allreceiptsCopy = [...receipts];
    
      const foundOrder = allreceiptsCopy.filter(
        (order) => order.person === orderName
      );
      console.log(foundOrder);
      const updatedState = foundOrder;
      setAllReceipts(updatedState);
  };

  const filterPaid = () => {
    const allreceiptsCopy = [...receipts];
    const paidReceipts = allreceiptsCopy.filter((item)=> item.paid === true);
    setAllReceipts(paidReceipts);
  }
  const filterUnpaid = () => {
    const allreceiptsCopy = [...receipts];
  }
  const resetAllReceipts = () => {
    const allreceiptsCopy = [...receipts];
    setAllReceipts(allreceiptsCopy);
  }

  return (
    <div>
      <Title title={"Korilla Receipts"} />
      <SearchReceipts filterOrders={filterReceipt} />
      <Buttons handleRestoreAll={resetAllReceipts} handleFilterPaid={filterPaid} handleFilterUnpaid={filterUnpaid} />
      <Receipts personsOrders={allreceipts} />
    </div>
  );
}

export default App;
