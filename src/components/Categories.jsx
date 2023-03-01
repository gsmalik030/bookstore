import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const msg = useSelector((state) => state.categories);
  const dispatch = useDispatch();



  return (
    <>
      <button onClick={()=>dispatch(checkStatus())} type="button">
        Check status
      </button>
      <p>{msg}</p>
    </>
  );
};

export default Categories;
