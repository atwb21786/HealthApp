import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import Articles from './Articles'
import Websites from './Websites';
import Podcasts from './Podcasts';
import NavMenu from './NavMenu';
import Fitness from './Fitness';


class App extends React.Component {
  
  render() {
    return (
      <div>
        <header>
          <Route path={['/', '/articles', '/websites', '/podcasts', '/fitness']} component={NavMenu}/>
        </header>
        <main>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/articles'} component={Articles} />
          <Route path={'/websites'} component={Websites} />
          <Route path={'/podcasts'} component={Podcasts} /> 
          <Route path={'/fitness'} component={Fitness} />         
        </main>
      </div>
    );
  }
}

export default App;
