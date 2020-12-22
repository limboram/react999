import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div>
                        <p>Let’s create something new</p>
                        <h3>LET’S GETIN<br />TOUCH</h3>
                        <Link to="/contact" className="contact">Contat Me</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;