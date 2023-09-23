import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
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
      <Projects />
      <StarsBG /> 
    </div>
  )
}

export default App
