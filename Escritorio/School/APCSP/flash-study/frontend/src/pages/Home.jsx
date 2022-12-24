import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className='text-primary-content'>
      <h1 className="text-6xl mb-5">Welcome to FlashStudy</h1>
      <p className="text-lg text-white-400 mb-5">
        The Worlds Best Study Assistant
      </p>
      <Link to='/flashcreator' className='text-lg font-bold btn btn-primary'>
            Get Started
      </Link>

    </div>
  )
}

export default Home