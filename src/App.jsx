import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import StarsBG from './components/Stars'

const App = () => {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <StarsBG />
    </div>
  )
}

export default App
