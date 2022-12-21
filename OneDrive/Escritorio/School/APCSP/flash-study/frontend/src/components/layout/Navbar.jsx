import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../../assets/Flashstudylogo.png'

function Navbar({title}) {
  // Logo Styling
  const logoStyle = {
    backgroundImage: `url('${logo}')`,
  }

  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className="container mx-auto">
        <div className="flex flex-inline px-2 mx-2">
          <div 
            className="h-10 w-10 bg-center bg-no-repeat bg-cover" style={logoStyle}>
          </div>
          <Link to='/' className='text-lg font-bold my-auto ml-3'>
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
            <Link to='/flashcreator' className='btn btn-ghost btn-sm rounded-btn'>
              Card Creator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'FlashStudy'
}

export default Navbar