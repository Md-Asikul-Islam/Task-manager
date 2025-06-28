import React from "react";
import TaskHeader from "./TaskHeader";
import TaskRow from "./TaskRow";

function TaskTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[600px] w-full table-auto border-separate border-spacing-x-2 sm:border-spacing-x-4 text-left text-white text-xs sm:text-sm">
        <TaskHeader />
        <tbody>
          <TaskRow />
          {/* You can map over rows like: tasks.map(task => <TaskRow key={task.id} task={task} />) */}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
