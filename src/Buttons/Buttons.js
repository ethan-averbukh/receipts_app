import React from 'react';

const Buttons = ({handleFilterPaid, handlerFilterUnpaid,handleRestoreAll}) => {

    return (
        <>
            <button onClick={handleFilterPaid}>Paid</button>
            <button onClick={handlerFilterUnpaid}>Unpaid</button>
            <button onClick={handleRestoreAll}>All</button>
        </>
    )
}

export default Buttons;