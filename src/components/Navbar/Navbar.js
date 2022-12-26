import { Link} from "react-router-dom";

import './Navbar.css';

const Navbar = () => {

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
            <div>
                <ul className="navbar-list">
                    <li className="navbar-item navbar-icon">
                  <div className="badge">
                  <Link to='/Cart' className="navbar-link">
                    <span className="icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span class="status status-num">0</span>
                    </span>
                   </Link>
                  </div>
                    </li>
                    <li className="navbar-item navbar-icon">
                    <div className="badge">
                       <Link to='/Wishlist' className="navbar-link">
                    <span className="icon">
                    <i className="fas fa-heart"></i>
                    <span class="status status-num">0</span>
                    </span>
                   </Link>
                  </div>
                    </li>
                </ul>
            </div>
            <Link to='/Login' className="btn btn-primary"
            >login</Link>
        </div>
    </nav>
    </>
    )
}

export default Navbar;

