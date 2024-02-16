import { useDispatch, useSelector } from 'react-redux'
import './navbar_list.css'
import { getMobileNavbarOpenStatus, toggleMobileNavbar } from '../../redux/store/features/user-features/slices/user_slices';

export const NavbarList = () => {

  const mobileNavbarOpenState = useSelector(getMobileNavbarOpenStatus);
  const dispatch = useDispatch();

  const handleToggleNavbar = () => {
    dispatch(toggleMobileNavbar())
  }

  return (
    <div className={`navbar-list ${mobileNavbarOpenState && 'navbar-list-active'}`}>
      <div className="close-menu-container">
        <i className='bx bx-x close-menu-icon' onClick={handleToggleNavbar}></i>
      </div>
    </div>
  )
}
