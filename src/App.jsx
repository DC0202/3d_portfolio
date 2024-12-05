import  { React, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, PDFModal, ImageModal } from "./components";
import { resume, bg } from "./assets";

const App = () => {

  const [showImageModal, setShowImageModal] = useState(false);

  const toggleImageModal = () => setShowImageModal(!showImageModal);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar onShowImageModal={toggleImageModal}/>
        {/* {showImageModal && <ImageModal file={resume} onClose={toggleImageModal} />} */}
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;