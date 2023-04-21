import React, { Component } from 'react'

const ListItem = (props) => {
    const renderlist = props.listData.map((item, index) => {
     return (
        <div key={index}>{item}</div>
     )
    })
    return (
        <div>{renderlist}</div>
    )
}

const List = (props) => {
    const {listData, removeList} = props

    return (
        <ListItem listData={listData} removeList={removeList}/>
    )
}

export default List