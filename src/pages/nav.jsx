import './style.css'
import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0, collapse: false, };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.hadleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	handleClick(event) {
		this.setState({ collapse: !this.state.collapse });
	}

	render() {

		return (
			<div>
				{ this.state.width >= 600 ?
					<nav>
						<ul>
							<li>
								<Link to="/" className="link">Home</Link>
							</li>
							<li>
								<Link to="/about" className="link">About</Link>
							</li>
							<li>
								<Link to="/skills" className="link">Skills</Link>
							</li>
							<li>
								<Link to="/portfolio" className="link">Portfolio</Link>
							</li>
							<li>
								<Link to="/contact" className="link">Contact Me</Link>
							</li>
						</ul>
					</nav>
					:
					<div>
						{this.state.collapse ?
							<nav className="toggle-nav">
								<Link to="#" className="menu-bars">
									<AiIcons.AiOutlineClose onClick={(event) => this.handleClick(event)} />
								</Link>
								<ul>
									<li>
										<Link to="/" className="link" onClick={(event) => this.handleClick(event)}>Home</Link>
									</li>
									<li>
										<Link to="/about" className="link" onClick={(event) => this.handleClick(event)}>About</Link>
									</li>
									<li>
										<Link to="/skills" className="link" onClick={(event) => this.handleClick(event)}>Skills</Link>
									</li>
									<li>
										<Link to="/portfolio" className="link" onClick={(event) => this.handleClick(event)}>Portfolio</Link>
									</li>
									<li>
										<Link to="/contact" className="link" onClick={(event) => this.handleClick(event)}>Contact Me</Link>
									</li>
								</ul>
							</nav>
							:
							<nav>
								<Link to="#" className="menu-bars">
									<FaIcons.FaBars onClick={(event) => this.handleClick(event)} />
								</Link>
							</nav>
						}
					</div>
				}
			</div>
		)
	}
}