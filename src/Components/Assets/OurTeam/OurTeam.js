import React from 'react';
import './OurTeam.css';
import team1 from '../../../Images/team/team1.jpg';
import team2 from '../../../Images/team/team2.jpg';
import team3 from '../../../Images/team/team3.jpg';
import team4 from '../../../Images/team/team4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



const OurTeam = () => {
    return (
        <div>
            <section id="team" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                    <h2>Our Team</h2>
                    </div>
                    <div className="row">
                    <div class="col-lg-3 col-md-6">
                        <div className="member">
                        <div className="pic">
                            <img src={team1} alt="" />

                            </div>
                        <div className="details">
                            <h4>James Smith</h4>
                            <span>Chief Executive Officer</span>
                            <div class="social">
                            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href=""><FontAwesomeIcon icon={faGooglePlus} /></a>
                            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                        <div className="pic"><img src={team2} alt="" /></div>
                        <div className="details">
                            <h4>Michell Kellon</h4>
                            <span>Technical Manager</span>
                            <div className="social">
                            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href=""><FontAwesomeIcon icon={faGooglePlus} /></a>
                            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                        <div className="pic"><img src={team3} alt="" /></div>
                        <div className="details">
                            <h4>French Lincon</h4>
                            <span>Financial Manager</span>
                            <div class="social">
                            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href=""><FontAwesomeIcon icon={faGooglePlus} /></a>
                            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                        <div className="pic"><img src={team4} alt=""  /></div>
                        <div className="details">
                            <h4>Amanda Jepson</h4>
                            <span>Accountant</span>
                            <div class="social">
                            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href=""><FontAwesomeIcon icon={faGooglePlus} /></a>
                            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default OurTeam;