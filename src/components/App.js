
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ name: '', age: '' }]);
  const AddField=()=>{
    setFields([...fields,{ name: '', age: '' }])
  }
  const removeField=(index)=>{
    const newField=fields.filter((_,i)=>i!==index);
    setFields(newField)
  }
  const handleName=(index,event)=>{
    const newField=[...fields];
    newField[index].name=event.target.value;
    setFields(newField);
  }
  const handleAge=(index,event)=>{
    const newField=[...fields];
    newField[index].age=event.target.value;
    setFields(newField);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
};
  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="field-container">
            <input type='text' name='name' placeholder="Name" value={field.name} onChange={(e)=>{handleName(index,e)}} required></input>
            <input type='number' name='age' placeholder="Age" value={field.age} onChange={(e)=>{handleAge(index,e)}} required></input>
            <button type="button" onClick={()=>{removeField(index)}}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={()=>{AddField()}}>Add More..</button>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App
