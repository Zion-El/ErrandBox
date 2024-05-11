import { FooterLinks, Logo } from '../../utils/data'
import { Link } from 'react-router-dom'
import { Container } from '../shared/container'

const Footer = () => {
  return (
    <Container>
        <div className=''>

            <div className='flex flex-col md:flex-row items-center w-full py-[3rem] justify-between'>
                <div className='w-full md:w-1/4 flex md:justify-normal justify-center'>
                    <Logo/>
                </div>
                <div className='w-full md:w-2/4'>
                    <p className=' text-center md:text-left text-[14px] font-Rob md:w-[87%]'>Balancing work and errands can feel like a daunting task. With ErrandBox, you can kiss the market stress goodbye and enjoy the convenience of seamless shopping.</p>
                </div>
                
            </div>

            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center border-t py-4'>
                <span className='text-[#475569] text-[14px] font-Rob'>@ 2022 ErrandBox Ltd. All rights reserved</span>
                <div>
                    <div className='flex items-center gap-4'>
                        {
                            FooterLinks?.map((i, id)=>(
                            <ul key={id}>
                                <li className='text-[#475569] text-[14px] font-Rob'><Link to={i.url}>{i.name}</Link></li>
                            </ul>                            
                            ))
                        }

                    </div>
                </div>
            </div>
            
        </div>

    </Container>

  )
}

export default Footer