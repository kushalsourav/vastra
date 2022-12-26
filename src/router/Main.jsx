import Navbar from "../components/Navbar/Navbar";
import { useData } from "../contexts/DataContext/DataContext";
import Router from "./Router/Router";


const Main = () => {
const {data, setData} = useData();
    return (
        <>
        <Navbar filterBySearch={data.search} setData={setData} />
        <Router />
        </>
    );
};

export default Main;