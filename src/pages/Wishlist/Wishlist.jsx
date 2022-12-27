import { deleteWishlist } from '../../apis/Apis';
import Grid14 from '../../components/UI/Grid-1-4/Grid14';
import WishlistCard from '../../components/WishlistCard/WishlistCard';
import { useData } from '../../contexts/DataContext/DataContext';
import useToast from '../../hooks/useToast';
import NoData from "../../components/NoData/NoData";
import './Wishlist.css';

const Wishlist = () => {
    const {data, checkIsProduct ,  setData} = useData();
    const postToast = useToast();
    return(
        <>
        <div className="container">
            <Grid14>
                {data.wishlist.length === 0 && <NoData />}
              <WishlistCard  
              wishlist={data.wishlist} 
              checkIsProduct={checkIsProduct}  
              deleteWishlist={deleteWishlist} 
              setData={setData}
              postToast={postToast}
              />
            </Grid14>
        </div>
        </>
    );
};

export default Wishlist;