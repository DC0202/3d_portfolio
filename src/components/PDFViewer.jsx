import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ file }) => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
    const handleResize = () => {
        // Example: Adjust scale based on window width
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
        setScale(0.6); // Adjust scale for smaller devices
        } else {
        setScale(1); // Default scale for larger devices
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize scale based on current size

    return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div>
        <Document
            file={file}
            onLoadError={console.error}
        >
            <Page pageNumber={1} scale={scale}/>
        </Document>
        </div>
    );
};

export default PDFViewer;
