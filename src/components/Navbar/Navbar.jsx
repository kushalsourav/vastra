import { Link, useLocation} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import './Navbar.css';

const Navbar = ({filterBySearch, setData, login, authDispatch, cartItems}) => {
  const location = useLocation();

    return(
    <>
    <nav className="navbar">
        <div className="navbar-title">
            NoVo
        </div>
        <div className="navbar-links">
            <Link to="/"  className="navbar-link"> Home </Link> 
            <Link to="/Products" className="navbar-link">Products</Link>  
        </div>
        <div className="navbar-items">
                <div className={"nav-form "} style={{display: location.pathname === '/Products' ? "block" : "none"}}>
                    <SearchBar  filterBySearch={filterBySearch} setData={setData}/>
                </div>
            </div>
        <div className="navbar-items">
        <div>
                <ul className="navbar-list">
                        <li className="navbar-item navbar-icon">
                            <div className="badge">
                                <Link to='/Cart' className="navbar-link">
                                    <span className="icon">
                                    <i className="fas fa-shopping-cart"></i>
                                    </span>
                                    {cartItems && <span className="status status-num">{cartItems}</span> } 
                                </Link>
                            </div>
                        </li>
                        <li className="navbar-item navbar-icon">
                            <div className="badge">
                                <Link to='/Wishlist' className="navbar-link">
                                    <span className="icon">
                                    <i className="fas fa-heart"></i>
                                     <span className="status status-num">0</span>
                                    </span>
                                </Link>
                            </div>
                        </li>
                </ul>
            </div>
            <Link to='/Signin' className="btn btn-primary" onClick={() => 
            { login && 
            authDispatch({type:"LOGIN", login:false, token:localStorage.removeItem("token")})}}>
            {login ? "logout" : "login"}
            </Link>
        </div>
    </nav>
    </>
    )
}

export default Navbar;

