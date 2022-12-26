import {useData} from '../../contexts/DataContext/DataContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import Grid13 from '../../components/UI/Grid-1-3/Grid13';
import Grid28 from '../../components/UI/Grid-2-8/Grid28';
import './Products.css';
import Sidebar from '../../components/Sidebar/Sidebar';

const Products = () => {
    const {data, setData, filteredData} = useData();
    return(
        <>
        <Grid28>
        <div>
            <Sidebar
             categories={data.category} 
             filterCategory={data.filterCategory}  
             setData={setData} 
             rating={data.rating} 
             sort={data.sort}
             range={data.range}
             />
        </div>
        <div className='products'>
        <Grid13>
            <ProductCard 
            products={filteredData} 
            filterBySearch={data.search} 
            filterCategory={data.filterCategory} 
            />
        </Grid13>
        </div>
        </Grid28>
        </>
    );
};

export default Products;