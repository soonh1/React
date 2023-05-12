import React, { Component, Fragment } from 'react'
import '../Css/list.css';

const ListItem = (props) => {
    const renderlist = props.listData.map((item, index) => {
     return (
        <li key={index}>{item.name}<button onClick={() => props.removeList(index)}>Delete</button></ li>
     )
    })
    return (
        <ul className='listItem'>{renderlist}</ul>
    )
}

const List = (props) => {
    const {listData, removeList} = props

    return (
        <ListItem listData={listData} removeList={removeList}/>
    )
}

export default List