import { Photo } from "../assets";
import { motion } from "framer-motion";
import { languages, technologies } from "../constants";

const About = () => {
  const languageElements = languages.map((language) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {delay: 0.5 + Math.random(), duration: 0.8} }} 
      viewport={{ once: true }}
      className="relative flex justify-center items-center w-fit min-w-[75px] h-[40px] border-2 rounded-[25px]">
      <div className="mx-3 text-xl">{language}</div>
    </motion.div>    
  ))

  const techElements = technologies.map((technology) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {delay: 0.5 + Math.random(), duration: 0.8} }} 
      viewport={{ once: true }}
      className="relative flex justify-center items-center w-fit min-w-[75px] h-[40px] border-2 rounded-[25px]">
      <div className="mx-3 text-xl">{technology}</div>
    </motion.div>    
  ))

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.0 } }}
        viewport={{ once: true }}
        className="grid grid-cols-10 items-center justify-items-center mb-4">
          <div className="md:max-w-[35vh] md:col-start-2 md:col-span-2 max-w-[20vh] col-span-10 flex">
            <img className="border-4 border-white rounded-full" src={Photo} alt="Profile Image"/>
          </div>
          <div className="md:col-span-6 md:px-4 py-4 px-8 col-span-10 text-center flex flex-col">
            <p className="md:text-4xl text-3xl font-semibold">
              Hi there!
            </p>
            <p className="md:text-xl text-l mt-3">
              Fascinated by the transformative power of code, I began my programming journey in 2017. Since then, I have explored various areas such as game development, web development, and application development.
            </p>
          </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.0 } }}
        viewport={{ once: true }}
        className="grid grid-cols-10 gap-4">
          <div className="md:col-start-2 md:col-span-4 md:mx-0 mx-8 col-span-10">
            <div className="md:text-4xl text-3xl text-center">Languages</div>
            <hr className="md:my-4 my-2 h-[2px] border-t-0 bg-gradient-to-r from-neutral-700 via-white to-neutral-700" />
            <div className="flex flex-row flex-wrap gap-2 justify-center">
              {languageElements}
            </div>
          </div>

          <div className="md:col-span-4 md:mx-0 mx-8 col-span-10">
            <div className="md:text-4xl text-3xl text-center">Technologies</div>
            <hr className="md:my-4 my-2 h-[2px] border-t-0 bg-gradient-to-r from-neutral-700 via-white to-neutral-700" />
            <div className="flex flex-row flex-wrap gap-2 justify-center">
              {techElements}     
            </div>
          </div>
      </motion.div>

    </div>
  )
}

export default About