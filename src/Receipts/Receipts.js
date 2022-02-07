import React from 'react';
import Receipt from './Receipt';

//Receipts extracts the properties of each persons order and passes the data down as props into each individual Receipt component.
// Order object is passed down as well.
// Event Handler which changes the Paid status on the receipt is passed down .
const Receipts = ({personsOrders, handlePaidUpdate}) => {

    const ordersArr = personsOrders.map((singleOrder, index)=> {
    return (
            <Receipt person={singleOrder.person} 
            order={singleOrder.order} 
            paid={singleOrder.paid} key={singleOrder.id}
            handlePaid={handlePaidUpdate}/>
    )
    });

    return (
        <div className="receipts-grid">
            {ordersArr}
        </div>
    )
}


export default Receipts;