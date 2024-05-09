import { BasicButton } from '../shared/button'
import { Container } from '../shared/container'

const Join = () => {
    return (
        <div className=' '>
            <Container>
                <div className='w-full flex justify-center'>
                    <div className='w-full flex justify-center items-center flex-col space-y-7'>

                        <div>
                            <p className='text-center font-[500] font-Int text-[18px] lg:text-[30px]'>Join Thousands of Users Who Have</p>                       
                            <p className='text-center font-[500] font-Int text-[18px] lg:text-[30px]'>Discovered the Joy of Errand Freedom!</p>                             
                        </div>
                     
  

                        <p className='text-center font-[400] font-Int md:w-[45%] text-[16px]'>Join the thousands of satisfied users who have discovered the ease and convenience of Errandbox. Download the app today and take the first step towards reclaiming your time and reducing stress.</p>                     

                        <BasicButton title='Be a part of us'/>
                    </div>

                </div>  
            
    
                
    
                
            </Container>
        </div>
      )
}

export default Join
