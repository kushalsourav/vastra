import { useLocation } from "react-router-dom";
import Input from "./Input/Input";
import "./Form.css";


const Form = ({setInput,postInput, onHandleSubmit, setPassVisible, passVisible, error}) => {
    const location = useLocation();
    let form;
    switch (location.pathname){
        case "/Signin":
            form = <>
                <Input name="email" placeholder="Enter your email" id="Email" value={setInput.email} postInput={postInput}/> 
                <Input name="password" setPassVisible={setPassVisible} passVisible={passVisible} placeholder="Enter your password" id="password" value={setInput.password} postInput={postInput} /> 
            </>
            break;
        case "/Profile":
            form = <>
                <Input name="address" id="Address" placeholder="Enter the address" postInput={postInput} value={setInput.address} error={error} />
                <Input name="phoneNumber" id="phoneNumber" placeholder="Enter the your mobile number" postInput={postInput} value={setInput.phoneNumber} error={error}  />
                <Input name="city" id="City" placeholder="Enter the city" postInput={postInput} value={setInput.city} error={error}  />
                <Input name="town" id="town" placeholder="Enter the town" postInput={postInput} value={setInput.town}  error={error} />  
                <Input name="pincode" id="Pincode" placeholder="Enter the pincode" postInput={postInput} value={setInput.pincode} error={error}  />
            </>
            break;
        default:
            form = <>
                <Input name="email" placeholder="Enter your email" id="Email" value={setInput.email} postInput={postInput} error={error} /> 
                <Input  name="firstName" placeholder="Enter your firstname"  id="firstname" value={setInput.firstName} postInput={postInput} error={error} /> 
                <Input  name="lastName" placeholder="Enter your lastname" id="lastname" value={setInput.lastName} postInput={postInput}  error={error}/>
                <Input  name="password"  setPassVisible={setPassVisible} passVisible={passVisible} placeholder="Enter your password" value={setInput.password} id="password" postInput={postInput} error={error} /> 
                <Input  name="confirmPassword"  setPassVisible={setPassVisible} passVisible={passVisible} placeholder="Confirm your password" value={setInput.confirmPassword} id="password" postInput={postInput} error={error} /> 
            </>
            break;
    }
    return(
        <>
        <form className="form-box" onSubmit={onHandleSubmit}>
              {form}
            <div className="form-btn">
                 <button className="btn btn-primary btn-large">submit</button> 
            </div>
        </form>
        </>
    );
};

export default Form;