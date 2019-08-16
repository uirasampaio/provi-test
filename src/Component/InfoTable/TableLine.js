import React from 'react';

const TableLine = (props) => {
  return (
    <tr>
      <td>{props.email}</td>
      <td>{props.name}</td>
      <td>{props.cel}</td>
      <td>{props.status}%</td>
      <td>{props.data}</td>
      <td>{props.curso}</td>
      <td>{props.inicio}</td>
    </tr>
  )
}

export default TableLine