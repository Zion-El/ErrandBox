
import { Container } from '../shared/container'
import { BasicButton } from '../shared/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div style={{backgroundImage:'url(/svg/hero-pattern.svg)'}} className=' '>
        <Container>
            <div className='w-full flex justify-center items-center min-h-screen'>
                <div className='md:w-[70%] lg:w-[50%] space-y-8 bg-white py-[3rem] rounded px-[1rem]'>

                    <div className='flex justify-center items-center'>
                        <span className='text-[14px] text-[#1D1E20] text-center font-[400]'>Why Errandbox?</span>
                    </div>

                    <div>
                        <div>
                            <h2 className='text-[28px] md:text-[40px] lg:text-[70px] text-[#1D1E20] text-center font-[800] lg:leading-[60px]'>We've redefined</h2>
                            <p className='text-[40px] lg:text-[70px] text-[#052370] text-center font-[800] '>Convenience</p>
                        </div>

                        <p className='text-[14px] md:text-[17px] text-[#1D1E20] text-center font-[500]'>Powerful, flexible and stress-free, Errandbox makes it easy to connect you with Agent to provide top-notch services for all your errand needs. </p>
                                                
                    </div>



                    <div className="flex justify-center items-center gap-6 flex-row">

                        <Link to={'/customer-order'} className='w-1/2'><BasicButton title='Get Started'/></Link>
                        <Link to={'/agent'} className='w-1/2'><BasicButton title='Become an Agent' style='border' bgColor='white' textColor='#31373D'/></Link>
                    </div>

                </div>                
            </div>

        




        </Container>
    </div>
  )
}

export default Hero