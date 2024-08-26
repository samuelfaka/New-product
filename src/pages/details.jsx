import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../components/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';

const Details = () => {
  const { slug}  = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug);
    if(findDetail.length > 0){
       setDetail(findDetail[0]);
    }else{
      window.location.href ='/';
    }
  }, [slug])

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  }
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity,
    }));
  }
  return (
    <div className='shadow-md p-2 bg-red-300 rounded-2xl'>
      <h2 className='text-3xl text-center'>PRODUCT DETAIL</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
          <div>
            <img src={detail.img} alt=""   className=' rounded-2xl object-cover object-top drop-shadow-lg    '/>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-sm uppercase font-semibold'>{detail.name}</h1>
            <p className='font-bold text-xs'>
              ${detail.price}
            </p>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='flex gap-2 justify-center items-center'>
                  <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                  <span className='h-full w-10 font-bold text-xs rounded-xl flex justify-center items-center'>{quantity}</span>
                  <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                </div>
               <div className='flex items-center justify-center'>
               <button className='text-xs font-semibold bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl hover:scale-110' onClick={handleAddToCart}>
                  Add to cart
                </button>
               </div>
            </div>
            <p className='text-xs font-bold text-white hover:text-gray-700'>
              {detail.description}
            </p>
          </div>
      </div>
    </div>
  )
}

export default Details