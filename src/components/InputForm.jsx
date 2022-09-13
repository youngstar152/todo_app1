import React, { useState } from 'react'

export const InputForm = ({taskList,setTaskList}) => {

  const [inputText,setInputText]=useState("");
  const handleSubmit=(e) => {
    e.preventDefault();
    //タスクの追加
    setTaskList([
        ...taskList,
        {
            id: taskList.length,
            text: inputText
        }
    ]);
    //console.log(taskList);
    setInputText("")
  }
    
  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className="inputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputText}/>
            <button>
            <i className="fa-regular fa-square-plus"></i>
            </button>
        </form>
    </div>
  )
}
