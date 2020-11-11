import React from 'react';
import PeterAttiaPodcast from './images/peterattiapodcastimage.png';
import TimFerrissPodcast from './images/TimFerrissPodcast.jpg';
import FoundMyFitness from './images/FoundMyFitness.webp';

class Podcasts extends React.Component {
    render() {
        return(
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
        )
    }

}

export default Podcasts