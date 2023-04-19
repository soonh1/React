import React, { Component } from 'react'
import Table from './Components/Table'
import List from './Components/List'

class App extends Component {
  render() {
    const {characters} = this.state
    const listItem = [
        'MONSTER ULTRA CITRON', 
        'MONSTER ULTRA VIOLET', 
        'MONSTER ULTRA PARADISE', 
        'MONSTER MANGO LOCO', 
        'MONSTER PIPELINE PUNCH',
    ]
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <h1>Plan A</h1>
        <List listData={listItem}/>
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
    }
    removeCharacter = (index) => {
        const { characters } = this.state
        
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }
}

export default App