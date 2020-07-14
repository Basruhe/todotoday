import React, { Component } from "react";
// imported from connect: mapstatetoprops, mapdispatchtoprops
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addGoal, deleteGoal } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: "",
    };
  }

  addGoal() {
    // console.log("(App) this.state contains:", this.state);
    // console.log("(App) this.props contains:", this.props);
    console.log("this.state.dueDate", this.state.dueDate);
    this.props.addGoal(this.state.text, this.state.dueDate);
  }

  deleteGoal(id) {
    // console.log("deleting the following:", id);
    console.log("this.props", this.props);
    console.log("deleting goal with the following id:", id);
    this.props.deleteGoal(id);
  }

  renderGoals() {
    // use this es6 for when value names and property names are exactly how you want them to stay
    const { goals } = this.props;
    console.log("(render) Current goals:", goals);
    return (
      <ul className="list-group col-sm-4">
        {goals.map((goal) => {
          return (
            <li key={goal.id} className="list-group-item">
              <div>{goal.text}</div>
              <div
                className="list-item delete-button"
                onClick={() => this.deleteGoal(goal.id)}
              >
                &#x2715;
              </div>
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
            <input
              className="form-control"
              type="datetime-local"
              onChange={(event) =>
                this.setState({ dueDate: event.target.value })
              }
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
  return bindActionCreators({ addGoal, deleteGoal }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// alternative:
// export default connect(mapStateToProps, { addGoal })(App);
