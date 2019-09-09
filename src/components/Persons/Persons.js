import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  static getDerivedState(props, state) {
    console.log("[Persons.js] getDerivedState");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js]shouldComponentUpdate");
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  // array as objects are reference types, they are only pointers
  //if we update persons, the pointers are changed, the place in the memory doesnt
  // change if the pointer is the same

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshot");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js]did update");
    console.log(snapshot);
  }

  render() {
    console.log("[Persons.js], rendering");

    return this.props.persons.map((person, index) => {
      // converting arrays to new array}

      // KEY ELEMENT NEEDS TO BE IN ERROR BOUNDARY
      // WE ARE LOOKING FOR OUTSIDE ELEMENT FOR MAPPING
      return (
        <Person
          click={() => this.props.clicked(index)}
          // ALTERNATIVE this.deletePersonHandler(this,index)
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
