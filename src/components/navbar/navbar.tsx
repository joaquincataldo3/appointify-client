import { useSelector } from 'react-redux';
import { getUser } from '../../redux/store/features/user-features/slices/user_slices';
import { RegularBtn } from '../btn/regular-btn/regular_btn';
import { useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';


export const Navbar = () => {

  const user = useSelector(getUser);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRedirectToLogin = () => {
    if(location.pathname !== '/users/login') {
      navigate('/users/login')
    }
  }

  return (
    <nav className='navbar'>
      <div className="burger-menu-container">
        {
          user.id ?
          <i className='bx bx-menu burger-menu'></i>
          :
          <RegularBtn content='Logueate' width={100} handleClick={handleRedirectToLogin}/>
        }
      </div>
    </nav>
  )
}
