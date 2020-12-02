import React from 'react'
import { Link } from 'react-router-dom'
import './Fitness.css'

class Fitness extends React.Component {
    render() {
        return(
            <div>
                <header className="App-header">
                    <div className="App-title">
                        <h1>Fitness Center</h1>
                    </div>

                </header>
                <main className="Fitness-content">
                    <section className="Fitness-about">
                        <div>
                            <p>
                                Welcome to the Fitness Center!<br></br>
                                This is your portal to add biometric data and find different ways to track and analyze your health data.
                            </p>

                        </div>
                        
                    </section>
                    <section className="Fitness-biometrics">
                        <h3>Weight</h3>
                        <Link to='/weight'>Weight</Link>
                    </section>
                </main>
                
                
            </div>
        )
    }
}

export default Fitness