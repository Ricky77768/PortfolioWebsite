import { Logo } from "../assets";
import { motion } from "framer-motion";

const Navbar = ({ home, about, experience, projects }) => {
  const scrollToHome = () => home.current.scrollIntoView();
  const scrollToAbout = () => about.current.scrollIntoView();
  const scrollToExperience = () => experience.current.scrollIntoView();
  const scrollToProjects = () => projects.current.scrollIntoView();

	return (
		<header className="sticky top-0 h-[0] flex flex-wrap justify-center md:flex-nowrap z-50 w-full text-lg">
			<nav
				className="w-5/6 relative bg-black bg-opacity-80 border-2 border-white-200 rounded-[30px] mt-4 px-6 md:flex md:items-center md:justify-between"
				style={{ minHeight: "60px" }}>
				<div className="flex items-center justify-between">
					<a className="flex-none" onClick={scrollToHome}>
						<img className="w-12 py-1 rounded-[36px] h-auto" src={Logo} alt="Logo"></img>
					</a>
					<div className="md:hidden">
						<button
							type="button"
							className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border-2 font-medium bg-gray text-white shadow-sm align-middle hover:bg-gray-500 transition-all text-sm"
							data-hs-collapse="#navbar-collapse-with-animation">
							<svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path
									d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
								/>
							</svg>
							<svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</button>
					</div>
				</div>

				<div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
					<div className="my-1 md:my-0"></div>
					<div className="flex flex-col gap-y-1 mr-6 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-8 md:mt-0 md:pl-7">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: 0.1 } }}
							whileHover={{ color: "#2FC4DE", transition: { duration: 0.25 } }}>
							<button className="text-white-100" onClick={scrollToHome} style={{ display: "block" }}>
								Home
							</button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.1 } }}
							whileHover={{ color: "#2FC4DE", transition: { duration: 0.25 } }}>
							<button className="text-white-100" onClick={scrollToAbout} style={{ display: "block" }}>
								About
							</button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.1 } }}
							whileHover={{ color: "#2FC4DE", transition: { duration: 0.25 } }}>
							<button className="text-white-100" onClick={scrollToExperience} style={{ display: "block" }}>
								Experience
							</button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.1 } }}
							whileHover={{ color: "#2FC4DE", transition: { duration: 0.25 } }}>
							<button className="text-white-100" onClick={scrollToProjects} style={{ display: "block" }}>
								Projects
							</button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.1 } }}
							whileHover={{ color: "#2FC4DE", transition: { duration: 0.25 } }}>
							<button className="text-white-100 font-semibold" href="/Resume.pdf" style={{ display: "block" }}>
								Resume
							</button>
						</motion.div>
					</div>
					<div className="my-2 md:my-0"></div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
