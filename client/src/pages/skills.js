import { Grid, Typography, Paper } from "@material-ui/core";
import React from "react";
import Navbar from "../components/navbar";
import style from "./skills.module.css";

const SkillsComponent = () => {
  const skills = [
    {
      subHead: [
        { skill: "HTML" },
        { skill: "CSS" },
        { skill: "JavaScript" },
        { skill: "React.js" },
        { skill: "Material UI" },
        { skill: "SASS" },
      ],
      head: "Frontend",
    },
    {
      subHead: [
        { skill: "Node.js" },
        { skill: "Express.js" },
        { skill: "MongoDB" },
        { skill: "Microservices" },
        { skill: "RabbitMQ " },
        { skill: "JWT" },
      ],
      head: "Backend",
    },
    {
      subHead: [
        { skill: "Git/GitHub" },
        { skill: "Docker" },
        { skill: "Docker-Compose" },
        { skill: "Nginx" },
        { skill: "Kubernates" },
        { skill: "Heroku" },
      ],
      head: "Other",
    },
  ];

  const SkillCard = (props) => {
    return (
      <Grid item xs={12} className={style.skillCardBox}>
        {/* <Paper style={{ padding: "6px" }}>
          <Typography>{props.item.skill}</Typography>
        </Paper> */}
        <div className={style.skillCard}>
          <p>{props.item.skill}</p>
        </div>
      </Grid>
    );
  };
  return (
    <>
      <div className={style.container}>
        <Grid container className={style.gridContainer}>
          {skills.map((type, key) => (
            <Grid item xs={12} sm={4} className={style.cardContainer} key={key}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h1>{type.head}</h1>
                </Grid>
                {type.subHead.map((item, k) => (
                  <SkillCard item={item} key={k} />
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
      <Navbar active="skills" />
    </>
  );
};

export default SkillsComponent;
