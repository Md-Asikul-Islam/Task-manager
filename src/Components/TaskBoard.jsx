import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { defaultTask } from "../data";
import AddTaskModal from "./AddTaskModal";

function TaskBoard() {
  const [tasks, setTasks] = useState(defaultTask);
  const [showModal, setShowModal] = useState(false);
  const [taskUpdate,setTaskUpdate] = useState(null);
  const handleAddTask = (newTask, isAdd) => {
  if (isAdd) {
    setTasks([...tasks, newTask]);
  } else {
    setTasks(
      tasks.map((task) => (task.id === newTask.id ? newTask : task))
    );
  }

  setShowModal(false);
};

  const handleEditTask = (task) => {
       setTaskUpdate(task)
       setShowModal(true);
       
  }


  const handleDeleteTask=(taskId) => {
   const tasksAfterDelete = tasks.filter(task => task.id !== taskId);
   setTasks(tasksAfterDelete);
  }

  const handleDeleteAllTask =() => {
   tasks.length = 0;
   setTasks([...tasks])
  }

  const handleFavorite = (taskId)=>{
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite ;
    setTasks(newTasks)
  }

  const handleSeacrch = (searchTerm) => {
  const filtered = tasks.filter((task) => task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  setTasks([...filtered])
  }

  return (
    <div className="w-full max-w-[80rem] mx-auto p-4 sm:p-5 md:p-6 bg-[#1D212B] rounded-md border border-[#2A2F3A]">
      {showModal && <AddTaskModal onSave={handleAddTask} taskUpdate={taskUpdate} />}
      <div className="space-y-4">
        <SearchBar onSearch={handleSeacrch} />
        <TaskAction onAddClick={() => setShowModal(true)} onDeleteAll={handleDeleteAllTask} />
        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onFav={handleFavorite} />
      </div>
    </div>
  );
}

export default TaskBoard;
