import React, { Component } from "react";
import { ADD_GOAL } from "../constants";
// imported from connect: mapstatetoprops, mapdispatchtoprops
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addGoal } from "../actions";

// 7? might have missed something here
// 8 currently here

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  addGoal() {
    console.log("this.state contains:", this.state);
    console.log("this.props contains:", this.props);
    this.props.addGoal(this.state.text);
  }

  // renderGoals() {
  //   const { goals } = this.props;
  //   return (
  //     <ul className="list-group col-sm-4">
  //       {goals.map((goals) => {
  //         return (
  //           <li key={goals.id} className="list-group-item">
  //             <div>{goals.text}</div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  //   console.log(goals);
  // }

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
        {/* {this.renderGoals()} */}
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
  return bindActionCreators({ addGoal }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
