import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search.svg'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-4 text-xl bg-gradient-to-r from-gray-500 to-gray-800 text-white'>
        <div className='flex items-center w-20'>
            <img className='w-full' src={logo} alt="" />
            <span className='text-3xl'>Shelby</span>
        </div>
        <div>
            <ul className='flex gap-4'>
                <li>
                    <NavLink className={({isActive})=>(isActive? 'text-yellow-300': '')} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>(isActive? 'text-yellow-300': '')} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>(isActive? 'text-yellow-300': '')} to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>(isActive? 'text-yellow-300': '')} to='/register'>Register</NavLink>
                </li>
            </ul>
        </div>
        <div className='flex gap-4'>
            <input className='border-2 text-black border-white rounded-lg bg-gray-200 px-2' type="text" />
            <button>
                <img className='w-8 hover:cursor-pointer' src={search} />
            </button>
        </div>
    </nav>
  )
}

export default Navbar
