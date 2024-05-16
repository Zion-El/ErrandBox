import React from 'react'

const Loader:React.FC = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <img src="/svg/ErrandLogo.svg" alt="logo" className='w-[200px] h-[200px]' />
    </div>
  )
}

export default Loader