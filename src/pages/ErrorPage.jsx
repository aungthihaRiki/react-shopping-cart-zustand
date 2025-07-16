import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-1/2 mx-auto'>
        <div className='p-5 text-center space-y-5'>
        <h1 className='text-2xl font-bold'>404 NOT FOUND</h1>
        <p className='w-96 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cum cumque asperiores mollitia aperiam dolores, quas unde eius omnis vitae eos harum quaerat</p>
        <Link to="/" className='px-5 py-2 border cursor-pointer hover:bg-gray-200'>Back to home</Link>
        </div>
    </div>
  )
}

export default ErrorPage