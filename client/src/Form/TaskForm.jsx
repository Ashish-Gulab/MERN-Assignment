import React from 'react';
import '../pagesStyle/taskStyle.css';

// TASK INPUT FORM
const TaskForm = ({handleSubmit, aboutTask, setAboutTask, value, setValue}) => {
  return (
    <>
      <form onSubmit={handleSubmit}> 
        <div className='task-input-form'>
          <input className='task-input-box' type="text" name="title" id="" value={value} placeholder='Enter New Title' onChange={(e)=>{setValue(e.target.value)}} />
          <input className='task-input-box' type="text" name="description" id="" value={aboutTask} placeholder='Enter New Description' onChange={(e)=>{setAboutTask(e.target.value)}} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default TaskForm;
