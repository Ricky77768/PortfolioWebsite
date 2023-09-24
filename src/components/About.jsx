import { motion } from "framer-motion";

const About = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div className="mx-container h-screen">
      <div className="h-[90px]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.0 } }}
        viewport={{ once: true }}
        className="h-4/10 bg-yellow-200">
          Test
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.0 } }}
        viewport={{ once: true }}
        className="h-2/10 bg-red-200">
          Test 2
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.0 } }}
        viewport={{ once: true }}
        className="h-3/10 bg-green-300">
          <motion.svg
            width="90"
            height="90"
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="30"
              stroke="#ffffff"
              variants={draw}
              custom={1}
            />
    </motion.svg>
      </motion.div>

    </div>
  )
}

/*
Tracing motion

    

  

*/

export default About