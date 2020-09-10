import React, { Component } from 'react'
import TodoItem from "./TodoItem"


export default class ItemList extends Component {

    render() {
        let { todo } = this.props;
        let deleted = this.props.deleted

        let todos = todo.map((item, index) => {
            return <TodoItem todo={item.item} time={item.time} id={index} deleted={deleted} />
        })

        return (
            <div>
                {todos}
            </div>

        )
    }
}
