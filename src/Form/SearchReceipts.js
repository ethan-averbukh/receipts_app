import React, {useState} from 'react';



const SearchReceipts = (props) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.filterOrders(inputValue);
        //Filter out the array for the name searched
    
    }
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text"
                     placeholder={"Search By Name"}
                     value={inputValue}
                     onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SearchReceipts;