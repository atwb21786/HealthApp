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
                  
                  <div className="App-article-1" >
                    <img src={FastingClock} alt="Fasting_Clock"></img>
                    <h4>Intermittent Fasting</h4>
                    <a className="Intermittent_fasting" href="https://www.healthline.com/nutrition/intermittent-fasting-guide" aria-hidden="true" target="_blank" rel="noopener noreferrer">Intermittent Fasting</a>
                    <p>What is Intermittent Fasting? Is it safe?<br></br>
                    This article outlines the ultimate beginners guys to intermittent fasting</p>
                  </div>
                  <div className="App-article-2">
                    <img src={KetoDiet} alt="Keto_Diet"></img>
                    <h4>Keto Diet</h4>
                    <a className="Ketogenic_Diet" href="https://www.healthline.com/nutrition/ketogenic-diet-101" aria-hidden="true" target="_blank" rel="noopener noreferrer">Keto Diet</a>
                    <p>Learn the basics of a Ketogenic diet and the many health benefits that it offers</p>
                  </div>
                  <div className="App-article-3">
                    <img src={RunningPic} alt="Running"></img>
                    <h4>Zone 2 Training</h4>
                    <a className="Zone_Two_Training" href="https://www.heromovement.net/blog/zone2-training/" aria-hidden="true" target="_blank" rel="noopener noreferrer">Zone 2 Training</a>
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
                    <a className="Peter_attia_website" href="https://peterattiamd.com/" target="_blank" aria-hidden="true" rel="noopener noreferrer">Peter Attia</a>
                    <p>Dr. Peter Attia is a physican who focuses on the science of longevity. Working and providing expertise in nutrition, exercise, sleep, emotional and mental health, he is one of the lead voices in the field.</p>
                  </div>
                  <div className="App-website-2">
                    <img src={TimFerriss} alt="Tim_Ferriss"></img>
                    <h4>Tim Ferriss</h4>
                    <a className="Tim_Ferriss_blog" href="https://tim.blog/" target="_blank" aria-hidden="true" rel="noopener noreferrer">Tim Ferriss</a>
                    <p>Author of The Four Hour Work Week and host of the Tim Ferriss Show, Tim Ferriss is a technology investor and the author of five NY Times best sellers. He covers topics such as personal and character development, self-improvement and weight-loss.</p>
                  </div>
                  <div className="App-website-3">
                    <img src={RhondaPatrick} alt="Rhonda_Patrick"></img>
                    <h4>Found My Fitness</h4>
                    <a className="Found_My_Fitness_website" href="https://www.foundmyfitness.com/" target="_blank" aria-hidden="true" rel="noopener noreferrer">Found My Fitness</a>
                    <p>Dr. Rhonda Patrick is a cell biologist and cofounder of FoundMyFitness, which acts as a resource for materials that promote healthspan, longevity and overall health.</p>
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
                  <a className="The_Drive_Podcast" href="https://peterattiamd.com/podcast/" aria-hidden="true" target="_blank" rel="noopener noreferrer">The Drive with Peter Attia</a>
                  <p>The Peter Attia Drive is a weekly, deep-dive podcast focusing on maximizing longevity, and all that goes into that from physical to cognitive to emotional health. Hosted by Dr. Peter Attia</p>
                </div>
                <div className="App-podcast-2">
                  <img src={TimFerrissPodcast} alt="Tim_Ferriss_Podcast"></img>
                  <h4>The Tim Ferriss Show</h4>
                  <a className="Tim_Ferriss_Show" href="https://tim.blog/podcast/#new-episodes" aria-hidden="true" target="_blank" rel="noopener noreferrer">The Tim Ferriss Show</a>
                  <p>The Tim Ferriss Show, hosted by Tim Ferriss, is one of the most popular podcasts in the medium. Each episodedeconstructs world-class performers from eclectic areas (investing, sports, business, art, etc.) to extract the tactics, tools, and routines you can use. This includes favorite books, morning routines, exercise habits, time-management tricks, and much more.</p>
                </div>
                <div className="App-podcast-3">
                  <img src={FoundMyFitness} alt="Found_My_Fitness"></img>
                  <h4>Found My Fitness with Rhonda Patrick</h4>
                  <a className="Found_My_Fitness_podcast" href="https://www.foundmyfitness.com/episodes" aria-hidden="true" target="_blank" rel="noopener noreferrer">Found My Fitness</a>
                  <p>The FoundMyFitness website, cofounded by Dr. Rhonda Patrick, includes video episodes, interviews and a podcast which covers a wide breadth of topics, including exercise, health and the science behind it.</p>
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
