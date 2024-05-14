
import { Container } from '../shared/container'
import { BasicButton } from '../shared/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div style={{backgroundImage:'url(/svg/hero-pattern.svg)'}} className=' '>
        <Container>
            <div className='w-full flex justify-center items-center min-h-screen relative'>

                <img src="/png/smile.png" className='absolute left-0 md:right-[20%] w-[25px] md:w-[60px]' alt="" />
                <img src="/svg/doughnut.svg" className='absolute bottom-[30%] left-[-20px] md:left-[25%] w-[25px] md:w-[40px]' alt="" />
                <img src="/svg/loveStar.svg" className='absolute top-[15%] right-0 md:left-[20%]  md:w-[80px]' alt="" />


                <div className='md:w-[70%] lg:w-[50%] space-y-8 bg-white py-[3rem] rounded px-[1rem]'>

                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center bg-[#FFF7F3] rounded-xl py-1 px-3 gap-6'>
                            <div className='rounded-xl bg-[#fe5000] h-[23px] w-[48px]'></div>
                            <span className='text-[12px] text-[#1D1E20] text-center font-[400]'>Why Errandbox?</span>
                        </div>
                        
                    </div>

                    <div>
                        <div>
                            <h2 className='text-[28px] md:text-[40px] lg:text-[70px] text-[#1D1E20] text-center font-[800] lg:leading-[60px]'>We've redefined</h2>
                            <p className='text-[40px] lg:text-[70px] text-[#052370] text-center font-[800] '>Convenience</p>
                        </div>

                        <p className='text-[14px] md:text-[17px] text-[#1D1E20] text-center font-[500]'>Powerful, flexible and stress-free, Errandbox makes it easy to connect you with Agent to provide top-notch services for all your errand needs. </p>
                                                
                    </div>



                    <div className="flex justify-center items-center gap-4 md:gap-6 flex-col md:flex-row">

                        <Link to={'/customer-order'} className='w-[60%] md:w-1/2'><BasicButton title='Get Started'/></Link>
                        <Link to={'/agent'} className='w-[60%] md:w-1/2'><BasicButton title='Become an Agent' style='border' bgColor='white' textColor='#31373D'/></Link>
                    </div>

                </div>                
            </div>

        




        </Container>
    </div>
  )
}

export default Hero