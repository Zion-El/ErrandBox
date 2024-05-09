
import { Container } from '../shared/container'
import { Link } from 'react-router-dom'
import { BasicButton } from '../shared/button'

const OneApp = () => {
    return (
        <div className=' '>
            <Container>
                <div className='w-full flex justify-center'>
                    <div>
                        <p className='text-center font-[500] font-Int  text-[30px]'>One app for all your Errands</p>
                        <p className='text-center font-[400] font-Int  text-[16px]'>Say goodbye to stress and hello to convenience with ErrandBox!</p>                        
                    </div>

                </div>
                <div className='w-full flex justify-center mt-10'>
                    <ul className='flex flex-wrap items-center md:w-[70%] justify-center lg:justify-between'>
                        {data?.map((i)=><li className='text-center font-[400] font-Int text-[#616161]  text-[12px]'>{i.name}</li>)}
                            
                    </ul>
                </div>    

                <div className='flex flex-col lg:flex-row items-center justify-between py-8 '>
                    <div>
                        <div className='lg:w-[67%] space-y-6'>
                            <p className=' font-[500] font-Int  text-[30px]'>We take care of your errands so you can do more</p>
                            <p className=' font-[400] font-Int mb-8 text-[16px]'>Errandbox connects you with friendly and efficient Agents ready to tackle your market errands, so you can focus on what truly matters.</p>  
                            
                            <div>
                               <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>   
                            </div>
                                                        
                        </div>

                    </div>

                    <div>
                        <img src="/png/Bento.png" alt="png" />
                    </div>


                </div>
            
    
    
    
                
            </Container>
        </div>
      )
}

export default OneApp

const data = [
    {name:'Convenience', imgUrl: ''}, 
{name:'Reliable', imgUrl: ''},
{name:'Stress free', imgUrl: ''},
{name:'Live updates on orders', imgUrl: ''},
{name:'Quick and easy onboarding', imgUrl: ''},
]