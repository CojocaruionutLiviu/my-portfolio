import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const CVPDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: 'https://github.com/CojocaruionutLiviu/my-portfolio/tree/main/src/doc/CV-Actualizat-2-3-2021.pdf',
            }}
        />
    )
}

export default CVPDFViewer