import React from 'react'

export const RowItemChat = ({chat}) => {
  return (
        <tr>      
            <td>{chat.name}</td>
            <td>{chat.date}</td>
        </tr>
  )
}
