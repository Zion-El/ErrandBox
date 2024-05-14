
import { Link } from 'react-router-dom'
import { AgentCardData } from '../../utils/data'
import { FlipCard } from '../shared'
import { BasicButton } from '../shared/button'
import { Overlay } from './CustomerSect'

const AgentSect = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center lg:justify-between gap-8'>
        {
          AgentCardData.map((i)=><FlipCard
            title={i.title}
            desc={i.desc}
            logoUrl={i.logoUrl}
            imgUrl={i.imgUrl}
            border={i.border}
            bgColor={i.bgColor}
            btnText='Become an Agent'
          />)
        }
      </div>    

      <div className='bg-[#FFECE4] p-4 flex lg:justify-center items-center h-[400px] lg:h-[450px] rounded-lg flex-col relative mt-[2.5rem] lg:mt-[6rem] gap-6 z-[-1]'>
        <img src='/svg/world2.svg' alt='world' className='absolute bottom-0 left-0 w-[650px] z-[-1]' />
        <div>
          <p className='text-center font-[500] font-Int text-[18px] lg:text-[30px] leading-[36px]'>Our Agents are accessible Anywhere You Are</p>
        </div>
        <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>
      </div>

      <div className='hidden md:grid grid-cols-5 gap-6 py-14'>
          <div className='border-b-[3px] border-l-[3px] rounded-[14px] border-[#FE5000] staff'><img src="/png/staff4.png" alt="staff" /><Overlay title={'Daniel Umoh'} position='Founder & CEO'/>
            
          </div>
          <div className='border-b-[3px] border-l-[3px] rounded-[14px] border-[#FE5000] staff'><img src="/png/staff2.png" alt="staff" /><Overlay title={'Faith Ugbeshe'} position='C0-Founder & COO'/> </div>
          <div className='col-span-2 '>
            <h1 className=' font-[600] lg:w-[50%] lg:font-[500] font-Int text-[18px] lg:text-[24px] leading-[24px] md:leading-[36px]'>Meet the Heroes behind Errandbox!</h1>
            <p className='text-left font-[400] font-Int md:w-[70%] text-[16px]'>We’re a diverse, close-knit team on an adventure to build something enduring, while learning something new, every day.</p>
          </div>
          <div className='flex items-end'><img className='w-[100px]' src="/svg/ghost.svg" alt="staff" /></div>
          <div></div>
          <div className='border-b-[3px] border-l-[3px] rounded-[14px] border-[#FE5000] staff'><img src="/png/staff3.png" alt="staff" /><Overlay title={'Muztir San '} position='CPO'/></div>
          <div className='border-b-[3px] border-l-[3px] rounded-[14px] border-[#FE5000] staff'><img src="/png/staff1.png" alt="staff" /><Overlay title={'Uduak Nkom '} position='CRM'/></div>
      </div>

      
      <div className='md:hidden relative pt-16'>            
        <div className='flex items-end'><img className='w-[50px]' src="/svg/ghost.svg" alt="staff" /></div>
          <div className='w-full flex flex-col justify-center items-center gap-6'>
              <h1 className=' font-[600] lg:w-[50%] lg:font-[500] font-Int text-[18px] lg:text-[24px] leading-[24px] md:leading-[36px]'>Meet the Heroes behind Errandbox!</h1>
              <p className='text-center font-[400] font-Int md:w-[70%] text-[16px]'>We’re a diverse, close-knit team on an adventure to build something enduring, while learning something new, every day.</p>
            </div>
        <div className='md:hidden grid grid-cols-2 gap-6 py-14'>
          <div>
            <div className='border-b-[3px] border-l-[3px] rounded-[14px] border-[#FE5000] staff'>
              <img src="/png/staff4.png" alt="staff" />
            </div>            
            <p className='text-center font-Int font-[500] text-[14px]'>Daniel Umoh <span className='text-[#FE5000]'>CEO</span></p>
          </div>
          <div>
            <div className='border-b-[3px] border-l-[3px] rounded-[14px] border-[#FE5000] staff'>
              <img src="/png/staff2.png" alt="staff" />
            </div>            
            <p className='text-center font-Int font-[500] text-[14px]'>Faith Ugbeshe <span className='text-[#FE5000]'>COO</span></p>
          </div>
          <div>
            <div className='border-b-[3px] border-l-[3px] rounded-[14px] border-[#FE5000] staff'>
              <img src="/png/staff3.png" alt="staff" />
            </div>            
            <p className='text-center font-Int font-[500] text-[14px]'>Muztir San <span className='text-[#FE5000]'>CPO</span></p>
          </div>
          <div>
            <div className='border-b-[3px] border-l-[3px] rounded-[14px] border-[#FE5000] staff'>
              <img src="/png/staff1.png" alt="staff" />
            </div>            
            <p className='text-center font-Int font-[500] text-[14px]'>Uduak Nkom <span className='text-[#FE5000]'>CRM</span></p>
          </div>
        </div>        
      </div>
    </>

  )
}

export default AgentSect