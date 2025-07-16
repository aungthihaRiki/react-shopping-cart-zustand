import React from 'react'

function Container({children, className=""}) {
  return (
    <div className={`w-[360px] md:w-[720px] lg:w-[960px] xl:w-[1000px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container;