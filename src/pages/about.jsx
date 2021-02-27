import './style.css'
import React from 'react'
export class About extends React.Component {
	render() {
		return (
			<div id="container">
				<div className="col1">
					<div className='borderBox'>About Me</div>
					<p>My Name is Liviu, i’m 27 years old, i was born in Vaslui, Romania and i grow up since when i was 6 in Parma, Italy where i lived untill my 20th.
						I do love coding, researching, and finding problems where there is no solution. I love what i do and really makes me happy</p>
					<button className="btn"></button>
				</div>
				<div className="sep">
					<img src="" alt="separator" />
				</div>
				<div className="col2">
					<div className="box">
						<div className="smallTitle">DESIGN</div>
						<h3>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</h3>
					</div>
					<div className="box">
						<div className="smallTitle">DEVELOPMENT</div>
						<h3>I can develop the site based on your needs and suggestions. I can also develop the site from scratch and consult you during the job.</h3>
					</div>
					<div className="box">
						<div className="smallTitle">MAINTENACE</div>
						<h3>I can maintain the site based on your needs and suggestions.</h3>
					</div>
					<div className="sep">
						<img src="" alt="separator" />
					</div>
				</div>
			</div>
		)
	}
}