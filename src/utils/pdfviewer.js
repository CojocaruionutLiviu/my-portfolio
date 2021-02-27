import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const CVPDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: 'https://github.com/CojocaruionutLiviu/my-portfolio/tree/main/src/doc/CV-Actualizat.pdf',
            }}
        />
    )
}

export default CVPDFViewer