import { Link } from 'react-router-dom'
import { DropMenu } from '../common/Header'
import { Container } from '../shared/container'

const Join = () => {
    return (
        <div className=' '>
            <Container>
                <div className='w-full flex justify-center'>
                    <div className='w-full flex justify-center items-center flex-col space-y-7 relative lg:w-[70%]'>
                    <img src="/svg/smileyboy.svg" alt="star" className=" absolute w-10 md:w-16 top-[-5%] md:top-0 left-0"/>
                    <img src="/svg/6_stars.svg" alt="star" className="hidden md:block absolute w-16 top-0 right-16"/>
                    <img src="/svg/smileygirl.svg" alt="star" className=" absolute w-10 md:w-16 bottom-[10%] md:bottom-0 right-0"/>

                        <div className='md:w-[60%] lg:w-[80%]'>
                            <p className='text-center font-[500] font-Int text-[20px]  lg:text-[30px] '>Join Thousands of Users Who Have Discovered the Joy of Errand Freedom!</p>                             
                        </div>
                     
  

                        <p className='text-center font-[400] font-Int md:w-[65%] text-[16px]'>Join the thousands of satisfied users who have discovered the ease and convenience of Errandbox. Download the app today and take the first step towards reclaiming your time and reducing stress.</p>                     

                        <div>
                            <DropMenu content={navcontent} title='Be a part of us'/>
                            {/* <BasicButton title='Be a part of us'/> */}
                        </div>
                        
                    </div>

                </div>  
            
    
                
    
                
            </Container>
        </div>
      )
}

export default Join

const navcontent = (
    <div className='flex flex-col w-[170px]'>
      <Link className=' py-2 border-b font-[500] text-[16px] text-[#151515]' to={'/customer-order'}> <img src="/svg/customer.svg" className='inline mr-3' alt="icon" />As a Customer</Link>
      <Link className=' py-2 font-[500] text-[16px] text-[#151515]' to={'/agent'}><img src="/svg/agent.svg" className='inline mr-3' alt="icon" />As an Agent</Link>
    </div>
  );
