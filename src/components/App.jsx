import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">ToDoToDay</div>
        <div className="form-inline">
          <div className="form-group">
            <input className="form-control" placeholder="I have to.." />
          </div>
        </div>
        <button type="button" classname="btn btn-success">
          Add Goal
        </button>
      </div>
    );
  }
}
export default App;
