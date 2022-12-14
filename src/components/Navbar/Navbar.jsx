import { Link, useLocation} from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = ({filterBySearch, setData, login, authDispatch, cartItems, wishlistItems}) => {
  const location = useLocation();

    return(
    <>
    <nav className="navbar">
        <Link to="/" className="navbar-title">
            NoVo
        </Link>
        <div className="navbar-links">
            <Link to="/Products" className="navbar-link">Products</Link>  
        </div>
        <div className="navbar-items">
                <div className={"nav-form "} style={{display: location.pathname === "/Products" ? "block" : "none"}}>
                    <SearchBar  filterBySearch={filterBySearch} setData={setData}/>
                </div>
        </div>
        <div className="navbar-items">
            { login && 
                <Link to='/Profile' >
                    <div className="avatar avatar-quaternary">
                        <img src={avatar} alt="avatar-quaternary" className="img-responsive img-round nav-img" />
                    </div>
                </Link>
            }
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
                                    {wishlistItems && <span className="status status-num">{wishlistItems}</span>}
                                    </span>
                                </Link>
                            </div>
                        </li>
                </ul>
            </div>
            <Link to='/Signin' className="btn btn-primary" onClick={() => 
            { login && 
            setData({type:"RESET_STORE"})
            authDispatch({type:"LOGIN", payload:false, token:localStorage.removeItem("token")})}}>
            {login ? "logout" : "login"}
            </Link>
        </div>
    </nav>
    </>
    
    );
};

export default Navbar;

