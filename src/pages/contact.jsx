import './style.css'
import sep from './../images/sep.svg'
import React from 'react'

export class Contact extends React.Component {
	render() {
		return (
			<div id="container">
				<div className='borderBox'>Contact</div>
				<p>Feel free to contact me anytime, on this website or either on my other contacts in the footer below</p>
				<div className="sep">
					<img src={sep} alt="separator" />
				</div>
			</div>
		)
	}
}