import './contact.css'
import sep from './../images/sep.svg'
import React from 'react'
import emailjs from 'emailjs-com';

export class Contact extends React.Component {
	constructor(props) {
		super(props);
		// this.state.inputs = {
		// 	name: "",
		// 	email: "",
		// 	phone: "",
		// 	message: "",
		// 	nameError: "",
		// 	emailError: "",
		// 	phoneError: "",
		// 	messageError: "",
	}
	// this.sendEmail = this.sendEmail.bind(this);

	sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_1roz64t', 'template_1tj75l7', e.target, 'user_zbRNu5XKe8aEuNGDUsNvp')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset();
	}

	render() {
		return (
			<div id="container">
				<div className='borderBox'>Contact</div>
				<p>Feel free to contact me anytime, on this website or either on my other contacts in the footer below</p>
				<div className="sep">
					<img src={sep} alt="separator" />
				</div>
				<form className="contact-form" onSubmit={this.sendEmail}>
					<input type="hidden" name="contact_number" />

					<input type="text" name="from_name" placeholder="YOUR NAME" autocomplete="off" />

					<input type="email" name="to_reply" placeholder="EMAIL" autocomplete="off" />

					<input type="text" name="phone" placeholder="PHONE NUMBER" autocomplete="off" />

					<textarea name="message" placeholder="LEAVE ME A MESSAGE" />
					<input type="submit" value="Send" className="btn" autocomplete="off" />
				</form>
			</div>
		)
	}
}