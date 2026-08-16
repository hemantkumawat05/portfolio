// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import { BrowserRouter } from 'react-router-dom';

// function App() {
//   return (
//     <div className="bg-white text-gray-900 font-sans min-h-screen">
//       <Navbar />
//       <main>
//         <Home />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
