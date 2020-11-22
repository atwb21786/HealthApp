import React from 'react';
import PeterAttia from './images/Peter-Attia-Hero.jpg';
import TimFerriss from './images/TimFerriss.jpg';
import RhondaPatrick from './images/RhondaPatrick.png';
import Healthline from './images/healthline.jpg';
import MentalHealth from './images/mentalhealth.jpg';
import Sleep from './images/sleep.png'

class Websites extends React.Component {
    render() {
        return(
            <div className="App-websites">
              <header className="App-header">
                    <div className="App-title">
                        <h1>Websites</h1>
                    </div>
                </header>
            <section>
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

                <section className="App-website-items">
                  <div className="App-website-1">
                    <img src={Healthline} alt="Healthline_img"></img>
                    <h4>Healthline</h4>
                    <a className="Healthline_website" href="https://www.healthline.com/" target="_blank" aria-hidden="true" rel="noopener noreferrer">Healthline</a>
                    <p>Healthline is a website that covers all facets of physical and mental health openly, with multiple resources from their health and wellness library and newsletters to their apps, podcasts and communities<br></br></p>
                  </div>
                  <div className="App-website-2">
                    <img src={MentalHealth} alt="Mental_Health"></img>
                    <h4>Mental Health</h4>
                    <a className="Mental_Health" href="https://www.mentalhealth.gov/" target="_blank" aria-hidden="true" rel="noopener noreferrer">Mental Health</a>
                    <p>It goes without saying that in these challenging times, our Mental Health is of vital importance to our overall health. This website provides a plethora of information about Mental Health and the importance of maintaining it.</p>
                  </div>
                  <div className="App-website-3">
                    <img src={Sleep} alt="Sleep"></img>
                    <h4>Sleep</h4>
                    <a className="Sleep_Foundation_website" href="https://www.sleepfoundation.org/" target="_blank" aria-hidden="true" rel="noopener noreferrer">Sleep</a>
                    <p>With all the talk about diet and exercise, you might be forgetting about one of the pillars of the overall health picture - sleep.<br></br>
                    The Sleep Foundation is a group dedicated to the importance of all things sleep. Learn more about why it is so vital.</p>
                  </div>
                </section>
                
            </section>
          </div>
        )
    }
}

export default Websites