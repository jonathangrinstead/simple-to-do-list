import React from 'react'
import './ToDoList.css'

const ToDoList = () => {
  const addToDo = async() => {
    const todo = document.getElementsByClassName("todoListInput")
    const list = document.getElementsByClassName("list")
    list.innerHTML += `<li>${todo[0].value}</li>`;
  };
  return (
    <div>
      <div className="headerTop">
        <h1>Johns Todo-List</h1>
      </div>
      <div className='listInput'>
        <div>
          <input className='todoListInput' type="text" placeholder='Add Todo'/>
        </div>
        <div className='addition' onClick={()=>{addToDo()}}>
          <button>+</button>
        </div>
      </div>
      <div>
        <ul className='list'>
          <li></li>
        </ul>
      </div>
    </div>
  )
};

export default ToDoList
