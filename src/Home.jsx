import React, { useEffect, useState } from "react";
import NewTask from "./new_task";
import axios from 'axios'
import logo from './profile.jpg';
import ListIcon from "./icons/ListIcon";
import DotIcon from "./icons/DotIcon";
import ChevronIcon from "./icons/ChevronIcon";
import CheckCircleIcon from "./icons/CheckCircleIcon";

function Home() {
    const [tasks, setTasks] = useState([])
    const [expandedTaskId, setExpandedTaskId] = useState(null);
    const [hideDiv, setHideDiv]=useState(true);
    useEffect(() => {
        axios.get('https://charming-teal-snaps.cyclic.app/get')
            .then(result => {
                console.log(result.data);
                setTasks((result.data))
            })
            .catch(err => console.log(err))
    }, [])


    const handleDelete = (id) => {
        console.log(id);
        axios.delete('https://charming-teal-snaps.cyclic.app/delete/' + id)
          .then(result => {
            console.log(result);
            setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
          })
          .catch(error => console.log(error));
      };
    
      const handleEdit = (id) => {
        console.log(id);
        axios.put('https://charming-teal-snaps.cyclic.app/update/' + id)
          .then(result => {
            console.log(result);
            setTasks(prevTasks => prevTasks.map(task => {
              if (task._id === id) {
                return { ...task, completed: !task.completed }; 
              }
              return task;
            }));
          })
          .catch(error => console.log(error));
      };

    const handleExpand = (id) => {

        setExpandedTaskId((prevId) => (prevId === id ? null : id));
        
    }

    const toggleDivExpand = () => {
        setHideDiv(current => !current);
      };

    //   const handleAddTask = (newTask) => {
    //     setTasks(prevTasks => [...prevTasks, newTask]);
    // };

    return (
        <div className="w-100">
            {/* <h2>TASKS</h2> */}
            <div>
                <img className="profile-logo mb-4" src={logo} />
            </div>
            <NewTask />
            <div className="todo-list d-flex mx-auto mt-4 w-25 p-2">
                <ListIcon></ListIcon>
                <p className="text-white m-0 ml-3">Your todos</p>
                <div className="ml-auto cursor-pointer" onClick={toggleDivExpand} >
                    <ChevronIcon></ChevronIcon>
                </div>
            </div>
            {
                hideDiv &&
                tasks.length === 0
                    ?
                    <div className="task-list w-25 mt-2 mx-auto pb-2 py-5 " ><p>No Task Today</p></div>
                    :
                    hideDiv &&
                    <div className="task-list w-25 mt-2 mx-auto pb-2 ">
                        {
                            tasks && tasks.length && tasks.map(task => (
                                <div className="" key={task._id}>
                                    <div className="d-flex w-100 p-2 justify-content-center align-items-center">
                                        <div className="cursor-pointer" onClick={() => handleEdit(task._id)}>
                                            {/* <input  
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => handleEdit(task._id)}
                                            /> */}
                                            <CheckCircleIcon color={task.completed ? "black" : "white"}></CheckCircleIcon>
                                        </div>
                                        <p className="m-0 pb-2 ml-2">{task.task}</p>
                                        <div className="ml-auto cursor-pointer" onClick={() => handleExpand(task._id)}>
                                            <DotIcon></DotIcon>
                                        </div>
                                    </div>

                                    {expandedTaskId === task._id &&
                                        <div className="expand-div py-2 px-2">
                                            <div className="d-flex flex-column text-left" >
                                                <p>Created At: {task.createdAt}</p>
                                                {task.completed === false ?
                                                    <p>Completed: Not Completed</p>
                                                    :
                                                    <p>Completed: Completed</p>}
                                            </div>
                                            <div className="pb-1" >
                                                <button className="cursor-pointer w-100 px-2 py-1 text-danger delete-btn" type="button" onClick={() => handleDelete(task._id)}>Delete</button>
                                                {/* <button type="button" onClick={() => handleExpand(task._id)}>Expand</button> */}
                                            </div>
                                        </div>
                                    }
                                </div>

                            ))
                        }
                    </div>

            }
        </div>
    )
}

export default Home