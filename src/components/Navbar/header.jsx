import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../../assets/cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../../store/cart';


const header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect (() => {
            let total = 0;
            carts.forEach(item => total += item.quantity);
            setTotalQuantity(total);
    }, [carts])
    const handleOpenTabCart = () => {
      dispatch(toggleStatusTab());
    }
  return (
    <header className='flex justify-between items-center mb-5'>
        <Link to="/" className='text-xl font-semibold'>Home.</Link>

       <div className='flex items-center gap-5'>
           <div>
            <h1 className='text-xl font-bold text-red-800'> Your Cart</h1>
           </div>
           <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center relative' onClick={handleOpenTabCart}>
            <img src={iconCart} alt=""  className='w-6'/>
            <span className=' absolute top-2/3 right-1/2 bg-rose-500 text-white font-semibold text-sm w-5 h-5 flex justify-center items-center rounded-full'>{totalQuantity}</span>
            </div>
       </div>
    </header>
  )
}

export default header