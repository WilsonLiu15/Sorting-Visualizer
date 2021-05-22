import React from "react"

import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className = "social-media">
                <a className = "social-media-icon" title="LinkedIn - Wilson Liu" href="https://www.linkedin.com/in/wilson-liu-ab285b203/"target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin fa-3x"></i> 
                </a>
                <a className = "social-media-icon" title="Instagram - liu_wilson15" href="https://www.instagram.com/liu_wilson15/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram fa-3x"></i>
                </a>
                <a className = "social-media-icon" title="Email - wilsonliu151413@gmail.com" href="mailto:wilsonliu151413@gmail.com" target="_blank" rel="noreferrer">
                    <i className ="far fa-envelope fa-3x"></i>
                </a>
                <a className = "social-media-icon" title="Facebook - Wilson Liu" href="https://www.facebook.com/profile.php?id=100008212365379" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-square fa-3x"></i> 
                </a>
                <a className = "social-media-icon" title="GitHub - WilsonLiu" href="https://github.com/WilsonLiu15" target="_blank" rel="noreferrer">
                    <i className="fab fa-github-square fa-3x"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer