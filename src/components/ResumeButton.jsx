import React from 'react';

const ResumeButton = ({ file }) => {
  return (
    <a
      href={file}
      download="Resume.pdf" // Set the filename for the downloaded PDF
      className="resume-button"
    >
      Download Resume
    </a>
  );
};

export default ResumeButton;
