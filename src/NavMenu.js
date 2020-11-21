import React from 'react';
import './LandingPage.css'
import { Link } from 'react-router-dom'

class NavMenu extends React.Component {


    render() {
        return (
        <div>
          <nav className="App-links">
            <ul className="App-menu">
              <li><Link to='/' className='links'>Home</Link></li>
              <li><Link to='/articles' className='links'>Articles</Link></li>
              <li><Link to='/websites' className='links'>Websites</Link></li>
              <li><Link to='/podcasts' className='links'>Podcasts</Link></li>
              <li><Link to='/fitness' className='links'>Fitness</Link></li>
            </ul>
          </nav>
        </div>
        )
    }
}

export default NavMenu