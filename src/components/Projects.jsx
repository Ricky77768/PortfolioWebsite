import { motion } from "framer-motion";
import { projects } from "../constants";

const Projects = () => {
  
  function BottomLinks({ repoText1, repoLink1, repoText2, repoLink2 }) {
    if (repoText2 === "" && repoLink2 === "") {
      return <div className="mt-auto flex border-t border-gray-700 divide-gray-700 divide-x">
              <button className="w-full p-4 inline-flex justify-center items-center align-middle gap-2 rounded-xl font-medium text-sm text-gray-400 bg-neutral-900 hover:bg-neutral-800 hover:text-white"
                onClick={() => window.location.href = repoLink1 }>
                <i className="fab fa-github fa-lg"></i>
                {repoText1}
              </button>
            </div>       
    }

    return <div className="mt-auto flex border-t border-gray-700 divide-gray-700 divide-x">
              <button className="w-full p-4 inline-flex justify-center items-center align-middle gap-2 rounded-bl-xl font-medium text-sm text-gray-400 bg-neutral-900 hover:bg-neutral-800 hover:text-white "
                onClick={() => window.location.href = repoLink1 }>
                <i className="fab fa-github fa-lg"></i>
                {repoText1}
              </button>
              <button className="w-full p-4 inline-flex justify-center items-center align-middle gap-2 rounded-br-xl font-medium text-sm text-gray-400 bg-neutral-900 hover:bg-neutral-800 hover:text-white " 
                onClick={() => window.location.href = repoLink2 }>
                <i className="fab fa-github fa-lg"></i>
                {repoText2}
              </button>
            </div>
  }
  
  return (
    <div className="flex flex-col mx-12 justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}>
          <div className="md:text-4xl text-3xl text-center">Projects</div>
          <hr className="my-4 h-[2px] border-t-0 bg-gradient-to-r from-neutral-700 via-white to-neutral-700" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className="flex flex-row flex-wrap justify-center gap-6">
          {projects.map((project) => ( 
            <div className="group w-[280px] h-[420px] flex flex-col h-full bg-neutral-900 border-2 border-white shadow-sm rounded-xl">
              <div className="h-48 relative flex flex-col justify-center items-center border-b-2">
                <motion.img 
                  src={project.image1} alt="Project Image 1"
                  animate={{
                    opacity: [1, 0, 0, 0, 0, 0, 1],
                    transition: { delay: 3, duration: 6, repeat: Infinity, repeatDelay: 3, repeatType: "loop"},
                  }}
                  className="w-full h-full rounded-t-lg absolute top-0 left-0">
                </motion.img>
                <motion.img 
                  src={project.image2} alt="Project Image 2"
                  animate={{
                    opacity: [0, 1, 1, 1, 1, 1, 0],
                    transition: { delay: 3, duration: 6, repeat: Infinity, repeatDelay: 3, repeatType: "loop"},
                  }}
                  className="w-full h-full rounded-t-lg">
                </motion.img>
              </div>
            
              <div className="p-5">
                <div className="block text-xs uppercase text-blue-500">{project.tech}</div>
                <div className="text-xl font-semibold text-white">{project.title}</div>
                <p className="mt-1 text-gray-400">{project.desc}</p>
              </div>
                  
              <BottomLinks
                repoText1={project.repoText1}
                repoLink1={project.repoLink1}
                repoText2={project.repoText2}
                repoLink2={project.repoLink2}>
              </BottomLinks>
            </div>
          ))}
      </motion.div>
    </div>
  )
}

export default Projects