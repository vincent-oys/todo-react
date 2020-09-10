// import React, { Component } from 'react'

// export default class TodoItem extends Component {
//     render() {
//         let { todo, time, id } = this.props
//         return (
//             <div>
//                 <form onSubmit={(e) => { }} value={id}>
//                     {time} - {todo}
//                     <input type="hidden" />
//                     <input type="submit" value="Remove" />
//                 </form>
//             </div>
//         )
//     }
// }

import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            {props.time} - {props.todo}
            <button type="submit" value={props.id} onClick={(e) => {
                e.persist()
                e.preventDefault()
                props.deleted(e)
            }}>Delete</button>
        </div>
    )
}
