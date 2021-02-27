import './style.css'
import React from 'react'
export class Contact extends React.Component {
	render() {
		return (
			<div className="container">
				<div className='borderBox'>Contact</div>
				<p>Feel free to contact me anytime, on this website or either on my other contacts in the footer below</p>
				<div className="sep">
					<img src="" alt="separator" />
				</div>
				<div className="form">
					<input type="text" placeholder="ENTER YOUR NAME*" />
					<input type="text" placeholder="ENTER YOUR EMAIL*" />
					<input type="text" placeholder="PHONE NUMBER" />
					<input type="text" placeholder="YOUR MESSAGE" />
					<button className="btn">Submit</button>
				</div>
			</div>
		)
	}
}