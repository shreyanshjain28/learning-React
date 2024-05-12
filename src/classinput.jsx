import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({                 //here (state) is an function passes as parameter, this allows to access the previous state and perform the updates 
      ...state,                       // this creates a copy of previous object as we should mutate copy inly not the original object s
      inputVal: e.target.value, 
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }


  //React automatically passes the event object e to the handleInputChange function when the input's value changes. 

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" name="task-entry" value={this.state.inputVal} onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>        
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}</li>                      
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;