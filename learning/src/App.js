import React, { Component } from 'react'
import Table from './Components/Table'
import List from './Components/List'
import Form from './Form'

class App extends Component {
  render() {
    const {lists} = this.state
    return (
      <div className="container">
        {/* <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={ this.handleSubmit }/> */}
        <h1>Plan B</h1>
        <List listData={lists} removeList={this.removeList}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
  state = {
    lists: [
        {
            id: 0,
            name: 'MONSTER ULTRA CITRON'
        },
        {
            id: 1,
            name: 'MONSTER ULTRA VIOLET'
        },
        {
            id: 2,
            name: 'MONSTER ULTRA PARADISE'
        },
        {
            id: 3,
            name: 'MONSTER ULTRA LOCO'
        },
        {
            id: 4,
            name: 'MONSTER ULTRA PUNCH'
        },
    ],
    }
    removeList = (index) => {
        const { lists } = this.state
        this.setState({
            lists: lists.filter((list, i) => {
                return i !== index
            })
        })
    }
    handleSubmit = (list) => {
      this.setState({ lists: [...this.state.lists, list]})
    }
}

export default App