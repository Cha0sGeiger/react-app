import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import BackgroundImagePage from "../components/Background/Background";
import Cockpit from "../components/Cockpit/Cockpit";

// CONTAINER COMPONENTS - THEY CONTAIN STATE

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "a1", name: "Ivan", age: "22" },
      { id: "a2", name: "Petar", age: "40" },
      { id: "a3", name: "Ivano", age: "38" },
      { id: "a4", name: "Boro", age: "25" }
    ],

    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerived", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] didmount");
    //fetching new data from server
  }

  componentDidUpdate() {
    console.log("App.js[component did update]");
  }

  shouldComponentUpdate() {
    console.log("App.js[shouldcomponentUpdate]");
   
      return true;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    // we are creating a copy beacuse we are changeing the original array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    // SET STATE TO OPOSITE OF WHAT BOOLEAN SHOWPERSON IS,
    // SO IF BOOLEAN IS TRUE IT SETS DOESHOW TO OPPOSITE.
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    // converting arrays to new array

    // KEY ELEMENT NEEDS TO BE IN ERROR BOUNDARY
    // WE ARE LOOKING FOR OUTSIDE ELEMENT FOR MAPPING

    return (
      <div className={classes.App}>
        <BackgroundImagePage>
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
            }}
          >
            Remove Cockpit
          </button>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </BackgroundImagePage>
      </div>
    );
    // USING BIND IS BETTER OPTION THAN ARROW FUNCTION SWITCHING
    // return React.createElement('div',{className:App},React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
