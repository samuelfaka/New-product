import React from 'react'
import Layout from './components/Navbar/layout';
import Home from './pages/home';
import Detail from './pages/details';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {

  const [orderPopup, setorderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setorderPopup(!orderPopup);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/:slug' element={<Detail />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App