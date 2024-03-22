import { useState } from 'react';

function BoardAssignment () {
   const boards = [
      {label: "Supper", value: "Supper"},
      {label: "Breakfast Buffet", value: "Breakfast Buffet"},
      {label: "Afternoon Tea", value: "Afternoon Tea"}];

   const [boardName, setName] = useState('no boards yet');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );

export default BoardAssignment;