import React, { useState, useEffect } from 'react';
import { products } from './products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../store/cart';

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find((product) => product.id === productId);
    setDetail(findDetail);
  }, [productId]);


  const handleMinusQuantity = () => {
    const newQuantity = quantity - 1;
  
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: newQuantity,
      })
    );
  };
  

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  if (!detail) return null;

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.img} alt={detail.name} className="w-12" />
      <h3>{detail.name}</h3>
      <p>
        $<span>{detail.price * quantity}</span>
      </p>
      <div className="w-20 flex justify-between gap-5">
        <button
          className="bg-gray-200 rounded-full w-7 h-7 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-7 h-7 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
