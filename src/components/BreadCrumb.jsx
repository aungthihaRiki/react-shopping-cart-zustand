import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumb({ currentPageTitle}) {
  return (
    <div className='w-full flex gap-3 mb-3'>
        <Link to={"/"} className='text-gray-500 hover:text-gray-700'>Home</Link>
        <span className='text-gray-500'>/</span>
        <p className='font-semibold'>{currentPageTitle}</p>
    </div>
  )
}

export default BreadCrumb