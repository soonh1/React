import React, { Component } from 'react'
import Table from './Components/Table'
import List from './Components/List'
import Form from './Form'

class App extends Component {
  render() {
    const {characters} = this.state
    const {lists} = this.state
    return (
      <div className="container">
        {/* <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={ this.handleSubmit }/> */}
        <h1>Plan B</h1>
        <List listData={lists} removeList={this.removeList}/>
      </div>
    )
  }
  state = {
    characters: [
        {
            name: 'Charlie',
            job: 'Janitor',
          },
          {
            name: 'Mac',
            job: 'Bouncer',
          },
          {
            name: 'Dee',
            job: 'Aspring actress',
          },
          {
            name: 'Dennis',
            job: 'Bartender',
          },
    ],
    lists: [
        'MONSTER ULTRA CITRON', 
        'MONSTER ULTRA VIOLET', 
        'MONSTER ULTRA PARADISE', 
        'MONSTER MANGO LOCO', 
        'MONSTER PIPELINE PUNCH',

    ],
    }
    removeCharacter = (index) => {
        const { characters } = this.state
        
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }
    removeList = (index) => {
        const { lists } = this.state
        this.setState({
            lists: lists.filter((list, i) => {
                return i !== index
            })
        })
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }
}

export default App