import React, { useState, useEffect } from 'react';

const ImageModal = ({ file, onClose }) => {
    // You might not need the scale state if your image sizing is responsive with CSS
    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <button onClick={onClose} className="closeButton">Close</button>
                <img src={file} alt="Resume" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>
    );
};

export default ImageModal;
