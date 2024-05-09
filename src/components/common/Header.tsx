import { Link } from 'react-router-dom'
import { Logo } from '../../utils/data'
import { BasicButton } from '../shared/button'

const Header = () => {
  return (
    <div className='flex justify-between items-center border py-3 rounded-lg shadow-md px-2'>
        <Link to={'/'}><Logo/></Link>
        <Link to={'/customer-order'}><BasicButton title='Get Started'/></Link>
        
    </div>
  )
}

export default Header