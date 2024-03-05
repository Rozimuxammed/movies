import React from "react";
import { Component } from "react";
import "./MoviesAddForm.css";
class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      view: "",
    };
  }
  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, view } = this.state;
    return (
      <div className="moviesAddForm">
        <h3>Yangi kino qo'shish</h3>
        <form className="addForm d-flex gap-3 align-items-center">
          <input
            value={name}
            name="name"
            onChange={this.changeHandlerInput}
            type="text"
            className="formControl"
            placeholder="Qanday kino ?"
          />
          <input
            value={view}
            name="view"
            onChange={this.changeHandlerInput}
            type="number"
            className="formControl"
            placeholder="Necha marotaba ko'rilgan ?"
          />
          <button className="addFormBtn">Qo'shish</button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
