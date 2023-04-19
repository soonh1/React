import React, { Component } from 'react'

// Simple component
const ListItem = (props) => {
    const renderlist = props.listData.map((item, index) => <div key={index}>{item}</div>)
    return <div>{renderlist}</div>
}

// Class component
class List extends Component {
    render() {
        const {listData} = this.props
        return (
            <ListItem listData={listData}/>
        )
    }
}

export default List