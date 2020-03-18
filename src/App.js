import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// import Radium, { StyleRoot} from 'radium';
// import { render } from '@testing-library/react';

class App extends Component {

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'asfa2', name: 'Manu', age: 29 },
      { id: 'asfa3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }
  
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this.setState({
      // persons : [
      //   { id: 'asfa1', name: 'Max', age: 28 },
      //   { id: 'asfa2', name: event.target.value, age: 29 },
      //   { id: 'asfa3', name: 'Stephanie', age: 27 }
      // ]
    // })
    this.setState( {persons: persons} )
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',

    //   ':hover': {
    //     backgroundColor: 'salmon',
    //     color: 'black',
    //   }
    // }; 
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonsHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}

          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>My Hobbies: Playing Football </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} /> */}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover']={
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length<=1){
      classes.push('bold'); //classes = ['red','bold']
    }

    return (
     // <StyleRoot>
        <div className="App">
          <h1>Hi, i'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button className="button" onClick={this.togglePersonsHandler}>Toggle Person</button>
            {persons}
        </div>
      //</StyleRoot>
    );
  }
  
}
// export default Radium(App);
export default App;
