import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../components/navbar";
import style from "./about.module.css";

const AboutComponent = () => {
  return (
    <>
      <Grid container className={style.container}>
      <Grid item xs={12} md={1} className={style.mainBox}>
        </Grid>
        <Grid item xs={12} md={4} className={style.mainBox}>
          <Grid container direction="column">
            <Grid item>
              <h1 className={style.textHead}>EXPERIENCE</h1>
            </Grid>
            <Grid item style={{marginBottom:'30px'}}>
              <h3 className={style.textSubHead}>Stylerobe Outfit Pvt. Ltd</h3>
              <h3 className={style.textSubHead}>Bengaluru,</h3>
              <h3 className={style.textSubHead}> Nov 2019 - Present,</h3>
              <h3 className={style.textSubHead}>Associate Software Engineer</h3>
            </Grid>
            <Grid item>
              <h1 className={style.textHead}>EDUCATION</h1>
            </Grid>
            <Grid item>
              <h3 className={style.textSubHead}>
                Cambridge Institute of Technology,
              </h3>
              <h3 className={style.textSubHead}>Bengaluru, 2019, </h3>
              <h3 className={style.textSubHead}> Bachelor of Engineering, </h3>
              <h3 className={style.textSubHead}>6.26 CGPA</h3>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <h1 className={style.textHead}>PROFESSIONAL SUMMARY</h1>
          <p className={style.text}>
            * Experience in developing the User Interface using HTML, SASS,
            React.js, Material-UI.
            <br />
            * Experience in building Responsive Web pages using media queries
            and grids.
            <br />
            * Worked with JavaScript ES6 features and TypeScript.
            <br />
            * Worked with Material-UI-Styling and SASS (CSS Preprocessor).
            <br />
            * Experience in React Router for developing Single Page
            Applications. <br />
            * Experience in Developing Reusable React components and API
            integration.
            <br />
            * Worked with Redux architecture and React-Hooks for State
            Management.
            <br />
            * Knowledge on building Progressive Web Applications(PWA) with the
            help of Capacitor.js
            <br />
            * Experience in development of RESTful web services and middlewares.
            <br />
            * Worked with MongoDB and Mongoose for database persistence <br />
            * Experience in JSON web tokens for authentication and authorization
            <br />
            * Experience in building Microservices with RabbitMQ
            <br />
            * Experience in Git and GitHub for version control.
            <br />
            * Knowledge on Docker for building Docker-images and
            Docker-containers.
            <br />
            * Knowledge on Nginx for web serving, reverse proxying, caching,
            load balancing.
            <br />
            * Knowledge on Docker-Compose for Running multi-container Docker
            applications
            <br />
            * Basic knowledge on Kubernates for for managing containerized
            workloads and services.
            <br />
            * Knowledge on Deploying Application on Heroku.
            <br />
          </p>
        </Grid>
      </Grid>
      <Navbar active="about" />
    </>
  );
};

export default AboutComponent;
