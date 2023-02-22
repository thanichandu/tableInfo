import React from 'react'

export default function Search({searchTerm, setSearchTerm}) {

   

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }


    return (
        <div>
            <input type="text" placeholder='search first_name' value={searchTerm} onChange={handleInputChange} />
            <p>{searchTerm}</p>
        </div>
    )
}