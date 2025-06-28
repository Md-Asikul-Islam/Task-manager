import React from "react";
import SearchBar from "./SearchBar";
import TaskAction from "./TaskAction";
import TaskList from './TaskList';

function TaskBoard() {
  return (
    <div className="w-full max-w-[80rem] mx-auto p-4 sm:p-5 md:p-6 bg-[#1D212B] rounded-md border border-[#2A2F3A]">
      <div className="space-y-4">
        <SearchBar />
        <TaskAction />
        <TaskList />
      </div>
    </div>
  );
}

export default TaskBoard;
