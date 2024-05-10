
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

      <div className='bg-[#CDD3E2] flex justify-center items-center h-[350px] rounded-lg flex-col relative mt-[3rem] gap-6'>
        <img src='/svg/world.svg' alt='world' className='absolute bottom-0 left-0 w-[400px]' />
        <div>
          <p className='text-center font-[500] font-Int text-[18px] lg:text-[30px] leading-[36px]'>From Grocery Runs to Gift Shopping, <br /> We've Got You Covered!</p>
        </div>
        <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>
      </div>
    </>

  )
}

export default CustomerSect