
import { Link } from 'react-router-dom'
import { CustomerCardData } from '../../utils/data'
import { FlipCard } from '../shared'
import { BasicButton } from '../shared/button'

const CustomerSect = () => {
  return (
    <>
      <div className='flex justify-between gap-8 overflow-x-scroll lg:overflow-x-hidden'>
        {
          CustomerCardData.map((i)=><FlipCard
            title={i.title}
            desc={i.desc}
            logoUrl={i.logoUrl}
            imgUrl={i.imgUrl}
            border={i.border}
            bgColor={i.bgColor}
          />)
        }
      </div>    

      <div className='bg-[#CDD3E2] flex justify-center items-center h-[250px] md:h-[350px] rounded-lg flex-col relative mt-[3rem] gap-6 z-[-1]'>
        <Pill style='top-14 left-10 text-black' title={'Grocery Shopping'} bgColor={'#FFDCCC'}/>
        <Pill style='left-[8rem] text-black' title={'Food Shopping'} bgColor={'#CDECE3'}/>
        <Pill style='bottom-14 left-[12rem] text-white' title={'Gift Procurement'} bgColor={'#FE5000'}/>
        <Pill style='top-[6rem] right-[8rem] text-white' title={'Bridal Accessories'} bgColor={'#FE5000'}/>
        <Pill style='bottom-[6rem] right-[8rem] text-black' title={'Office Lunch'} bgColor={'#CDECE3'}/>

        <img src='/svg/world.svg' alt='world' className='absolute bottom-0 left-0 w-[400px] z-[-1]' />
        <div>
          <p className='text-center font-[600] lg:font-[500] font-Int text-[18px] lg:text-[30px] leading-[24px] md:leading-[36px]'>From Grocery Runs to Gift Shopping, <br /> We've Got You Covered!</p>
        </div>
        <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>
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

const Pill = ({title, bgColor, style}:pillProps) =>{
  return(
    <button style={{backgroundColor:bgColor}} className={`hidden md:block border-2 font-[600] rounded-md border-[#000] absolute p-2 font-Int text-[12px] ${style}`}>{title}</button>
  )
}