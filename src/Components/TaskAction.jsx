import React from 'react'

function TaskAction({onAddClick, onDeleteAll}) {
 
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-4 py-4 md:py-6 px-4 text-white">
      <div>
        <h4 className="text-lg md:text-xl font-semibold">Your Task</h4>
      </div>
      <div className="flex flex-wrap justify-start md:justify-end items-center gap-2 md:gap-4 text-sm">
        <button 
        onClick={onAddClick}
        className="bg-[#3B82F6] hover:bg-blue-600 text-white py-1 px-3 rounded-md transition-colors duration-200">
          Add Task
        </button>
        <button className="bg-[#EF4444] hover:bg-red-600 text-white py-1 px-3 rounded-md transition-colors duration-200"
        onClick={() => onDeleteAll()}
        >
          Delete All
        </button>
      </div>
    </div>
  )
}

export default TaskAction;
