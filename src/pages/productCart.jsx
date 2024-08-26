import React from 'react'
import { Link } from 'react-router-dom';
import iconCart from '../assets/cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';


const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const {id, title, name, price, img, slug} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1,
        }));
    }
  return (
    <div className='bg-red-100 p-5 rounded-xl shadow-md'>
        <Link to={slug} >
          <img src={img} alt="" className='rounded-lg object-cover object-top drop-shadow-lg hover:scale-110' />
        </Link>
        <div className='flex flex-col gap-2'>
        <h3 className='text-sm font-semibold text-red-300 py-1 pt-2'>{title}</h3>
        <h1 className='text-sm font-semibold'>{name}</h1>
        <div className='flex justify-between items-center'>
            <p>
                $<span className='text-sm font-medium'>{price}</span>
            </p>
            <button className='text-sm font-medium bg-gray-400 p-2 rounded-3xl hover:bg-gray-100 flex gap-2 items-center' onClick={handleAddToCart}>
                <img src={iconCart} alt="" className=' w-5' />
                Add to cart
            </button>
        </div>
        </div>
    </div> 
  )
}

export default ProductCart