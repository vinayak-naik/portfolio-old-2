import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import style from "./contact.module.css";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    setLoading(true)
    if (window.confirm(name + "\n" + email + "\n" + org + "\n" + msg)) {
     
      try {
        const config = {
          method: "POST",
  
          body: JSON.stringify({ name, email, org, msg }), 
  
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
        const response = await fetch("https://portfolio-vinayak.herokuapp.com/api/message/", config);
        const data = await response.json();
        // enter you logic when the fetch is successful
        if(data.name){
          setName("")
          setEmail("")
          setOrg("")
          setMsg("")
          alert("Message Sent Successfully")
          setLoading(false)
        }
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
        alert("Error")
        setLoading(false)

      }




    } 
  };



  return (
    <>
      <div className={style.container}>
        <Grid container className={style.gridContainer}>
          <Grid item xs={12} md={7}>
            <form onSubmit={onSubmitHandler}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h1>Contact Me</h1>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    placeholder="Organization"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    placeholder="Message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} className={style.buttonBox}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!name || !email || !msg}
                    className={style.submitBtn}
                    fullWidth
                    size="large"
                    style={{height:"40px"}}
                  >
                   {loading? <CircularProgress size={30}/>:"submit"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={5} className={style.textContainer}>
            <div>
              <h3>Phone</h3>
              <p>+91 7204132360</p>
              <h3>Email</h3>
              <p>vinayaknaik0324@gmail.com</p>
              <h3>Location</h3>
              <p>Bengaluru</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Navbar active="contact" />
    </>
  );
};

export default ContactComponent;
