import { useNavigate} from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useNavigate();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}      
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search BCIT Programs
                </span>
            </label>

            <h1>Search Programs</h1>
            <div className ='searchBar'>
                <input
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search Programs Here"
                    name="s"
                />
                <button id= "searchBtn" type="submit">Search</button>
            </div>
        </form>
    );
};

export default SearchBar;