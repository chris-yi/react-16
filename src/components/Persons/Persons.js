import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log(`[Persons.js] Inside Contructor`, props)
  }

  componentWillMount() {
    console.log(`[Persons.js] Inside Component Will Mount`)
  }

  componentDidMount() {
    console.log(`[Persons.js] Inside Component Did Mount`)
  }

  // componentWillUnmount() {
  //   console.log(`[Persons.js] Inside Component Will UNMount "I am about to be unmounted"`)
  // }

  componentWillReceiveProps(nextProps) {
    console.log(`[UPDATE Persons.js] Inside componentWillReceiveProps()`, nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[UPDATE Persons.js] Inside shouldComponentUpdate()`, nextProps, nextState)
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`[UPDATE Persons.js] Inside componentWillUpdate()`, nextProps, nextState)
  }

  componentDidUpdate() {
    console.log(`[UPDATE Persons.js] Inside componentDidUpdate()`)
  }

  render() {
    console.log(`[Persons.js] Inside render()`)
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;