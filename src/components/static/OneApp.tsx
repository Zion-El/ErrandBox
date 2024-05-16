
import { Container } from '../shared/container'
import { Link } from 'react-router-dom'
import { BasicButton } from '../shared/button'

const OneApp = () => {
    return (
        <div className=' pt-[4rem] w-full relative'>
            
            <Container>
                
                <div className='w-full flex justify-center'>
                    <div className='flex flex-col w-full justify-center items-center'>
                        <p className='text-center font-[500] font-Int text-[20px] md:text-[28px]'>One app for all your Errands</p>
                        <p className='text-center font-[400] font-Int w-[60%] md:w-full  text-[12px] md:text-[14px]'>Say goodbye to stress and hello to convenience with ErrandBox!</p>                        
                    </div>

                </div>
                <div className='w-full flex justify-center mt-10'>
                    <ul className='flex overflow-x-scroll md:overflow-x-hidden items-center md:w-[90%] lg:w-[80%] justify-center gap-4 md:gap-10 lg:justify-between relative'>
                        {data?.map((i)=><li className='text-center font-[400] font-Int text-[#616161] text-[12px] inline-block'><img src={i.imgUrl}  alt="icon" className='inline mr-2 w-[30px] h-[30px]' />{i.name}</li>)}
                            
                    </ul>
                </div>    

                <div className='flex flex-col-reverse md:flex-row items-center justify-between py-16'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-[90%] md:w-[90%] lg:w-[67%] space-y-6'>
                            <p className='text-center md:text-left font-[500] font-Int text-[20px] lg:text-[28px] leading-[30px]'>We take care of your errands so you can do more</p>
                            <p className='text-center md:text-left font-[400] font-Int mb-8 text-[12px] lg:text-[14px]'>Errandbox connects you with friendly and efficient Agents ready to tackle your market errands, so you can focus on what truly matters.</p>  
                            
                            <div>
                               <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>   
                            </div>
                                                        
                        </div>

                    </div>

                    <div className='my-6 md:mt-0 relative'>
                        <img src="/svg/sunshine.svg" className='absolute top-[-20%] right-0 w-10 md:w-16' alt="icon" />
                        <img src="/png/Bento.png" alt="png" />
                    </div>


                </div>
            
    
    
    
                
            </Container>
        </div>
      )
}

export default OneApp

const data = [
    {name:'Convenience', imgUrl: '/svg/O1.svg'}, 
{name:'Reliable', imgUrl: '/svg/O2.svg'},
{name:'Stress free', imgUrl: '/svg/O3.svg'},
{name:'Live updates on orders', imgUrl: '/svg/O4.svg'},
{name:'Quick and easy onboarding', imgUrl: '/svg/O5.svg'},
]