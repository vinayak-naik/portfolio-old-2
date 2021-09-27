import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import style from "./projects.module.css";
import p1 from ".././assets/image/p1.png";
import p2 from ".././assets/image/p2.png";
import p3 from ".././assets/image/p3.png";
import p4 from ".././assets/image/p4.png";
import p5 from ".././assets/image/p5.png";
import p6 from ".././assets/image/p6.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Mern Redux Crud",
    tools: ["React.js, Redux, Node.js, Material UI, Express.js, MongoDB, JWT."],
    description: "CRUD Operation using MERN and Redux with JWT Authentication",
    image: "p1",
    github: "https://github.com/vinayak-naik/mern-redux-crud",
    project: "https://mern-redux-crud.herokuapp.com/",
  },
  {
    title: "Mern Backend Pagination",
    tools: ["React.js, Node.js, Express.js, MongoDB, Mongoose."],
    description: "Pagination in backend with Database query",
    image: "p2",
    github: "https://github.com/vinayak-naik/mern-backend-pagination",
    project: "https://mern-backend-pagination.herokuapp.com/",
  },
  {
    title: "Mern Backend Sorting & Filtering",
    tools: ["React.js, Material UI, Node.js, Express.js, MongoDB, Mongoose."],
    description: "Sorting and Filtering in backend with Database query",
    image: "p3",
    github: "https://github.com/vinayak-naik/mern-backend-sorting-filtering",
    project: "https://mern-backend-sorting-filtering.herokuapp.com/",
  },
  {
    title: "Movie Banner",
    tools: ["React.js, Open Api."],
    description: "Search Movie Banner by typing a letter",
    image: "p4",
    github: "https://github.com/vinayak-naik/movie-banner",
    project: "https://vinayak-naik.github.io/movie-banner/",
  },
  {
    title: "Online Course",
    tools: ["HTML, CSS."],
    description: "Static Web Application using only HTML and CSS",
    image: "p5",
    github: "https://github.com/vinayak-naik/online-course",
    project: "https://vinayak-naik.github.io/online-course/",
  },
  {
    title: "Portfolio",
    tools: ["React.js, Node.js, Material UI, Express.js, MongoDB"],
    description: "Personal Portfolio Website",
    image: "p6",
    github: "https://github.com/vinayak-naik/portfolio",
    project: "hhttps://portfolio-vinayak.herokuapp.com/",
  },
];

const ProjectsComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState({
    left: "red",
    right: "white",
  });
  const desktop = useMediaQuery("(min-width:960px)");
  const goLeft = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
    }
  };
  const goRight = () => {
    if (count < projects.length - 1) {
      setCount(count + 1);
    } else {
    }
  };

  const ProjectDetailCard = (props) => {
    const dimg = props.data.image;
    return (
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={1}>
          <div
            className={style.arrowBox}
            onClick={props.left}
            style={
              count === 0 ? { backgroundColor: "rgb(255 255 255 / 34%)" } : null
            }
          >
            <ArrowBackIos fontSize="large" className={style.arrow} />
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className={style.image}>
            <img
              src={
                dimg === "p1"
                  ? p1
                  : dimg === "p2"
                  ? p2
                  : dimg === "p3"
                  ? p3
                  : dimg === "p4"
                  ? p4
                  : dimg === "p5"
                  ? p5
                  : dimg === "p6"
                  ? p6
                  : null
              }
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={style.cardDetails}>
            <div>
              <span className={style.textHead}>Title:&nbsp;</span>
              <span className={style.text}>{props.data.title}</span>
            </div>
            <div>
              <span className={style.textHead}>Tools:&nbsp;</span>
              <span className={style.text}>{props.data.tools}</span>
            </div>
            <div>
              <span className={style.textHead}>Description:&nbsp;</span>
              <span className={style.text}>{props.data.description}</span>
            </div>
            <div style={{ padding: "0" }}>
              <Link to={{ pathname: props.data.github }} target="_blank">
                <button>GitHub Repo.</button>
              </Link>
              <Link to={{ pathname: props.data.project }}  target="_blank">
                <button className={style.button1}>Goto Project</button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={1}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div
            className={style.arrowBox}
            onClick={props.right}
            style={
              count === projects.length - 1
                ? { backgroundColor: "rgb(255 255 255 / 34%)" }
                : null
            }
          >
            <ArrowForwardIos fontSize="large" className={style.arrow} />
          </div>
        </Grid>
      </Grid>
    );
  };

  const ProjectCard = (props) => {
    const [showDetails, setShowDetails] = useState(false);

    const img = props.data.image;

    return (
      <Grid item xs={12} sm={6} md={4} style={{ padding: "10px" }}>
        <div className={style.card}>
          <div className={style.image}>
            <img
              src={
                img === "p1" ? p1 : img === "p2" ? p2 : img === "p3" ? p3 : p4
              }
              onClick={() => setShowDetails(!showDetails)}
            />
          </div>
          {showDetails === true ? (
            <>
              <div className={style.cardDetails}>
                <div>
                  <span className={style.textHead}>Title:&nbsp;</span>
                  <span className={style.text}>{props.data.title}</span>
                </div>
                <div>
                  <span className={style.textHead}>Tools:&nbsp;</span>
                  <span className={style.text}>{props.data.tools}</span>
                </div>
                <div>
                  <span className={style.textHead}>Description:&nbsp;</span>
                  <span className={style.text}>{props.data.description}</span>
                </div>
                <div style={{ padding: "0" }}>
                  <button>GitHub Repo.</button>
                  <button className={style.button1}>Goto Project</button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </Grid>
    );
  };

  return (
    <div
      className={style.container}
      style={
        desktop
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }
          : null
      }
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Projects</h1>
        </Grid>
        {desktop ? (
          <Grid item xs={12}>
            <ProjectDetailCard
              data={projects[count]}
              left={goLeft}
              right={goRight}
            />
          </Grid>
        ) : (
          <>
            <ProjectCard data={projects[0]} />
            <ProjectCard data={projects[1]} />
            <ProjectCard data={projects[2]} />
            <ProjectCard data={projects[3]} />
          </>
        )}
      </Grid>
      <Navbar active="projects" />
    </div>
  );
};

export default ProjectsComponent;
