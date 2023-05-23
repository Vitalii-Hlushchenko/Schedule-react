/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/createTask';
import Card from './card';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

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

    async function generatePDF() {
        const pdf = new jsPDF();
        const pdfContent = document.getElementById('sc-container');
      
        const input = pdfContent;
        const canvas = await html2canvas(input, {scrollY: -window.scrollY});
        const imgData = canvas.toDataURL('image/png');
      
        pdf.addImage(imgData, 'PNG', 15, 15);
        pdf.save('myPDF.pdf');
      }

    return (
       <> <div className='header text-center'>
            <h3>Створення розкладу занять</h3>
            <div class = "header-btn">
            <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Додати елемент розкладу</button>
            <button className='btn btn-primary mt-2' onClick={generatePDF}>Зберегти як PDF</button>
            </div>
        </div>
        <div id='sc-container' className='schedule-container'>
            {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray={updateListArray}/>)}
        
        </div>
        

        <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>


    );
};

export default schedule;



