import React, { Component } from "react";
// imported from connect: mapstatetoprops, mapdispatchtoprops
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addGoal } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: "",
    };
  }

  addGoal() {
    console.log("this.state contains:", this.state);
    console.log("this.props contains:", this.props);
    this.props.addGoal(this.state.text);
  }

  renderGoals() {
    // use this es6 for when value names and property names are exactly how you want them to stay
    const { goals } = this.props;
    console.log(goals);
    return (
      <ul className="list-group col-sm-4">
        {goals.map((goal) => {
          return (
            <li key={goal.id} className="list-group-item">
              <div>{goal.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div className="App">
        <div className="title">ToDoToDay</div>
        <div className="form-inline goal-form">
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
        {this.renderGoals()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    goals: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addGoal }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// alternative:
// export default connect(mapStateToProps, { addGoal })(App);
