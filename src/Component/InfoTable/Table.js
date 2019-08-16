import React, { Component } from 'react';
import TableLine from './TableLine.js'

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        email: "fulano@ciclano",
        name: "Boris Something",
        cel: "2345678",
        status: "35",
        data: "24/02/2019",
        curso: "UX",
        inicio: "3 junho"
      }]
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th> Email</th>
            <th> Name</th>
            <th> cel</th>
            <th> status</th>
            <th> data</th>
            <th> curso</th>
            <th> inicio</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data.map((item, idx) => {
              return <TableLine key={idx} {...item} />
            })
          }
        </tbody>
      </table>
    );
  }
}

export default Table