import React from 'react';
import words from '../../Words.json'
const Table = (props) => {
    const tableData = require('../../Words.json');
    const tableRows = tableData.map((row)=>(
        <tr key={row.id}>
      <td>{row.english}</td>
      <td>{row.transcription}</td>
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