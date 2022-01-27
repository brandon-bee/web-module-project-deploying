import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return(
      <div className="todo-list">
        {this.props.todos.map(item => (
          <Todo handleToggleTodo={this.props.handleToggleTodo} todo={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default TodoList;