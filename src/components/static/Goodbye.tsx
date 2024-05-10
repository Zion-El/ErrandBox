import { useState } from 'react'
import { Container } from '../shared/container'
import CustomerSect from './CustomerSect'
import AgentSect from './AgentSect'

const Goodbye = () => {
    const [state, setState] = useState<'customer' | 'agents'>('customer')
    return (
        <div className='py-[4rem]'>
            <Container>
                <div className='w-full flex justify-center'>
                    <div className='w-full flex justify-center items-center flex-col'>
                     
                        <p className='text-center font-[500] font-Int lg:w-[30%] text-[24px] lg:text-[30px]'>Say goodbye to endless to-do lists!</p>    

                        <div className='flex justify-center items-center h-[46px] rounded-[32px] border-[#FFDCCC] bg-[#ffede5] w-[300px] px-6 my-[2rem]'>
                            <button onClick={()=>setState('customer')} className={`${state === 'customer' ? 'bg-[#FE5000] text-[#fff] border-2 border-[#FFDCCC] rounded-[32px]': 'text-[#888C93]'} w-[130px] h-[40px]`}>Customers</button>
                            <button onClick={()=>setState('agents')} className={`${state === 'agents' ? 'bg-[#FE5000] text-[#fff] border-2 border-[#FFDCCC] rounded-[32px]': 'text-[#888C93]'} w-[130px] h-[40px]`}>Agents</button>
                        </div>                   
                   
                    </div>

                </div>  

                <div className='py-14'>
                    {
                        state === 'customer'?<CustomerSect/>:<AgentSect/>
                    }

                </div>
            
    
                
    
                
            </Container>
        </div>
      )
}

export default Goodbye
