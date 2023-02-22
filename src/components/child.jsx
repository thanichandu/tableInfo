import React from 'react'

export default function child(props) {
    console.log(props.img);
  return (
      <tr>
          <td>{props.id}</td>
          <td>{props.first_name}</td>
          <td>{props.last_name}</td>
          <td>{props.email}</td>
          <td>{props.gender}</td>
          <td>{props.ip_address}</td>
          <td><img src={props.image} /></td>
        </tr>
  )
}
