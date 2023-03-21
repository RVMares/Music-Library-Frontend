import React, { useState } from 'react';

const SearchBar = (props) => {
    
    const [searchInput, setSearchInput] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let filterValue = {
            searchInput: searchInput
        };
        console.log(filterValue);

        props.filterSongsByValue(filterValue);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Search Here!</label>
                <input type="text" className="form-control" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" >Filter</button>
        </form>
     );
}
 
export default SearchBar;