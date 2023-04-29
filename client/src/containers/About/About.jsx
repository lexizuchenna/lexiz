import { useState, useEffect } from "react";

import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrappers";

import { images } from "../../constants";

const About = () => {
  // const abouts  = [
  //   {title: 'Web Development', description: 'I am a Good Developer', imgUrl: images.design1},
  //   {title: 'Web Deisgn', description: 'I am a Good Designer', imgUrl: images.design2},
  //   {title: 'UI/UX', description: 'I am a Good Developer', imgUrl: images.design3},
  //   {title: 'FullStack', description: 'I am a Good Developer', imgUrl: images.design4},
  // ]

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client
      .fetch(query)
      .then((data) => {
        setAbouts(data)
      })
      .catch();
  }, []);
  return (
    <>
      <h2 className="head-text">
        Here are some of my
        <span> Design</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`${about.title} ${i}`}
          >
            <img src={urlFor(about.imgUrl)} alt={`${about.title}-design`} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
