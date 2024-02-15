import { Routes, Route } from 'react-router-dom';
import { Home } from './views/home/home';
import { SharedLayout } from './components/shared-layout/shared_layout';
import './style_variables.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
