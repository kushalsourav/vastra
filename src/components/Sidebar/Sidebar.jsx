import './Sidebar.css';
const Sidebar = ({categories, filterCategory, setData, rating, sort, range}) => {
    return(
        <>
         <div className="sidebar">
                <form action="#" className="sidebar-filter">
                    <div className="filter">filter 
                    <input type="reset" 
                    className="btn btn-primary-outline"
                    onClick={() => setData({type:"RESET"})}
                    />
                    </div>
                    <div className="range">
                        <h4 className="heading-quaternary">Price</h4>
                        <div>
                            <div className="range-value">
                                <span>low</span>
                                <span>high</span>
                            </div>
                            <input type="range" min="1000" max="14000" className="slider"
                             value={range}
                             onChange={(e) => setData({type:"RANGE", range:e.target.value})}/>
                        </div>
                    </div>
                    <div className="categories">
                        <h4>category</h4>
                        {
                            categories.map(({categoryName}) => {
                                return(
                                <label key={categoryName} htmlFor={categoryName}>
                                <input type="checkbox" id={categoryName} 
                                checked={filterCategory.filterChecked && filterCategory.filterCategoryName === categoryName} 
                                onChange={(e) =>setData({type:"FILTER" ,filterChecked: e.target.checked, filterCategoryName:categoryName}) } /> : {categoryName}
                                </label>
                                )
                            })
                        }
                    </div>
                    <div className="categories">
                        <h4>Rating</h4>
                        <label>
                               <input type="radio" 
                                   onChange={() => setData({type:"RATING", rating:"FIVE"})}
                                   checked={rating === 'FIVE'}
                               /> 4stars and above
                             </label>
                        <label>
                            <input type="radio" 
                            onChange={() => setData({type:"RATING", rating:"FOUR"})}
                            checked={rating === "FOUR"}
                            /> 3stars and above
                              </label>
                        <label>
                            <input type="radio" 
                            onChange={() => setData({type:"RATING", rating:"THREE"})}
                            checked={rating === "THREE"}
                            /> 2stars and above
                             </label>
                        <label>
                            <input type="radio" 
                            onChange={() => setData({type:"RATING", rating:"TWO"})}
                            checked={rating === "TWO"}
                            /> 1stars and above
                            </label>
                    </div>
                    <div className="categories">
                        <h4>sort</h4>
                        <label>
                            <input type="radio"
                            onChange={() => setData({type:"SORT", sort:"HIGH_TO_LOW"})}
                            checked={sort === "HIGH_TO_LOW"}
                            /> Price - high to low
                        </label>
                        <label>
                            <input type="radio"
                            onChange={() => setData({type:"SORT", sort:"LOW_TO_HIGH"})}
                            checked={sort === "LOW_TO_HIGH"}
                            /> Price - low to high
                        </label>
                    </div>
                </form>
            </div>
        
        </>
    );
};

export default Sidebar;