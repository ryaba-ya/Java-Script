import React from 'react';

const Table = (props) => {
    const words = require('../../Words.json');
  
    const {words,isEdit}=props;
    const tableRows = words.map((row)=>(
        <tr key={row.id}>
      <td>{row.english}</td>
      <td>{row.transcription}</td>
      <td>{row.russian}</td>
      {isEdit && (
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            )}
    </tr>
    ))
  return (
    <table>
      <thead>
        <tr>
          <th>English</th>
          <th>Transcription</th>
          <th>Russian</th>
          {isEdit && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
      {tableRows}
      </tbody>
    </table>
  );
};

export default Table;