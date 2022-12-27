import { Link } from 'react-router-dom';
import './Address.css';
const Address = ({addresses, handleDelete, setData}) => {
    return (
        <>
         <div className="shipping-address">
        {addresses.map((address) => {
            return(
                <div key={address._id || 1}  className="card-text" onClick={() =>{setData && setData({type:"DEFAULT_ADDRESS", defaultAddress:address})}}>
                    <div  className="card-head">
                            <div className="card-title">Deliver to -</div>
                    </div>
                    <div  className="card-body">
                        {!address.address && !address.state  && <Link to='/Profile'><p>select an address {"-->"}</p></Link>}
                    <ul className='address-description'>
                        <li className='address-items'>{address.address}</li>
                        <li className='address-items'>{address.phoneNumber}</li>
                        <li className='address-items'>{address.state}</li>
                        <li className='address-items'>{address.city}</li>
                        <li className='address-items'>{address.pincode}</li>
                    </ul>
                    {
                        <button className='btn-tertiary-outline btn-remove' onClick={() => handleDelete(address)}>Remove address</button>
                    }
                    </div>
                </div>
            )
        })
        }
        </div>
        </>
    );
};

export default Address;