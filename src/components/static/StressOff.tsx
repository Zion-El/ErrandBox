import { Link } from "react-router-dom"
import { BasicButton } from "../shared/button"
import { Container } from "../shared/container"

const StressOff = () => {
  return (
    <Container>
      <div className="lg:px-[5rem]">
        
          <div className='bg-[#F5F7FC] flex justify-center items-center h-[350px] rounded-lg flex-col relative py-[6rem] my-[3rem] md:gap-6'>
             <img src="/svg/Cart.svg" alt="cart" />
            <p className='text-center font-[600] font-Int text-[20px] lg:text-[30px] leading-[36px] w-[80%] lg:w-full'>Let Us Take the Stress Off Your Shoulders! </p>
            <p className='text-center font-[500] font-Int text-[14px] lg:text-[30px] leading-[36px] text-[#262E35]'>Get Your Errands Run Today! </p>
          <div>
            <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>
          </div>
          
        </div>

      </div>      
    </Container>

  )
}

export default StressOff