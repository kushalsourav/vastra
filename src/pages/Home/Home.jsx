import { useData } from '../../contexts/DataContext/DataContext';
import Accordion from '../../components/Accordion/Accordion';
import Collection from '../../components/Collection/Collection';
import Grid12 from '../../components/UI/Grid-1-2/Grid12';
const Home = () => {
  const {data, setData} = useData();
  const setAccordion = data.category.filter((accordion) => Number(accordion.id) === data.accordion);
  let isPrev , isNext;
  isPrev = data.accordion <= 1; 
  isNext = data.accordion >= 4;
    return(
        <>
        <div className='container'>
        <Grid12>
          <Accordion accordion={setAccordion} setData={setData} isNext={isNext} isPrev={isPrev} />
          <div>
            <Collection collection={data.category}/>
          </div>
        </Grid12>
        </div>
        </>
    );
};

export default Home;