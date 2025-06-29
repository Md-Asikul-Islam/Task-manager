import React from "react";

import TaskTable from "./TaskTable";

function TaskList({tasks}) {
  return (
    <div>
      <TaskTable tasks={tasks} />
    </div>
  );
}

export default TaskList;
