import './SearchBar.css';
const SearchBar = ({filterBySearch, setData}) => {
    return (
        <>
        <span className="search-icon"><i className="fas fa-search"></i></span>
        <input type="text" 
        name="search"
        className="input"
        value={filterBySearch}
        onChange={(e) => setData({type:"INPUT" , name:e.target.name , input:e.target.value})}
        onBlur={(e) => setData({type:"INPUT" , name:e.target.name , input:""})}
        />
        </>
    );
};

export default SearchBar;