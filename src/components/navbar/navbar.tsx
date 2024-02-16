import { useDispatch, useSelector } from 'react-redux';
import { getMobileNavbarOpenStatus, getUser } from '../../redux/store/features/user-features/slices/user_slices';
import { RegularBtn } from '../btn/regular-btn/regular_btn';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggleMobileNavbar } from '../../redux/store/features/user-features/slices/user_slices';
import './navbar.css';
import { NavbarList } from '../mobile-aside/navbar_list';


export const Navbar = () => {

  const user = useSelector(getUser);
  const mobileNavbarOpenState = useSelector(getMobileNavbarOpenStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRedirectToLogin = () => {
    if (location.pathname !== '/users/login') {
      navigate('/users/login')
    }
  }

  const handleToggleNavbar = () => {
    dispatch(toggleMobileNavbar())
  }


  return (
    <nav className='navbar'>
      <div className="burger-menu-container">
        {
          user.id ?
            mobileNavbarOpenState ?
              <i className='bx bx-menu-alt-left burger-menu' onClick={handleToggleNavbar}></i>
              :
              <i className='bx bx-menu burger-menu' onClick={handleToggleNavbar}></i>
            :
            <RegularBtn content='Logueate' width={100} handleClick={handleRedirectToLogin} />
        }
        <NavbarList />
      </div>
    </nav>
  )
}
