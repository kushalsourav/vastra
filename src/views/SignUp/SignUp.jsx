import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import useToast from "../../hooks/useToast";
import useToggle from "../../hooks/useToggle";
import useError from "../../hooks/useError";

const SignUp = () => {
    const {authState, authDispatch} = useAuth();
    const [toggle, setToggle] = useToggle();
    const [error, setError] = useError();
    const navigate = useNavigate();
    const postToast = useToast();
    
    const getUserInputs = async (e) => {
        e.preventDefault();
        if(authState.email !== "" && authState.firstName !== "" && authState.lastName !== ""  && authState.password !== "" && authState.password === authState.confirmPassword)  {
            try {
                await axios.post("/api/auth/signup", {
                    email: authState.email,
                    password: authState.password,
                    firstName: authState.firstName,
                    lastName: authState.lastName,
                }).then((response) => {
                    if(response.status === 201) {
                        localStorage.setItem("token", response.data.encodedToken);
                        authDispatch({type:"CLEAR_INPUTS"});
                        navigate("/Signin");
                        setError("","");
                    }
                })
            } catch (error) {
                if(error.response.status === 422) {
                    postToast("warning", "entered email already exists");
                 }
            }
        } else {
                !authState.confirmPassword && setError("confirmpassword", "password does not match");
                !authState.password && setError("password", "please enter yout password");
                !authState.lastName && setError("lastname", "please enter your last name")
                !authState.firstName &&  setError("firstname", "please enter your first name")
                !authState.email && setError("email", "please enter your email");
               }
    };
    return(
        <>
        <Form onHandleSubmit={getUserInputs} setInput={authState}  postInput={authDispatch}  setPassVisible={setToggle} passVisible={!toggle} error={error}/>
        </>
    )
};

export default SignUp;