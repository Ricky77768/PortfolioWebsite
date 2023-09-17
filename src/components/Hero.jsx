import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import EarthCanvas from './Planet';

const Hero = () => {
  return (
    <div class="mx-container h-screen">
      <motion.div
				initial={{ y: 40, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
        class="h-3/10 flex flex-col items-center justify-end">
          <p class="text-7xl font-bold">Ricky Lu</p>
          <p class="text-slate-300">
            <TypeAnimation
              sequence={[
                'CS @ UWaterloo', 5000,
                'Software Developer', 5000,
                'Hello, World!', 5000
              ]}
              wrapper="span"
              speed={70}
              style={{ fontSize: '1.8em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>
      </motion.div>

      <div class="h-4/10 md:h-6/10 text-4xl">
        <div class="h-full md:grid md:grid-cols-4 md:gap-3">
          <motion.div
	          initial={{ x: 40, opacity: 0 }}
	          animate={{ x: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
            class="hidden md:flex">
              <p>Email + Resume</p>     
          </motion.div>
          
          <motion.div
	          initial={{ opacity: 0 }}
	          animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.2 } }}
            class="min-h-full md:col-span-2"> 
              <EarthCanvas /> 
          </motion.div>
 
          <motion.div
	          initial={{ x: -40, opacity: 0 }}
	          animate={{ x: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
            class="hidden md:flex">
            <p>Linkedin + Github</p> 
          </motion.div>
        </div>
      </div>
      
      <motion.div
	      initial={{ y: -40, opacity: 0 }}
	      animate={{ y: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
        class="h-2/10 md:h-0 md:hidden">
          <p>Mobile - Email, Resume, LinkedIn, Github</p> 
      </motion.div>

      <motion.div
	      initial={{ y: -40, opacity: 0 }}
	      animate={{ y: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
        class="h-1/10 flex-1 text-4xl">
          <p>Scroll</p> 
      </motion.div>
    </div>
  )
}

export default Hero