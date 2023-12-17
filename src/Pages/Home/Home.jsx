import './Home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();

  const onHistory = () => {
    navigate("/history");
};
  return (
    <main className='home-container'>
            <button className='btn btn-secondary m-3' onClick={onHistory}>Chat History</button>    
    </main>
  )
}
