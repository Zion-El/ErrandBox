import { Link } from 'react-router-dom'
import { Logo } from '../../utils/data'
import { BasicButton } from '../shared/button'
import React from 'react';
import { Popover } from 'antd';

const Header = () => {
  return (
    <div className='flex justify-between items-center border py-3 rounded-lg shadow-md px-2'>
        <Link to={'/'}><Logo/></Link>
        <DropMenu/>
        
    </div>
  )
}

export default Header



const content = (
  <div className='flex flex-col w-[150px]'>
    <Link className=' py-2 border-b font-[500] text-[16px] text-[#151515]' to={'/customer-order'}> <img src="/svg/customer.svg" className='inline mr-3' alt="icon" />Customer</Link>
    <Link className=' py-2 font-[500] text-[16px] text-[#151515]' to={'/agent'}><img src="/svg/agent.svg" className='inline mr-3' alt="icon" />Agent</Link>
  </div>
);

const DropMenu: React.FC = () => (
  <Popover content={content} title="Title">
    <div>
      <BasicButton title='Get Started'/>      
    </div>

  </Popover>
);
