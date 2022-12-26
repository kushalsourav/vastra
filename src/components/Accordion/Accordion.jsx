import { Link } from "react-router-dom";
import "./Accordion.css";

const Accordion = ({accordion, setData , isNext, isPrev}) => {
    return(
        <>
        <div className="accordion">
        {
            accordion.map((accordion) => {
                return (
                    <div key={accordion._id} className="accordion-content product" style={{backgroundImage: `url(${accordion.image})`}}>
                    <div className="overlay">
                        <div className="overlay-content">
                            <div className="overlay-head">
                                <span>50%</span>
                                <span>offer</span>
                            </div>
                            <p className="text-primary">{accordion.categoryName}</p>
                            <Link to="/Products" className="btn btn-secondary-outline"
                            >Shop now!</Link>
                        </div>
                    </div>
                    </div>
                );
            })}
               <div className="btn-links">
                    <button 
                    className="btn-primary float left" 
                    onClick={() => setData({type:"ACCORDION",accordion:-1})} 
                    disabled={isPrev}>
                    <span>
                        <i className="icon fas fa-arrow-left"></i>
                    </span>
                    </button>
                    <button 
                    className="btn-primary float right" 
                    onClick={() => setData({type:"ACCORDION",accordion:1})} 
                    disabled={isNext}>
                    <span>
                        <i className="icon fas fa-arrow-right"></i>
                    </span>
                    </button>
                </div>
        </div>
        </>
    );
};

export default Accordion;