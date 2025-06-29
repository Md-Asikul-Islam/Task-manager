import React, { useState } from "react";

function AddTaskModal() {
  const [task, setTask] = useState({
    title : "",
    description : "",
    tags : [], 
    priority : "",
    isFavorite : false,
  })

  const handleChange = (e) => {
      const name = e.target.name;
      let value = e.target.value;

      setTask({
          ...task,
        [name] : value
      })
  }

  return (
    <>
  {/* Overlay */}
  <div className="fixed inset-0  bg-opacity-70 z-40"></div>

  {/* Modal Form */}
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <form className="w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-6 sm:p-9 lg:p-11">
      <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      <div className="space-y-9 text-white lg:space-y-10">
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            id="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            name="description"
            id="description"
            value={task.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
              value={task.tags}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priority">Priority</label>
            <select
              className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              value={task.priority}
              onChange={handleChange}
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-16 flex justify-center">
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          Create new Task
        </button>
      </div>
    </form>
  </div>
</>

  );
}

export default AddTaskModal;
