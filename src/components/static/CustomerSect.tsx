
import { Link } from 'react-router-dom'
import { CustomerCardData } from '../../utils/data'
import { FlipCard } from '../shared'
import { BasicButton } from '../shared/button'

const CustomerSect = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center md:justify-between gap-8 md:overflow-x-scroll lg:overflow-x-hidden'>
        {
          CustomerCardData.map((i)=><FlipCard
            title={i.title}
            desc={i.desc}
            logoUrl={i.logoUrl}
            imgUrl={i.imgUrl}
            border={i.border}
            url='/customer-order'
            bgColor={i.bgColor}
            btnText='Start an Errand'
          />)
        }
      </div>    

      <div className='bg-[#CDD3E2] p-4 flex md:justify-center items-center h-[470px] lg:h-[450px] rounded-lg flex-col relative mt-[2.5rem] lg:mt-[6rem] gap-6 z-[-1]'>
        <div className='hidden lg:block'>
          <Pill style='top-0 lg:top-14 left-10 text-black' title={'Grocery Shopping'} bgColor={'#FFDCCC'}/>
          <Pill style='left-[8rem] top-[13rem] text-black' title={'Food Shopping'} bgColor={'#CDECE3'}/>
          <Pill style='bottom-14 left-[12rem] text-white' title={'Gift Procurement'} bgColor={'#FE5000'}/>
          <Pill style='top-[6rem] right-[8rem] text-white' title={'Bridal Accessories'} bgColor={'#FE5000'}/>
          <Pill style='bottom-[6rem] right-[8rem] text-black' title={'Office Lunch'} bgColor={'#CDECE3'}/>          
        </div>


        <img src='/svg/world.svg' alt='world' className='absolute bottom-0 left-0 lg:w-[500px] z-[-1]' />
        <div className='flex w-full justify-center'>
          <p className='text-center font-[600] lg:w-[50%] lg:font-[500] font-Int text-[18px] lg:text-[30px] leading-[24px] md:leading-[36px]'>From Grocery Runs to Gift Shopping, We've Got You Covered!</p>
        </div>
        <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>

        <div className='relative lg:hidden w-full h-full'>
          <Pill style='top-14 right-0 text-black w-[150px]' title={'Grocery Shopping'} bgColor={'#FFDCCC'}/>
          <Pill style='bottom-0 right-0 text-black  w-[150px]' title={'Food Shopping'} bgColor={'#CDECE3'}/>
          <Pill style='top-[11rem] left-16 text-white  w-[150px]' title={'Gift Procurement'} bgColor={'#FE5000'}/>
          <Pill style='top-0 left-0 text-white  w-[150px]' title={'Bridal Accessories'} bgColor={'#FE5000'}/>
          <Pill style='top-[7rem] left-0 text-black  w-[150px]' title={'Office Lunch'} bgColor={'#CDECE3'}/> 
        </div>


      </div>

      <div className='hidden lg:grid grid-cols-5 gap-6 py-14'>
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

      
      <div className='lg:hidden relative pt-16'>            
        <div className='flex items-end'><img className='w-[50px]' src="/svg/ghost.svg" alt="staff" /></div>
          <div className='w-full flex flex-col justify-center items-center gap-6'>
              <h1 className=' font-[600] lg:w-[50%] lg:font-[500] font-Int text-[18px] lg:text-[24px] leading-[24px] md:leading-[36px]'>Meet the Heroes behind Errandbox!</h1>
              <p className='text-center font-[400] font-Int md:w-[70%] text-[16px]'>We’re a diverse, close-knit team on an adventure to build something enduring, while learning something new, every day.</p>
            </div>
        <div className='lg:hidden grid grid-cols-2 gap-6 py-14'>
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

export default CustomerSect

interface pillProps{
  title:string;
  bgColor:string
  style:string
}
interface overlayProps{
  title:string;
  position:string
}

const Pill = ({title, bgColor, style}:pillProps) =>{
  return(
    <button style={{backgroundColor:bgColor}} className={` border-2 font-[600] rounded-md border-[#052370] absolute p-3 font-Int text-[12px] md:text-[16px] ${style}`}>{title}</button>
  )
}
export const Overlay = ({title, position}:overlayProps) =>{
  return(
    <button className={`staff-overlay rounded-b-xl  w-full  border-[#052370] absolute bottom-0  font-Int text-[12px] md:text-[16px]`}>
      <p className='text-center font-Int font-[500] text-[16px] text-white'>{title}</p>
      <p className='text-center font-Int font-[500] text-[16px] text-[#FE5000]' >{position}</p>
    </button>
  )
}