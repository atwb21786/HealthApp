import React from 'react';
import FastingClock from './images/eatfastclock.png';
import KetoDiet from './images/KetoDiet.png';
import RunningPic from './images/running.jpg';
import Ketosis from './images/ketosis.png';
import Blood from './images/blooddrop.png';
import PandemicExercise from './images/pandemicexercise.png';

class Articles extends React.Component {

    render() {
        return(
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

                        <section className="App-article-items">
                        
                            <div className="App-article-1" >
                                <img src={Ketosis} alt="ketosis"></img>
                                <h4>Ketosis</h4>
                                <a className="Ketosis" href="https://www.healthline.com/nutrition/what-is-ketosis" aria-hidden="true" target="_blank" rel="noopener noreferrer">Ketosis</a>
                                <p>Ketosis is a metabolic state characterized by elevated levels of ketone bodies in the blood or urine. But how does one get into the <i>state</i> of ketosis?<br></br>
                                Read this article to learn more about its beneficial impacts to your overall health.</p>
                            </div>
                            <div className="App-article-2">
                                <img src={Blood} alt="Blood_Glucose_img"></img>
                                <h4>Blood Glucose</h4>
                                <a className="Blood_Glucose" href="https://www.medicalnewstoday.com/articles/249413" aria-hidden="true" target="_blank" rel="noopener noreferrer">Blood Glucose</a>
                                <p>Learn about the importance of monitoring your blood glucose levels and why it has such an impact on your overall health</p>
                            </div>
                            <div className="App-article-3">
                                <img src={PandemicExercise} alt="Pandemic_Exercise_img"></img>
                                <h4>Exercising in a Pandemic</h4>
                                <a className="Pandemic_Exercise" href="https://nutrition.org/how-to-stay-fit-and-healthy-during-coronavirus-covid-19-pandemic/" aria-hidden="true" target="_blank" rel="noopener noreferrer">Exercising in a Pandemic</a>
                                <p>The pandemic has affected our daily lives in many ways and one of which is the way we exercise. If we no longer go to the gym, how do we get in our daily exercise?<br></br>
                                Read this article to find out how to stay fit and healthy during the pandemic.</p>
                            </div>
                        </section>
                
            </section>
            </div>
        )
    }
}

export default Articles