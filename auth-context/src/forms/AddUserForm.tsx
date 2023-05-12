import React, { useState } from "react"
import { Users } from "../tables/UserTable"

export interface AddUserProps {
    users: Users[]
    addUser: (user: Users) => void
}

export const AddUserForm: React.FC<AddUserProps> = (props) => {
    const initialFormState = {id: 0, name: '', username: ''}
    const [user, setUser] = useState<Users>(initialFormState)

    const handleInputChange = (event: { target: { name: string; value: string } }) => {
        const {name, value} = event.target

        setUser({ ...user, [name]: value})
    }

    return(
        <form className="newForm"
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.username) {
                    // return console.log(Math.max(...props.users))
                    alert('Please insert data')
                    return console.log(initialFormState)
                } else {

                    props.addUser(user)
                    setUser(initialFormState)
                }
            }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )
}