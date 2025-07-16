import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer className='text-center bg-black text-white mx-5 py-1 mt-auto'>
        <p>Copyright &copy; {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer