import React from 'react'

export const UserRow = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.last_name}</td>
            <td>
                <img 
                    alt={user.last_name}
                    className="img-thumbnail" 
                    src={user.avatar} 
                    style={{width:50}}
                ></img>
                
            </td>
        </tr>
    )
}
