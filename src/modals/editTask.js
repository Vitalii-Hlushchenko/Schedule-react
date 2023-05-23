/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const editTask = ({modal, toggle ,updateTask, taskObj}) => {
    const[taskName, setTaskName] = useState('');
    const[description, setDescription] = useState('');
    const[description1, setDescription1] = useState('');
    const[description2, setDescription2] = useState('');
    const[description3, setDescription3] = useState('');
    const[description4, setDescription4] = useState('');
    const[description5, setDescription5] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name === "description"){
            setDescription(value)
        }else if(name === "description1"){
            setDescription1(value)
        }else if(name === "description2"){
            setDescription2(value)
        }else if(name === "description3"){
            setDescription3(value)
        }else if(name === "description4"){
            setDescription4(value)
        }else if(name === "description5"){
            setDescription5(value)
        }


    }
    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setDescription1(taskObj.Description1)
        setDescription2(taskObj.Description2)
        setDescription3(taskObj.Description3)
        setDescription4(taskObj.Description4)
        setDescription5(taskObj.Description5)

    },[])
    const handleUpdate = (e) => {
        e.preventDefault();
        let taskObj = {}
        taskObj['Name'] = taskName
        taskObj['Description'] = description
        taskObj['Description1'] = description1
        taskObj['Description2'] = description2
        taskObj['Description3'] = description3
        taskObj['Description4'] = description4
        taskObj['Description5'] = description5
        updateTask(taskObj)
        
        
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Редагування елементу</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Оберіть день тижня</label>
                        {/* <input type = "text" className='form-control' value = {taskName} onChange={handleChange} name = "taskName"/> */}
                        <select className='form-control' value = {taskName} onChange={handleChange} name = "taskName">
                                <option value="Понеділок">Понеділок</option>
                                <option value="Вівторок">Вівторок</option>
                                <option value="Середа">Середа</option>
                                <option value="Четвер">Четвер</option>
                                <option value="П'ятниця">П'ятниця</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Введіть назви предметів</label>
                        {/* <textarea rows="5" className='form-control' value = {description} onChange={handleChange} name = "description"></textarea> */}
                        <input type ="text" className='form-control' placeholder='Перша пара' value = {description} onChange={handleChange} name = "description"></input>
                        <input type ="text" className='form-control' placeholder='Друга пара' value = {description1} onChange={handleChange} name = "description1"></input>
                        <input type ="text" className='form-control' placeholder='Третя пара' value = {description2} onChange={handleChange} name = "description2"></input>
                        <input type ="text" className='form-control' placeholder='Четверта пара' value = {description3} onChange={handleChange} name = "description3"></input>
                        <input type ="text" className='form-control' placeholder="П`ята пара" value = {description4} onChange={handleChange} name = "description4"></input>
                        <input type ="text" className='form-control' placeholder='Шоста пара' value = {description5} onChange={handleChange} name = "description5"></input>

                        {/* <input type="time" name="time"></input> */}

                    </div>


                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>
                Редагувати елемент
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Скасувати
            </Button>
            </ModalFooter>
      </Modal>
    );
};

export default editTask;