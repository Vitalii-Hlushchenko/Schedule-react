/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const editTask = ({modal, toggle ,updateTask, taskObj}) => {
    const[taskName, setTaskName] = useState('');
    const[description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }
    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])
    const handleUpdate = (e) => {
        e.preventDefault();
        let taskObj = {}
        taskObj['Name'] = taskName
        taskObj['Description'] = description
        updateTask(taskObj)
        
        
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Task name</label>
                        <input type = "text" className='form-control' value = {taskName} onChange={handleChange} name = "taskName"/>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value = {description} onChange={handleChange} name = "description"></textarea>
                    </div>


                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>
                Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
      </Modal>
    );
};

export default editTask;