import React from 'react';


//Buttons which control the order cards. Filter by Paid status: One handles True, another handles false (hmm maybe 1 should handle both?);
// Restore all event handler replaces all of the orders on the screen.
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