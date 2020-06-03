import React, { Component } from "react";
import { ADD_GOAL } from "../constants";
// from connect: mapstatetoprops, mapdispatchtoprops
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addGoal } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  addGoal() {
    console.log("this.state contains:", this.state);
    console.log("this", this);
    this.props(addReminder(this.state.text)
  }

  render() {
    return (
      <div className="App">
        <div className="title">ToDoToDay</div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to.."
              onChange={(event) => this.setState({ text: event.target.value })}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.addGoal()}
        >
          Add Goal
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addGoal, dispatch });
}

export default connect(null, mapDispatchToProps)(App);
