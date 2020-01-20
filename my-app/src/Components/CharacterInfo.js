import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
function CharacterInfo() {
    return (
        <>
            <div class="container marketing">
                <div class="row">

                    <div className="statisticbars">
                        <h3>Power Stats</h3>
                        <div className="statbar">
                            <span>Intelligence: 45 &nbsp;</span>
                            <ProgressBar variant="primary" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Strength: 45 &nbsp;</span>
                            <ProgressBar variant="danger" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Speed: 45 &nbsp;</span>
                            <ProgressBar variant="warning" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Durability: 45 &nbsp;</span>
                            <ProgressBar variant="success" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Power: 45 &nbsp;</span>
                            <ProgressBar variant="secondary" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Combat: 45 &nbsp;</span>
                            <ProgressBar variant="dark" animated now={45} className="bar" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default CharacterInfo;