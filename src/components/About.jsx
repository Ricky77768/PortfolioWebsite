
const About = () => {
  return (
    <div id="about" className="h-screen">
      <h1 className="text-4xl">
        About Section
      </h1>
    </div>
  )
}

/*
Tracing motion

      <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="30"
        cy="30"
        r="20"
        stroke="#ff0055"
        variants={draw}
        custom={0.5}
      />
    </motion.svg>

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

*/

export default About