import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../cartItem';
import { toggleStatusTab } from '../../store/cart';
import { products } from '../products';

const CartTab = ({handleOrderPopup}) => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();


  const totalPrice = carts.reduce((total, item) => {
    const product = products.find((product) => product.id === item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-900 shadow-2xl w-[90vw] lg:w-[30vw] h-[100vh] grid grid-rows-[60px_1fr_60px]
    transform transition-transform duration-700
    ${statusTab === false ? 'translate-x-full' : ''}`}
    >
      <h2 className="p-5 text-white text-2xl font-semibold hover:text-red-500">
        Your Shopping Cart
      </h2>
      <div>
        {carts.map((item) => (
          <div key={item.productId}>
            <CartItem data={item} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pl-2">
        <h1 className="font-semibold text-white text-xs">Order Total :</h1>
        <p className='text-white'>
          $<span className="font-semibold text-white">{totalPrice.toFixed(2)}</span>
        </p>
        <div></div>
      </div>
      <div className="grid grid-cols-2 h-[10vh]">
        <button
          className="bg-black text-white text-xs font-bold"
          onClick={handleCloseTabCart}
        >
          CLOSE
        </button>
        <button
        onClick={() => handleOrderPopup()}
        className="bg-red-500 text-xs font-bold text-white">
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};

export default CartTab;
