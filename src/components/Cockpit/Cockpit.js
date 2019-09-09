import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

//useEffect is function to add to functional components

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js]useEffect");
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      console.log("Cockpit.js - cleanup work in effect");
    };
  }, []); //it will run for once if the array is empty

  useEffect(() => {
    console.log("Cockpit.js 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes will be red
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <p className={assignedClasses.join(" ")}>Vjekoslav</p>
      <h1>{props.title}</h1>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <h2>Going for a cup of coffe, is that nice!</h2>
    </div>
  );
};

export default Cockpit;
