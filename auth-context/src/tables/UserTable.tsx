import React from "react";

export interface Users{
    id: number;
    name: string;
    username: string;
}

export interface UserTableProps {
    users: Users[]
    deleteUser: (id:number) => void //Får en metoden fra HomePage
}

//function component
export const UserTable: React.FC<UserTableProps> = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button className='button muted-button'>Edit</button>
                        <button className='button muted-button' onClick={() => props.deleteUser(user.id)}>Delete</button>
                        {/* <button onClick={() => {
                    console.log(props.deleteUser(user.id))
                }}>Console</button> */}
                    </td>
                </tr> 
                )) 
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
