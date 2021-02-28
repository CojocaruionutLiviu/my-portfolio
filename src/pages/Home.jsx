import In from './../images/in.svg'
import git from './../images/git.svg'
import mail from './../images/mail.svg'
import myself from './../images/e783x877_1.png'
import facebook from './../images/facebook.svg';
import instagram from './../images/instagram.svg';
import './style.css'
import React from 'react'
export class Home extends React.Component {
  render() {
    return (
      < div id="container" >
        <div id="home">
          <div className="col1">
            <span className="smallTitle">Hi, I am</span>
            <span className="bigTitle">Ionut-Liviu Cojocaru</span>
            <span className="greyTitle">Front-end Developer / UI Designer</span>
            <div id="social-links">
              <a href="mailto:cojocaruionutliviu@gmail.com" target="_blank">
                <img className="social-btn" src={mail} />
              </a>
              <a href="https://www.github.com/CojocaruionutLiviu" target="_blank">
                <img className="social-btn" src={git} />
              </a>
              <a href="https://www.linkedin.com/in/ionutliviucojocaru/" target="_blank">
                <img className="social-btn" src={In} />
              </a>
              <a href="https://www.facebook.com/IonutLiviuCojocaru/" target="_blank">
                <img className="social-btn" src={facebook} />
              </a>
              <a href="https://www.instagram.com/call.me.livio" target="_blank">
                <img className="social-btn" src={instagram} />
              </a>
            </div>
          </div>
          <div className="col2">
            <img className="myself" src={myself} />
          </div>
        </div>
      </div >
    )
  }
}