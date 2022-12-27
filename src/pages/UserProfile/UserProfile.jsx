import {v4 as uuid} from "uuid";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import Grid12 from "../../components/UI/Grid-1-2/Grid12";
import Form from "../../components/Form/Form";
import Address from "../../components/Address/Address";
import { useData } from "../../contexts/DataContext/DataContext";
import "./UserProfile.css";
import useToggle from "../../hooks/useToggle";
import useError from "../../hooks/useError";
import UserDetails from "../../components/UserDetails/UserDetails";

const UserProfile = () => {
  const {data, setData} = useData();
  const {authState} = useAuth();
  const [toggle, setToggle] = useToggle();
  const [error, setError] = useError();
const handleAddress = (e) => {
  e.preventDefault();
  const {addressBook} = data;
  if(addressBook.address !== "" && addressBook.phoneNumber !== "" && addressBook.pincode !== "" && addressBook.city !== "" && addressBook.town !== "") {
    data.addresses.map((addresses) =>  addresses._id = uuid());
    setData({type:"ADDRESS" , address: data.addressBook})
    setData({type:"CLEAR_INPUTS"})
    setToggle(false)
    setError("","")
  } else {
    !addressBook.pincode && setError("pincode", "Please enter your city pincode");
    !addressBook.town && setError("town", "Please enter your town");
    !addressBook.city && setError("city", "Please enter your city name");
    !addressBook.phoneNumber && setError("phonenumber", "Please enter your mobile number");
    !addressBook.address && setError("address", "Please enter your address");
  }
}
const handleDelete = (currAddress) => {
  setData({type:"REMOVE_ADDRESS" , addressId : currAddress._id })
   }
    return(
        <>
        <Grid12>
          <UserDetails userData={authState.userData} toggle={toggle} setToggle={setToggle} addresses={data.addresses} >
          <Address addresses={[data.defaultAddress]} handleDelete={handleDelete}  />
          </UserDetails>
          <div>
            <div  style={{display: toggle ?"none": "block"}}>
            <Address addresses={data.addresses} handleDelete={handleDelete} setData={setData} />
            </div>
            <div style={{display: toggle ?"block": "none"}}>
            <Form setInput={data.addressBook} postInput={setData}  onHandleSubmit={handleAddress} error={error}/>
            </div>
          </div>
        </Grid12>
        </>
    );
};

export default UserProfile;