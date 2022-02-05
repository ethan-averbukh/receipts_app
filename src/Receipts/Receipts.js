import React from 'react';
import Receipt from './Receipt';


const Receipts = ({personsOrders}) => {

    const ordersArr = personsOrders.map((singleOrder, index)=> {
    return (
            <Receipt person={singleOrder.person} 
            order={singleOrder.order} 
            paid={singleOrder.paid} key={singleOrder.id}/>
    )
    });

    return (
        <div className="receipts-grid">
            {ordersArr}
        </div>
    )
}


export default Receipts;