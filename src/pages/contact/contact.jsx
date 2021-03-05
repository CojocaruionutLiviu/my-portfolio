import './contact.css'
import sep from './../../images/sep.svg'
import React from 'react'
import emailjs from 'emailjs-com';

const initialState= {
	name: "",
			reply: "",
			phone: "",
			message: "",
			nameError: "",
			replyError: "",
			phoneError: "",
			messageError: "",
			submitted:"",
}

export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	this.sendEmail = this.sendEmail.bind(this);
}
	validate = ()=>{
			let nameError = "";
			let replyError =  "";
			let phoneError = "";
			let messageError = "";

			if(!this.state.name){
				nameError="Cannot be empty"
			}
			if (!this.state.reply.includes('@')){
				replyError = "Must contain @";
			}
			if(this.state.phone.length < 10){
				phoneError="Must have 10 digits"
			}
			if(this.state.message.length < 1 ){
				messageError= "Cannot be empty"
			}
			if(replyError||nameError||phoneError||messageError){
				this.setState({replyError,nameError,phoneError,messageError});
				return false;
			}
			return true;

	}

	handleChange = event =>{
		const isCheckbox = event.target.type ==='checkbox';
		this.setState({
			[event.target.name]: isCheckbox
			? event.target.checked
			: event.target.value
		});
	};

	sendEmail = (e) => {
		const isValid= this.validate();
		e.preventDefault();

		if (isValid){emailjs.sendForm('service_1roz64t', 'template_1tj75l7', e.target, 'user_zbRNu5XKe8aEuNGDUsNvp')
			.then((result) => {
				this.setState(initialState)
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		}
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

					<input  
					name="name" 
					placeholder="YOUR NAME" 
					autocomplete="off" 
					value={this.state.name}
					onChange={this.handleChange}
					/>
					<div style={{color:'red', fontSize:'12px', textAlign: 'center'}}>{this.state.nameError}</div>
					<input 
					name="reply" 
					placeholder="EMAIL" 
					autocomplete="off" 
					value={this.state.reply}
					onChange={this.handleChange}
					/>
					<div style={{color:'red', fontSize:'12px',textAlign: 'center'}}>{this.state.replyError}</div>
					<input 
					name="phone" 
					placeholder="PHONE NUMBER" 
					
					value={this.state.phone}
					onChange={this.handleChange}
					/>
					<div style={{color:'red', fontSize:'12px',textAlign: 'center'}}>{this.state.phoneError}</div>
					<textarea 
					name="message" 
					placeholder="LEAVE ME A MESSAGE" 
					autocomplete="off" 
					value={this.state.message}
					onChange={this.handleChange}
					/>
					<div style={{color:'red', fontSize:'12px',textAlign: 'center'}}>{this.state.messageError}</div>
					<input type="submit" value="Send" className="btn" autocomplete="off"/>
					<div style={{color:'black', fontSize:'24px',fontWeight: 'bold',textAlign: 'center'}}>{this.state.submitted}</div>
				</form>
			</div>
		)
	}
}