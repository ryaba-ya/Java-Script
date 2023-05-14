import React from 'react';

const Table = (props) => {
    const words = require('../../Words.json');

    const tableRows = words.map((row)=>(
        <tr key={row.id}>
      <td>{row.english}</td>
      <td>{row.transcription}</td>
      <td>{row.russian}</td>
      <td><button>Edit</button></td>
     
    </tr>
    ))
  return (
    <table>
      <thead>
        <tr>
          <th>English</th>
          <th>Transcription</th>
          <th>Russian</th>
         
        </tr>
      </thead>
      <tbody>
      {tableRows}
      </tbody>
    </table>
  );
};

export default Table;