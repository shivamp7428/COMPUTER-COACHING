import React from 'react'

const NotFound = () => {
  return (
    <>
       
            <h1 className='flex m-36 mb-20'>Home / <p className='font-bold'>404 Error</p></h1>
            <div className='text-center'>
                <h1 className='text-8xl font-bold'>404 Not Found</h1>
                <p className='m-20'>Your visited page not found. You may go home page</p>
                <button className='text-white bg-red-500 p-3 rounded mb-30'><a href="/">Back to home page</a></button>
            </div>
       
    </>
  )
}

export default NotFound
