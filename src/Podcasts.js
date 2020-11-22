import React from 'react';
import PeterAttiaPodcast from './images/peterattiapodcastimage.png';
import TimFerrissPodcast from './images/TimFerrissPodcast.jpg';
import FoundMyFitness from './images/FoundMyFitness.webp';
import TEDTalksHealth from './images/tedtalkshealth.png';
import TenPercentHappier from './images/tenpercenthappier.jpg';
import RichRollPodcast from './images/therichrollpodcast.jpg';

class Podcasts extends React.Component {
    render() {
        return(
            <div className="App-podcasts">
                <header className="App-header">
                    <div className="App-title">
                        <h1>Podcasts</h1>
                    </div>
                </header>
            <section >
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

              <section className="App-podcast-items">
                <div className="App-podcast-1">
                  <img src={TEDTalksHealth} alt="TEDTalks_Health"></img>
                  <h4>TEDTalks Health</h4>
                  <a className="TEDTalks_Health_Podcast" href="https://podcasts.apple.com/us/podcast/ted-health/id470623173?mt=2" aria-hidden="true" target="_blank" rel="noopener noreferrer">TEDTalks Health</a>
                  <p>TEDTalks are world renowned for their informative and intellectually stimulating conferences. TEDTalks Health is a podcast specifically targeted towards all the health related topics discussed on the forum. Click hear to find some of the latest episodes.</p>
                </div>
                <div className="App-podcast-2">
                  <img src={TenPercentHappier} alt="Ten_Percent"></img>
                  <h4>10% Happier with Dan Harris</h4>
                  <a className="Ten_Percent_Happier" href="https://podcasts.apple.com/us/podcast/ten-percent-happier-with-dan-harris/id1087147821" aria-hidden="true" target="_blank" rel="noopener noreferrer">The Tim Ferriss Show</a>
                  <p>Dan Harris, an ABC News anchor, suffered a panic attack on live television while reading the news. He turned to meditation for his salvation. Listen to this podcast in which Dan interviews others who have taken on meditation as a way of finding happiness.</p>
                </div>
                <div className="App-podcast-3">
                  <img src={RichRollPodcast} alt="Rich_Roll"></img>
                  <h4>The Rich Roll Podcast</h4>
                  <a className="Rich_Roll_podcast" href="https://www.richroll.com/all-episodes/" aria-hidden="true" target="_blank" rel="noopener noreferrer">Found My Fitness</a>
                  <p>Rich Roll, a vegan ultra-endurance athlete and former entertainment attorney turned full-time wellness and plant-based nutrition advocate, talks with health expert, nutritionists and many others in an attempt to help others "unleast their best, most authentic self."</p>
                </div>
              </section>
                
            </section>
          </div>
        )
    }

}

export default Podcasts