import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './views/home/home';
import { SharedLayout } from './components/shared-layout/shared_layout';
import './style_variables.css';

import { UserLogin } from './views/user-login/user_login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserCookie } from './redux/store/features/user-features/slices/user_slices';
import { AppThunkDispatch } from './redux/store/store/store';
import { UserProfile } from './views/user-profile/user_profile';

function App() {

  const location = useLocation();
  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(checkUserCookie())
  }, [location])

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='users'>
            <Route path='login' element={<UserLogin />} />
            <Route path='profile' element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
