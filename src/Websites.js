import React from 'react';
import PeterAttia from './images/Peter-Attia-Hero.jpg';
import TimFerriss from './images/TimFerriss.jpg';
import RhondaPatrick from './images/RhondaPatrick.png';

class Websites extends React.Component {
    render() {
        return(
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
        )
    }
}

export default Websites