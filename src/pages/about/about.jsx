import './about.css'
import sep from './../../images/sep.svg'
import React from 'react'
import { Link } from "react-router-dom";
export class About extends React.Component {
	render() {
		return (
			<div id="container">
				<div className="col1">
					<div className='borderBox'>About Me</div>
					<p>My Name is Liviu, I’m 27 years old, i was born in Vaslui, Romania and i grow up since when i was 6 in Parma, Italy where i lived untill my 20th.
						I love coding, researching and finding problems where there is no solution. I love what I do and really makes me happy</p>
					<a href="https://drive.google.com/file/d/1cAVlhaod23IsXlvz1u7jt3hRJ7UXNyNQ/view" target="_blank" className="btn"> TO MY RESUME</a>
				</div>
				<div className="sep">
					<img src={sep} alt="separator" />
				</div>
				<div className="col12">
					<div className="box">
						<div className="smallTitle2">DESIGN</div>
						<h4>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</h4>
					</div>
					<div className="box">
						<div className="smallTitle2">DEVELOPMENT</div>
						<h4>I can develop the site based on your needs and suggestions. I can also develop the site from scratch and consult you during the job.</h4>
					</div>
					<div className="box">
						<div className="smallTitle2">MAINTENACE</div>
						<h4>I can maintain the site based on your needs and suggestions.</h4>
					</div>
				</div>
				<div className="sep">
					<img src={sep} alt="separator" />
				</div>
			</div>
		)
	}
}