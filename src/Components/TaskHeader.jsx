import React from "react";

function TaskHeader() {
  return (
    <thead className="">
      <tr>
        <th className="px-2 py-2 text-[10px] sm:px-4 sm:text-sm whitespace-nowrap">Title</th>
        <th className="px-2 py-2 text-[10px] sm:px-4 sm:text-sm whitespace-nowrap">Description</th>
        <th className="px-2 py-2 text-[10px] sm:px-4 sm:text-sm whitespace-nowrap">Tags</th>
        <th className="px-2 py-2 text-[10px] sm:px-4 sm:text-sm whitespace-nowrap">Priority</th>
        <th className="px-2 py-2 text-[10px] sm:px-4 sm:text-sm whitespace-nowrap">Options</th>
      </tr>
    </thead>
  );
}

export default TaskHeader;
