import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import EarthCanvas from './Planet';

const Hero = () => {
  return (
    <div className="mx-container h-screen">
      <motion.div
				initial={{ y: 40, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
        className="h-3/10 flex flex-col items-center justify-end">
          <p className="text-7xl font-bold">Ricky Lu</p>
          <p className="text-slate-300">
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

      <div className="h-6/10">
        <div className="h-full grid grid-cols-12 place-items-stretch">
          <motion.div
	          initial={{ x: 40, opacity: 0 }}
	          animate={{ x: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
            className="flex flex-col col-start-2 col-span-2 items-end justify-center gap-10">
              <button type="button" class="w-[90px] h-[90px] flex flex-col justify-center items-center rounded-full border-4 border-white bg-black text-white text-lg
                hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-white transition-all">
              <i class="pt-1 fas fa-envelope fa-lg"></i>
              Email
              </button>

              <button type="button" class="w-[90px] h-[90px] flex flex-col justify-center items-center rounded-full border-4 border-white bg-black text-white text-lg
                hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-white transition-all">
              <i class="pt-1 fas fa-address-card fa-lg"></i>
              Resume
              </button>
          </motion.div>

          <motion.div
	          initial={{ opacity: 0 }}
	          animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.2 } }}
            className="flex col-span-6 min-h-0 min-w-0">
              <EarthCanvas></EarthCanvas>
          </motion.div>
 
          <motion.div
	          initial={{ x: -40, opacity: 0 }}
	          animate={{ x: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
            className="flex flex-col col-span-2 items-start justify-center gap-10">
              <button type="button" class="w-[90px] h-[90px] flex flex-col justify-center items-center rounded-full border-4 border-white bg-black text-white text-lg
                hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-white transition-all">
              <i class="pt-1 fab fa-github fa-lg"></i>
              GitHub
              </button>

              <button type="button" class="w-[90px] h-[90px] flex flex-col justify-center items-center rounded-full border-4 border-white bg-black text-white text-lg
                hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-white transition-all">
              <i class="pt-1 fab fa-linkedin fa-lg"></i>
              LinkedIn
              </button>
          </motion.div>
        </div>
      </div>

      <motion.div
	      initial={{ y: -40, opacity: 0 }}
	      animate={{ y: 0, opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
        className="h-1/10 flex flex-col items-center">
          <a href='#about'>
            <div className='w-9 h-16 p-2 rounded-3xl border-4'>
              <motion.div
                animate={{ y: [0, 26, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
                className='w-3 h-4 rounded-full bg-white'
              />
            </div>
          </a>
      </motion.div>
    </div>
  )
}

export default Hero