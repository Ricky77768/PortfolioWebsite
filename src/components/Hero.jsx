
const Hero = () => {
  return (
    <div class="mx-container h-screen">
      <div class="pt-28 h-3/10 flex flex-col">
        <div class="text-5xl sm:text-6xl font-bold">
          Hi, I'm Ricky Lu
        </div>
        <div class="text-3xl sm:text-4xl font-semibold">
          tagline here
        </div>
      </div>

      <div class="h-4/10 md:h-6/10 text-4xl *bg-green-900">
        <div class="h-full md:grid md:grid-cols-4 md:gap-3">
      
          <div class="bg-green-700 hidden md:flex">Email + Resume</div>
          <div class="bg-green-500 h-full md:col-span-2">3D Glowing Spinning Cube + Maybe the tracing box</div>
          <div class="bg-green-300 hidden md:flex">Linkedin + Github</div>
          
        </div>
      </div>

      <div class="h-2/10 md:h-0 md:hidden bg-yellow-900">
        Mobile Buttons
      </div>
      
      <div class="h-1/10 flex-1 text-4xl bg-red-900">
        Scroll 
      </div>
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

export default Hero