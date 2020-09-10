import React, { Component } from 'react'

export default class DeletedItemList extends Component {
    render() {
        let { removed } = this.props
        let deleted = removed.map((item, index) => {
            return <div key={index}>{item.item}</div>
        })
        return (
            <div>
                {deleted}
            </div>
        )
    }
}
