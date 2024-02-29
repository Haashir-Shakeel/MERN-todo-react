import React, { useState } from "react";
import axios from 'axios'
import addIcon from "./icons/PlusIcon";
import PlusIcon from "./icons/PlusIcon";

function NewTask(){
    const [task, setTask]=useState()
    const [showAlert, setShowAlert]=useState(false);

    const handleAdd = ()=>{
        
            axios.post('https://charming-teal-snaps.cyclic.app/add', {task : task})
        .then(result => {
            window.location.reload()
            // onAddTask(result.data);
            // setTask("")
            console.log(result);
        })
        .catch(error=>console.log(error))
      
        
        
    }
    return (
        <div className="new-task">
            <input className="enter-task w-25 p-2" id="new-task" value={task} type="text" key="" placeholder="Add new task" onChange={(e)=>setTask(e.target.value)}/>
            {/* <button type="button" onClick={handleAdd}>Add</button> */}
            {/* <PlusIcon style="height:5px;"></PlusIcon> */}
            <div className="add-icon d-flex cursor-pointer"  onClick={task && handleAdd}>
            <PlusIcon height="1.4rem" />
            </div>
        </div>

    )
}

export default NewTask