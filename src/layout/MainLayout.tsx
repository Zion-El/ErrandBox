import React, { ReactNode } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Container } from '../components/shared/container'

interface mainProps {
    children: ReactNode
}

const MainLayout: React.FC<mainProps> = ({children}) => {
  return (
    <div>
        <div className='fixed w-full mt-1 bg-white z-[999]'><Container><Header/></Container></div>
            {children}
        <Footer/>
    </div>
  )
}

export default MainLayout