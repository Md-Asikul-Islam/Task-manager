import React from "react";
import SearchBar from "./SearchBar";
import TaskAction from "./TaskAction";

function TaskBoard() {
  return (
    <div className="w-full max-w-[80rem] mx-auto p-4 md:p-6 bg-[#1D212B] rounded-md border border-[#2A2F3A]">
      <SearchBar />
      <TaskAction/>
    </div>
  );
}

export default TaskBoard;
