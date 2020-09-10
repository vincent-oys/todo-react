import React from 'react';
import './App.css';
import Form from "./Form";
import ItemList from "./ItemList";
import DeletedItemList from "./DeletedItemList"
import moment from "moment"
import { v4 as uuid } from 'uuid';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todoItems: [],
      defaultValue: "",
      valid: false,
      validMessage: "",
      deletedItems: []
    }
  }

  todoOnChangeHandler = (e) => {
    this.setState({
      defaultValue: e.target.value,
    })
  }

  todoSubmitHandler = (e) => {
    if (this.state.defaultValue.split("").length > 1 && this.state.defaultValue.split("").length < 10) {
      let date = moment().format()
      this.setState((prevState) => ({
        todoItems: [...prevState.todoItems, { "item": this.state.defaultValue, "time": date }],
        defaultValue: "",
        validMessage: ""
      }))
    } else {
      this.setState({
        validMessage: "Please limit your input within 1 to 200 characters",
        defaultValue: ""
      })
    }
  }

  todoRemove = (e) => {
    let index = e.target.value;
    let removed = this.state.todoItems.splice(index, 1);
    this.setState((prevState) => ({
      deletedItems: [...prevState.deletedItems, ...removed]
    }))
  }

  render() {
    return (
      <div className="App">
        Input:
        <Form
          onChange={this.todoOnChangeHandler}
          value={this.state.defaultValue}
          onSubmit={this.todoSubmitHandler}
          message={this.state.validMessage}
        />
        <br />
        Todo:
        <ItemList todo={this.state.todoItems} deleted={this.todoRemove} />
        <br />
        Completed:
        <DeletedItemList removed={this.state.deletedItems} />
      </div>
    );
  }
}

export default App
