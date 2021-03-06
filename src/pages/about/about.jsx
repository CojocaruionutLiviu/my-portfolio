import './about.css'
import sep from './../../images/sep.svg'
import React from 'react'
import { Link } from "react-router-dom";
import { Document,pdfjs } from 'react-pdf'
export class About extends React.Component {
	constructor(props){
		super(props);
		pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	}
	render() {
		return (
			<div id="container">
				<div className="col1">
					<div className='borderBox'>About Me</div>
					<p>My Name is Liviu, I’m 27 years old, i was born in Vaslui, Romania and i grow up since when i was 6 in Parma, Italy where i lived untill my 20th.
						I love coding, researching and finding problems where there is no solution. I love what I do and really makes me happy</p>
					<Document 
						file="./CV.pdf"
					/>
				</div>
			</div>
		)
	}
}