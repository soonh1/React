import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        // add id
        id: '',
        name: '',
    }
    
    state = this.initialState

    // add validation
    handleChange = (event) => {
        const { name, value } = event.target
        const { id } = event.target

        this.setState({
            [name]: value,
            [id] : this.props.listData.length,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    // handleClick = (event) => {
    //     event.preventDefault()
    //     console.log(this.props.listData.length)
    // }

    render() {
        const { name } = this.state

        return(
            <form>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text'
                    name='name'
                    id='id'
                    value={name}
                    onChange={this.handleChange}
                />
                <input
                    type='button'
                    value='Submit'
                    onClick={this.submitForm}
                />
                {/* <button onClick={this.handleClick}/> */}
            </form>
        )
    }
}

export default Form