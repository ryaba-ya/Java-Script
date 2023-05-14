import React from 'react';
import words from '../../Words.json';
const Table = (props) => {
   
    const tableRows = words.map((row)=>(
        <tr key={row.id}>
      <td>{row.english}</td>
      <td>{row.transcription}</td>
      <td>{row.russian}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
     
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