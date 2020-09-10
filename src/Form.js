import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form onSubmit={(e) => {
                e.persist()
                e.preventDefault()
                props.onSubmit(e)
            }} >
                <input type="text"
                    name="todoItems"
                    onChange={(e) => {
                        props.onChange(e)
                    }}
                    value={props.value} />
                <input type="submit" value="Submit" />
            </form>
            <div>{props.message}</div>

        </div>
    )
}

