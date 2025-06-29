import React from "react";
import { FaStar } from "react-icons/fa";

function TaskRow({ tasks, onEdit, onDelete, onFav}) {
  return (
    <>
      {tasks.map((task) => (
        <tr key={task.id} className="bg-[#1F232B] border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
          {/* Star */}
          <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">
            <button onClick={() => onFav(task.id)}>
              {task.isFavorite ? (
                <FaStar className="text-yellow-400 text-base sm:text-lg" />
              ) : (
                <FaStar className="text-green-400 text-base sm:text-lg" />
              )}
            </button>
          </td>
          {/* Title */}
          <td className="px-2 py-3 sm:px-4 sm:py-4 align-top max-w-[180px] sm:max-w-xs">
            <p className="text-xs sm:text-sm leading-snug break-words">
              {task.title}
            </p>
          </td>

          {/* Description */}
          <td className="px-2 py-3 sm:px-4 sm:py-4 align-top max-w-[200px] sm:max-w-sm">
            <p className="text-xs sm:text-sm leading-snug break-words">
              {task.description}
            </p>
          </td>

          {/* Tags */}
          <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {task.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-[#2E3742] px-2 py-0.5 text-[10px] sm:text-xs text-[#F4F5F6]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </td>

          {/* Priority */}
          <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">
            <span className="text-yellow-300 font-medium text-xs sm:text-sm">
              {task.priority}
            </span>
          </td>

          {/* Actions */}
          <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
              <button
                className="text-red-500 hover:underline text-xs sm:text-sm"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
              <button
                className="text-blue-500 hover:underline text-xs sm:text-sm"
                onClick={() => onEdit(task)}
              >
                Edit
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default TaskRow;
