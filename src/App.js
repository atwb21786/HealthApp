import React from 'react';
import './App.css';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Health and Wellness</h1>
        </header>
        <main className="App-content">
          <div className="App-about">
            <section>
              <h3>Fitness for the body and mind</h3>
              <p>Staying healthy is hard. Staying healthy in 2020 during a global pandemic? Really hard.<br/>
              The first step in getting healthy is knowing what that means. In times where misinformation is rife<br/>
              it would be great to have a single place to find reliable health information, a place<br/>
              that has great articles to read and podcasts that provided the best scientific information out there.<br/>
               
              </p>
            </section>
          </div>
          <div className="App-resources">
            <section className="App-articles">
              <h3>Articles</h3>
            </section>
            <section className="App-podcasts">
              <h3>Podcasts</h3>
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
