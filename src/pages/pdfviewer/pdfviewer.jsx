import './style.css'
import React from 'react'
import CVPDFViewer from '../../../utils/pdfviewer'

export class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <CVPDFViewer />
            </div>
        )
    }
}