import { React } from 'react';
import PDFViewer from './PDFViewer';

const PDFModal = ({ file, onClose }) => {
    return (
        <div className='modalOverlay'>
            <div className='modalContent'>
                <button onClick={onClose} className="closeButton">Close</button>
                <PDFViewer file={file} />
            </div>
        </div>
    );
};

export default PDFModal;