import { FooterLinks, Logo } from '../../utils/data'
import { Link } from 'react-router-dom'
import { Container } from '../shared/container'

const Footer = () => {
  return (
    <Container>
        <div>

            <div>
                <div>
                    <Logo/>
                </div>
                <div>

                </div>
                
            </div>

            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center border-t py-4'>
                <span>@ 2022 ErrandBox Ltd. All rights reserved</span>
                <div>
                    <div className='flex items-center gap-4'>
                        {
                            FooterLinks?.map((i, id)=>(
                            <ul key={id}>
                                <li><Link to={i.url}>{i.name}</Link></li>
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