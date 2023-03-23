const SearchBar = (searchInput, setSearchInput) => {
    
    return ( 
        <form>
            <div className="form-group">
                <label>Search Here!</label>
                <input type="text" className="form-control" value={searchInput} onSubmit={(event) => setSearchInput(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" >Filter</button>
        </form>
     );
}
 
export default SearchBar;