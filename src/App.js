import React from 'react';
import Backpacker from './images/backpacker.jpg';
import PeterAttia from './images/Peter-Attia-Hero.jpg';
import TimFerriss from './images/TimFerriss.jpg';
import RhondaPatrick from './images/RhondaPatrick.png';
import PeterAttiaPodcast from './images/peterattiapodcastimage.png';
import TimFerrissPodcast from './images/TimFerrissPodcast.jpg';
import FoundMyFitness from './images/FoundMyFitness.webp';
import FastingClock from './images/eatfastclock.png';
import KetoDiet from './images/KetoDiet.png';
import RunningPic from './images/running.jpg';
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
                <section className="App-article-items">
                  <div className="App-article-1">
                    <img src={FastingClock} alt="Fasting_Clock"></img>
                    <h4>Intermittent Fasting</h4>
                    <p>What is Intermittent Fasting? Is it safe?<br></br>
                    This article outlines the ultimate beginners guys to intermittent fasting</p>
                  </div>
                  <div className="App-article-2">
                    <img src={KetoDiet} alt="Keto_Diet"></img>
                    <h4>Keto Diet</h4>
                    <p>Learn the basics of a Ketogenic diet and the many health benefits that it offers</p>
                  </div>
                  <div className="App-article-3">
                    <img src={RunningPic} alt="Running"></img>
                    <h4>Zone 2 Training</h4>
                    <p>When we normally exercise, we try to give maximum effort and assume that the higher our heart rate, the greater the impact on our health.
                      <br></br><i>The truth?</i><br></br> Read this article to find out why that's not necessarily the case and where the best, most efficient heart rate zone actually is.
                    </p>
                  </div>
                </section>
                
            </section>
          </div>
          <div className="App-websites">
            <section>
              <h3>Websites</h3>
                <section className="App-website-items">
                  <div className="App-website-1">
                    <img src={PeterAttia} alt="Peter_Attia_Hero"></img>
                    <h4>Peter Attia M.D.</h4>
                  </div>
                  <div className="App-website-2">
                    <img src={TimFerriss} alt="Tim_Ferriss"></img>
                    <h4>Tim Ferriss</h4>
                  </div>
                  <div className="App-website-3">
                    <img src={RhondaPatrick} alt="Rhonda_Patrick"></img>
                    <h4>Found My Fitness</h4>
                  </div>
                </section>
                
            </section>
          </div>
          <div className="App-podcasts">
            <section >
              <h3>Podcasts</h3>
              <section className="App-podcast-items">
                <div className="App-podcast-1">
                  <img src={PeterAttiaPodcast} alt="Peter_Attia_Podcast"></img>
                  <h4>The Drive with Peter Attia</h4>
                </div>
                <div className="App-podcast-2">
                  <img src={TimFerrissPodcast} alt="Tim_Ferriss_Podcast"></img>
                  <h4>The Tim Ferriss Show</h4>
                </div>
                <div className="App-podcast-3">
                  <img src={FoundMyFitness} alt="Found_My_Fitness"></img>
                  <h4>Found My Fitness with Rhonda Patrick</h4>
                </div>
              </section>
                
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
