import React, { useEffect, useState } from 'react';
import '../pagesStyle/taskStyle.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import TaskForm from '../Form/TaskForm';
import { Modal } from 'antd';
import Layout from '../Layout/Layout';

// TASK COMPONENT
const Task = () => {

  const [allTasks, setAllTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  // CREATING THE TASK
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const {data} = await axios.post('/api/v1/task/create-task', {title, description});
      if(data?.success)
      {
        toast.success(`${title} is created`);
        getAllTasks();
        setTitle("");
        setDescription("");
      }
      else
      {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in taking input from form");
    }
  }
  
  // GETTING ALL THE TASK FROM THE BACKEND API
  const getAllTasks = async() =>{
    try {
      const {data} = await axios.get('/api/v1/task/all-tasks');
      if(data?.success)
      {
        setAllTasks(data?.tasks);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting Tasks");
    }
  }
  
  // UPDATING THE TASK
  const handleUpdate = async(e) =>{
    e.preventDefault();
    try {
      const {data} = await axios.put(`/api/v1/task/update-task/${selected._id}`, {title:updatedTitle, description:updatedDescription});
      if(data?.success)
      {
        toast.success(data.message);
        setSelected(null);
        setUpdatedTitle("");
        setIsVisible(false);
        getAllTasks();
      } else
      {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while updating the Task");
    }
  } 
  
  // DELETING THE TASK
  const handleDelete = async(id) =>{
    try {
      const {data} = await axios.delete(`/api/v1/task/delete-task/${id}`);
      if(data?.success)
      {
        toast.success(data?.message);
        getAllTasks();
      } else
      {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while deleting the task");
    }
  }

  // RENDERING ALL THE TASK 
  useEffect(()=>{
    getAllTasks();
  },[]);

  return (
    <Layout title={'Task Management'}>
      <div className="main-create-task">
        <div className="task-details">
          <h2>All Tasks</h2>
          <div>
            {/* RENDERING THE TASKFORM COMPONENT BY PASSING INTO THE PROPS */}
            <TaskForm handleSubmit={handleSubmit} aboutTask={description} setAboutTask={setDescription} value={title} setValue={setTitle}/>
          </div>
          <div className='task-table'>
            <table>
              <thead>
                <tr>
                <div className='task-titles'>
                  <th>Title</th>
                  <th className='description'>Description</th>
                </div>
                  
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allTasks?.map((c) =>(
                  <React.Fragment key={c._id}>
                    <tr>
                    <div  className='task-single-row'>
                      <td>{c.title}</td>
                      <div className='task-description'><td>{c.description}</td></div>  
                    </div>
                      <td className='task-edit'><button onClick={(e)=>{setIsVisible(true); setUpdatedTitle(c.title); setUpdatedDescription(c.description); setSelected(c)}}>Edit</button></td>
                      <td className='task-delete'><button onClick={(e)=>{handleDelete(c._id)}}>Delete</button></td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modal onCancel={()=>setIsVisible(false)} footer={null} open={isVisible}>
          <TaskForm value={updatedTitle}  aboutTask={updatedDescription} setAboutTask={setUpdatedDescription} setValue={setUpdatedTitle} handleSubmit={handleUpdate}/>
        </Modal>
      </div>
    </Layout>
  )
}

export default Task;

