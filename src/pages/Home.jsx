import In from './../images/in.svg'
import git from './../images/git.svg'
import mail from './../images/mail.svg'
import './Home.css'
import React from 'react'
export class Home extends React.Component {
  render() {
    return (
      < div id="e1_12" >
        <div id="e1_13"><span id="e1_14">Hi, I am</span><span id="e1_15">Ionut-Liviu Cojocaru</span><span id="e1_16">Front-end Developer / UI Designer</span>
          <div id="e1_18"></div>
          <div id="e1_19"></div>
          <div id="e1_20"></div>
          <div id="e1_21"></div>
          <img id="e1_23" src={mail}></img>
          <img id="e1_22" src={git}></img>
          <img src={In} id="e1_24"></img>
          <div id="e3_2"></div>
        </div>
        <div id="e1_31">
          <div id="e1_32"></div><span id="e1_33">CONTACT ME</span><span id="e1_34">Portfolio</span><span id="e1_35">About me</span><span id="e1_36">Skills</span>
        </div>
      </div >
    )
  }
}