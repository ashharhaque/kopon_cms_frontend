import React from 'react'
import Image from "next/image";
function SingleRestaurantLayout({children}) {
  return (
    <>
    <div className='bg-pink-400 flex  w-[100%] min-h-[15vh] '>
        <div className='bg-yellow-300 flex justify-center w-[10dvw] h-[15vh] '>
            <Image src="/images/restaurantImageBus.jpeg"
            width={90}
            height={90}
            // fill
            className='object-cover '
            />
        </div>
        <p className='bg-red-600 flex items-center'>The Family Masala</p>
    </div>
    <div>{children}</div>
    </>
    
  )
}

export default SingleRestaurantLayout