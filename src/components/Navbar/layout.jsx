import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from './header';
import CarTab from './cartTab';
import { useSelector } from 'react-redux';

const layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTabCart);
  return (
    <div className='bg-red-200 '>
        <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-700`}>
            <Header />
            <Outlet />
        </main>
        <CarTab />
    </div>
  )
}

export default layout