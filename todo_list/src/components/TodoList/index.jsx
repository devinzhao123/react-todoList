import React from "react";
import TodoContainer from "../TodoContainer"

class todoList extends React.Component {

    render() {
        return new Array(this.props.todoList.length).fill(0).map(((value, index) =>
                <TodoContainer key={index}
                               hitStatus={this.props.todoList[index].hitStatus}
                               text={this.props.todoList[index].text}
                               id={this.props.todoList[index].id}
                />
        ))
    }
}

export default todoList