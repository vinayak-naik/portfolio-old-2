import React from "react";
import Navbar from "../components/navbar";
import style from "./home.module.css";
import photo from ".././assets/image/myPic1.png";
import { Link, useHistory } from "react-router-dom";
import resume from "../assets/files/resume.pdf";

const HomeComponent = () => {
  const history = useHistory();

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.photoBox}>
            <img src={photo} />
          </div>
        </div>
        <div className={style.right}>
          <div>
            <h1>Hi, I'm Vinayak</h1>
            <h2>Full-Stack Developer</h2>
            <div>
              <button
                className={style.button}
                onClick={() => history.replace("/contact")}
              >
                Contact Me
              </button>
              <Link to={resume} target="_blank" download><button className={style.button}>Download Resume</button></Link>
              
            </div>
          </div>
        </div>
      </div>
      <Navbar active="" />
    </>
  );
};

export default HomeComponent;
