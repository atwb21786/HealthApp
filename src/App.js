import React from 'react';
import Backpacker from './images/backpacker.jpg';
import './App.css';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <div className="App-title">
            <h1>Health and Wellness</h1>
          </div>
          <nav className="App-links">
            <h4>Links</h4>
          </nav>
        </header>
        <main className="App-content">
          <section className="App-about">
            <div className="App-intro">
              <h3>Fitness for the body and mind</h3>
              <p>Staying healthy is hard. Staying healthy in 2020 during a global pandemic? Really hard.<br/>
              The first step in getting healthy is knowing what that means. In times where misinformation is rife<br/>
              it would be great to have a single place to find reliable health information, a place<br/>
              that has great articles to read and podcasts that provided the best scientific information out there.<br/>
              </p>
            </div>
            <div className="App-image">
              <img src={Backpacker} alt="Backpacker"></img>
            </div>
          </section>
          <div className="App-articles">
            <section>
              <h3>Articles</h3>
            </section>
          </div>
          <div className="App-websites">
            <section>
              <h3>Websites</h3>
            </section>
          </div>
          <div className="App-podcasts">
            <section >
                <h3>Podcasts</h3>
            </section>
          </div>
          <div className="App-fitness">
            <section >
                <h3>Fitness</h3>
            </section>
          </div>
            
          

        </main>
        <footer>

        </footer>
        
        
      </div>
    );
  }
}

export default App;
