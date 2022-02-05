import React, {useState} from 'react';


const Receipt = ({person, order, paid}) => {
    

    const handlePaid = () => {
        
    }

    return (
        <div className="receipt-card">
            <h2 className="receipt-name">
                {person}
            </h2>
            <h3 className="receipt-order-main">
                    {order.main}
            </h3>
            <div className="receipt-order-items">
                <ul>
                    <li>Protein: {order.protein}</li>
                    <li>Rice: {order.rice}</li>
                    <li>Sauce: {order.sauce}</li>
                    <li>Drink: {order.drink}</li>
                    <li>Cost: {order.cost}</li>
                    <li onClick={handlePaid}>Paid: {paid.toString()}</li>
                </ul>
            </div>
        </div>
    )
}

export default Receipt;