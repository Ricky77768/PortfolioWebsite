import { Photo } from "../assets";
import { motion } from "framer-motion";
import { languages, technologies } from "../constants";

const About = () => {
  const languageElements = languages.map((technology) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {delay: 0.5 + Math.random(), duration: 0.8} }} 
      viewport={{ once: true }}
      className="relative flex justify-center items-center w-fit min-w-[80px] h-[45px] border-2 rounded-[25px]">
      <div className="mx-3 text-2xl">{technology}</div>
    </motion.div>    
  ))

  const techElements = technologies.map((technology) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {delay: 0.5 + Math.random(), duration: 0.8} }} 
      viewport={{ once: true }}
      className="relative flex justify-center items-center w-fit min-w-[80px] h-[45px] border-2 rounded-[25px]">
      <div className="mx-3 text-2xl">{technology}</div>
    </motion.div>    
  ))

  return (
    <div className="mx-container h-screen">
      <div className="h-[90px]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.0 } }}
        viewport={{ once: true }}
        className="h-[40vh] grid grid-cols-10 items-center justify-items-center">
          <div className="max-w-[33vh] col-start-2 col-span-2 flex">
            <img className="border-8 border-white rounded-full" src={Photo} alt="Profile Image"/>
          </div>
          <div className="col-span-6 flex flex-col px-4">
            <p className="font-semibold text-4xl">
              Hi there!
            </p>
            <p className="text-xl mt-3">
              Fascinated by the transformative power of code, I began my programming journey in 2017. Since then, I have explored various areas such as game development, web development, and application development.
            </p>
          </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.0 } }}
        viewport={{ once: true }}
        className="h-4/10 grid grid-cols-10 gap-4">
          <div className="col-start-2 col-span-4">
            <div className="text-semibold text-4xl text-center">Languages</div>
            <hr className="my-4 h-[2px] border-t-0 bg-gradient-to-r from-neutral-700 via-white to-neutral-700" />
            <div className="flex flex-row flex-wrap gap-3 justify-center">
              {languageElements}
            </div>
          </div>

          <div className="col-span-4">
            <div className="text-semibold text-4xl text-center">Technologies</div>
            <hr className="my-4 h-[2px] border-t-0 bg-gradient-to-r from-neutral-700 via-white to-neutral-700" />
            <div className="flex flex-row flex-wrap gap-3 justify-center">
              {techElements}     
            </div>
          </div>
      </motion.div>

    </div>
  )
}

export default About