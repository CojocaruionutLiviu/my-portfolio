import './footer.css'
import In from './../../images/in.svg'
import git from './../../images/git.svg'
import mail from './../../images/mail.svg'
import facebook from './../../images/facebook.svg';
import instagramfooter from './../../images/instagramfooter.svg';
import doublearr from './../../images/doublearr.svg';
import React from 'react'
export class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.scrollTop = this.scrollTop.bind(this);
	}

	scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div className="footer-container">
				<img src={doublearr} alt="" onClick={this.scrollTop} id='arrow' style={{ zIndex: '1', padding: '10px' }} />
				<h3 onClick={this.scrollTop} style={{ zIndex: '1', padding: '10px', cursor: 'pointer' }}>Back to Top</h3>
				<div className="footer-socials" style={{ zIndex: '1' }}>
					<a href="https://www.linkedin.com/in/ionutliviucojocaru/">
						<img src={In} alt="" />
					</a>
					<a href="https://www.github.com/CojocaruionutLiviu">
						<img src={git} alt="" />
					</a>
					<a href="mailto:cojocaruionutliviu@gmail.com">
						<img src={mail} alt="" />
					</a>
					<a href="https://www.facebook.com/IonutLiviuCojocaru/">
						<img src={facebook} alt="" />
					</a>
					<a href="https://www.instagram.com/call.me.livio">
						<img src={instagramfooter} alt="" />
					</a>
				</div>
				<h4>@2021 Cojocaru-Ionut Liviu All Rights Reserved.</h4>
			</div >
		)
	}
}