import './SearchBar.css'


const SearchBar = ({searchInput, setSearchInput}) => {

    return ( 
        <form className='searchBar-form'>
            <div className="searchBar-form-group">
                <label>Search Here!</label>
                <input type="text" className="form-control" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
            </div>
            <button type="submit" className="search btn btn-primary" >Filter</button>
        </form>
     );
}
 
export default SearchBar;