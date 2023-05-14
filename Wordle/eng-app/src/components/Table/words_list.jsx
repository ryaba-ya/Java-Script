import React from 'react';
import words from '../../Words.json'
const Table = (props) => {
    const data = JSON.parse(words);
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
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            {/* Add more cells if needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;