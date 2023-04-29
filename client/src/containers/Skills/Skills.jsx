import { useState, useEffect } from "react";
import {Tooltip as ReactTooltip} from "react-tooltip";

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrappers";
import { client, urlFor } from "../../client";

import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  // const skills = [
  //   {
  //     name: "CSS",
  //     bgColor: "#f4f4f4",
  //     icon: images.logo1
  //   },
  //   {
  //     name: "NodeJs",
  //     bgColor: "#f4f4f4",
  //     icon: images.node
  //   },
  //   {
  //     name: "React",
  //     bgColor: "#f4f4f4",
  //     icon: images.logo1
  //   }
  // ]
  // const experiences = [
  //   {
  //     year: "2022",
  //     works: [{
  //       name: "IconTv",
  //       company: "IconTv",
  //       desc: "I worked in IconTv in the year 2022 as a Web Developer",
  //     }]
  //   },
  //   {
  //     year: "2023",
  //     works: [{
  //       name: "Omaarc",
  //       company: "Omaarc",
  //       desc: "I worked in Omaarc as a Software Engineer in 2020",
  //     }]
  //   },
  // ]
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client
      .fetch(query)
      .then((data) => {
        setExperiences(data);
      })
      .catch((error) => console.log(error));

    client
      .fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 className="head-tec">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text"> {skill.name} </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences.map((exp, index) => (
            <motion.div className="app__skills-exp-item" key={index + 1}>
              <div className="app__skills-exp-year">
                <p className="bold-text"> {exp.year} </p>
              </div>
              <motion.div className="app__skills-exp-works" key={index + 2}>
                {exp.works.map((work, i) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={i}
                    >
                      <h4 className="bold-tex"> {work.name} </h4>
                      <p className="p-text"> {work.company} </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      key={i + 4}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
