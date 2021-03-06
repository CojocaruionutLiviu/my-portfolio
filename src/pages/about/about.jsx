import './about.css'
import React from 'react'

export class About extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div id="container">
				<div className="col1">
					<div className='borderBox'>About Me</div>
					<p>My Name is Liviu, I’m 27 years old, i was born in Vaslui, Romania and i grow up since when i was 6 in Parma, Italy where i lived untill my 20th.
						I love coding, researching and finding problems where there is no solution. I love what I do and really makes me happy</p>
					<a className="btn" href="https://drive.google.com/file/d/1cAVlhaod23IsXlvz1u7jt3hRJ7UXNyNQ/view?usp=sharing" target="_blank"> TO MY RESUME</a>
				</div>
			</div>
		)
	}
}