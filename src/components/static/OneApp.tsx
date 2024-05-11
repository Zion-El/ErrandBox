
import { Container } from '../shared/container'
import { Link } from 'react-router-dom'
import { BasicButton } from '../shared/button'

const OneApp = () => {
    return (
        <div className=' pt-[4rem]'>
            <Container>
                <div className='w-full flex justify-center'>
                    <div>
                        <p className='text-center font-[500] font-Int text-[24px] md:text-[30px]'>One app for all your Errands</p>
                        <p className='text-center font-[400] font-Int  text-[14px] md:text-[16px]'>Say goodbye to stress and hello to convenience with ErrandBox!</p>                        
                    </div>

                </div>
                <div className='w-full flex justify-center mt-10'>
                    <ul className='flex flex-wrap items-center md:w-[90%] lg:w-[80%] justify-center gap-4 md:gap-10 lg:justify-between'>
                        {data?.map((i)=><li className='text-center font-[400] font-Int text-[#616161]  text-[12px]'><img src={i.imgUrl} alt="icon" className='inline mr-2' />{i.name}</li>)}
                            
                    </ul>
                </div>    

                <div className='flex flex-col md:flex-row items-center justify-between py-8 '>
                    <div>
                        <div className='md:w-[90%] lg:w-[67%] space-y-6'>
                            <p className=' font-[500] font-Int text-[24px] lg:text-[30px] leading-[30px]'>We take care of your errands so you can do more</p>
                            <p className=' font-[400] font-Int mb-8 text-[14px] lg:text-[16px]'>Errandbox connects you with friendly and efficient Agents ready to tackle your market errands, so you can focus on what truly matters.</p>  
                            
                            <div>
                               <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>   
                            </div>
                                                        
                        </div>

                    </div>

                    <div className='mt-6 md:mt-0'>
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