import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/products';
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import RatingSection from '../components/RatingSection';

function ProductDetail() {
    const {productId} = useParams();
    const currentProduct = products.find(product => product.id == productId);
  return (
    <Container>
        <BreadCrumb currentPageTitle={"Product Detail"} />
        <div className="grid grid-cols-2 border px-5 py-3">
            <div className="col-span-1">
                <img className='w-3/5 mx-auto block' src={currentProduct.image} alt="{currentProduct.title}" />
            </div>
            <div className="col-span-1 flex flex-col gap-5 items-start">
                <h1 className='text-2xl font-bold'>{currentProduct.title}</h1>
                <p className='inline-block px-5 py-1 bg-gray-200 text-gray-700'>{currentProduct.category}</p>
                <p className='text-gray-600'>{currentProduct.description}</p>
                <RatingSection currentRate={currentProduct.rating.rate} />
                <div className='flex justify-between items-center w-full'>
                    <p className='font-semibold text-xl'>{currentProduct.price} $</p>
                    <button className="border text-sm px-2 py-1 cursor-pointer hover:bg-gray-200">Add Cart</button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ProductDetail