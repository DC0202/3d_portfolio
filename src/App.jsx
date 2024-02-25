import  { React, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, PDFModal, ImageModal } from "./components";
import { resume } from "./assets";

const App = () => {

  const [showImageModal, setShowImageModal] = useState(false);

  const toggleImageModal = () => setShowImageModal(!showImageModal);

  return (

    // TODO:
    // DONE 1.Change NavBar: About, Work, Contact, LinkedIn, Hire-Me, Resume
    // 2. Update Contact Part of Page.
    // DONE 3. Change scrolled navbar color.
    // DONE 4. Reduce the Computer size and add Typing Animation Text.
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar onShowImageModal={toggleImageModal}/>
          {showImageModal && <ImageModal file={resume} onClose={toggleImageModal} />}
          <Hero />
        </div>
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