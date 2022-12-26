import { Link } from 'react-router-dom';
import './Collection.css';
const Collection = ({collection}) => {

    return(
        <>
        <div className='collection-container'>
        <h3 className='collection-header'>Our collection</h3>
        <div className='collection'>
        {
            collection.map((collection) => {
                return(
                    <Link to='/Products' className='collection-items' key={collection._id} style={{backgroundImage: `url(${collection.image})`}}>
                     <p className='collection-name'>{collection.categoryName}</p>
                    </Link>
                 
                )
            })
        }
        </div>
        </div>
        </>
    );
};

export default Collection;