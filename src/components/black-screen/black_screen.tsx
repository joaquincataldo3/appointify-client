import { useSelector } from 'react-redux';
import './black_screen.css';
import { getMobileNavbarOpenStatus } from '../../redux/store/features/user-features/slices/user_slices';
import { useEffect } from 'react';

export const BlackScreen = () => {

  const isMobileNavbarOpenStatus = useSelector(getMobileNavbarOpenStatus);

  useEffect(() => {
    if (isMobileNavbarOpenStatus) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavbarOpenStatus]);

  return (
    <div className={`black-screen ${isMobileNavbarOpenStatus && 'black-screen-active'}`}></div>
  )
}
