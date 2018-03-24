import React, { Component } from 'react';

import classes from './Person.css';
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log(`[Person.js] Inside Contructor`, props)
      }
    
      componentWillMount() {
        console.log(`[Person.js] Inside Component Will Mount`)
      }
    
      componentDidMount() {
        console.log(`[Person.js] Inside Component Did Mount`)
      }
    
      render() {
        console.log(`[Person.js] Inside render()`)
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }

};

export default withClass(Person, classes.Person);