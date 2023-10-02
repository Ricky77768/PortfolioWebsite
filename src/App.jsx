import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import StarsBG from './components/Stars'

const App = () => {
  const homeRef = useRef()
  const aboutRef = useRef()
  const experienceRef = useRef()
  const projectsRef = useRef()

  useEffect(() => {
    import('preline');
  }, []);

  return (    
    <div>
      <div className='fixed inset-0'>
        <StarsBG />
      </div> 
      
      <div className='absolute'>
        <Navbar home={homeRef} about={aboutRef} experience={experienceRef} projects={projectsRef}/>
        <div ref={homeRef} className='max-h-0'></div>
        <Home />
        <div ref={aboutRef} className='max-h-0'></div>
        <About />
        <div ref={experienceRef} className='max-h-0'></div>
        <Experience />
        <div ref={projectsRef} className='max-h-0'></div>
        <Projects />
      </div>
    </div>
  )
}

export default App
