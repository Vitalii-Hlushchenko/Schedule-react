/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/createTask';
import Card from './card';
const schedule = () => {
    const [modal, setModal] = useState(false);

    const [taskList, setTaskList] = useState([])

useEffect(() =>{
    let arr = localStorage.getItem("taskList")
    if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
    }
},[])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
}

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    return (
       <> <div className='header text-center'>
            <h3>todo</h3>
            <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create</button>
        </div>
        <div className='schedule-container'>
            {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray={updateListArray}/>)}
        </div>

        <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>


    );
};

export default schedule;