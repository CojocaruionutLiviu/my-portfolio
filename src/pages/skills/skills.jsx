import './skills.css'
import html from './../images/html.svg'
import css3 from './../images/css3.svg'
import sass from './../images/sass.svg'
import js from './../images/js.svg'
import rt from './../images/react.svg'
import bs from './../images/bs.svg'
import gits from './../images/gits.svg'
import figma from './../images/figma.svg'
import node from './../images/node.svg'
import mysql from './../images/mysql.svg'
import ts from './../images/ts.svg'
import cplus from './../images/c+.svg'
import c from './../images/c.svg'
import en from './../images/en.svg'
import it from './../images/it.svg'
import ro from './../images/ro.svg'
import React from 'react'
export class Skills extends React.Component {
	render() {
		return (
			<div id="container1">
				<div className='borderBox1'>SKILLS</div>
				<div className="smallTitle">USING NOW:</div>
				<div className="skills">
					<div className="img-cont">
						<img src={html} alt="" />
						<p>HTML5</p>
					</div>
					<div className="img-cont">
						<img src={css3} alt="" />
						<p>CSS3</p>
					</div>
					<div className="img-cont">
						<img src={sass} alt="" />
						<p>SASS</p>
					</div>
					<div className="img-cont">
						<img src={js} alt="" />
						<p>JAVASCRIPT</p>
					</div>
					<div className="img-cont">
						<img src={rt} alt="" />
						<p>REACT</p>
					</div>
					<div className="img-cont">
						<img src={bs} alt="" />
						<p>BOOTSTRAP</p>
					</div>
					<div className="img-cont">
						<img src={gits} alt="" />
						<p>GIT</p>
					</div>
					<div className="img-cont">
						<img src={figma} alt="" />
						<p>FIGMA</p>
					</div>
					<div className="img-cont">
						<img src={node} alt="" />
						<p>NODEJS</p>
					</div>
					<div className="img-cont">
						<img src={mysql} alt="" />
						<p>MYSQL</p>
					</div>
				</div>
				<div className="smallTitle">LEARNING:</div>
				<div className="skills">
					<div className="img-cont">
						<img src={ts} alt="" />
						<p>TYPESCRIPT</p>
					</div>
					<div className="img-cont">
						<img src={cplus} alt="" />
						<p>C++</p>
					</div>
					<div className="img-cont">
						<img src={c} alt="" />
						<p>
							c
						</p>
					</div>
				</div>
				<div className="smallTitle">OTHERS:</div>
				<div className="skills">
					<div className="img-cont">
						<img src={en} alt="" />
						<p>ENGLISH B2</p>
					</div>
					<div className="img-cont">
						<img src={it} alt="" />
						<p>ITALIAN NATIVE</p>
					</div>
					<div className="img-cont">
						<img src={ro} alt="" />
						<p>ROMANIAN NATIVE</p>
					</div>
				</div>
			</div>
		)
	}
}