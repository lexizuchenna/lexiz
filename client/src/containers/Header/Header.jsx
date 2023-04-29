import "./Header.scss";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrappers";

const Header = () => {
  const scaleVariant = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const headCircles = [images.logo1, images.node, images.redux];
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Alexander</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], delayChildren: 0.5 }}
        transition={{ duration: 0.7 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {headCircles.map((item, i) => (
          <div className="circle-cmp app__flex" key={`circle-${i}`}>
            <img src={item} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
