import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#151515", color: "#ffffff" }}
      contentArrowStyle={{ borderRight: "12px solid #151515" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <button className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company}
            onClick={() => window.location.href = experience.link }
            className='w-[70%] h-[70%] object-contain'
          />
        </button>
      }
    >
      <div className='text-2xl font-bold'>{experience.title}</div>
      <div className='text-xl'>{experience.company}</div>
      <div className='mt-3 text-md'>{experience.description}</div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div>
      <div className="h-[90px]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}>
        <div className="md:text-5xl text-4xl text-semibold text-center">
          Work Experience
        </div>
        <div className="md:text-2xl text:xl text-center">
          Click on the icons to see the company!
        </div>
      </motion.div>

      <div className='mt-4 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => ( <ExperienceCard key={`experience-${index}`} experience={experience}/>))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience