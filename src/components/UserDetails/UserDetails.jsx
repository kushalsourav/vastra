const UserDetails = ({children ,userData,  toggle,setToggle,addresses}) => {

    return (
        <div className="personal-information">
        <h2>Personal information</h2>
        <div className="personal-details">
              <p className="user-email">Email: {userData.email}</p>
              <p className="user-name">Firstname : {userData.firstName}</p>
              <p className="user-name">  Lastname : {userData.lastName}</p>
          <div>
            <div className="address-details">
              <h4 className="address-header">Address Details</h4>
              <div className="address-default">
               {children}
              </div>
              <button className="btn btn-primary" onClick={() => setToggle()}>
                {addresses.length === 0 && !toggle && "Create new address"}
                { toggle && "Close Address form"} 
                {addresses.length >= 1 && !toggle && "Add new address"}
                </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserDetails;