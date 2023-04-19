import React, { Component } from 'react'
import Table from './Components/Table'
import List from './Components/List'

class App extends Component {
  render() {
    const characters = [
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
      ]
      const listItem = [
        'MONSTER ULTRA CITRON', 
        'MONSTER ULTRA VIOLET', 
        'MONSTER ULTRA PARADISE', 
        'MONSTER MANGO LOCO', 
        'MONSTER PIPELINE PUNCH',
    ]
    return (
      <div className="container">
        <Table characterData={characters}/>
        <h1>Plan A</h1>
        <List listData={listItem}/>
      </div>
    )
  }
}

export default App