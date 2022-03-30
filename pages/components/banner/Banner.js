import React from 'react'

export default function ({pic}) {
  console.log(pic.src);
  return (
    <div className='banner_wrapper' 
        style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pic.src})`,
      }}
    >

    </div>
  )
}
