import React from "react";
import { FaStar } from "react-icons/fa";

function TaskRow() {
  return (
    <tr className="bg-[#1F232B]">
      {/* Star */}
      <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">
        <FaStar className="text-yellow-400 text-base sm:text-lg" />
      </td>

      {/* Description */}
      <td className="px-2 py-3 sm:px-4 sm:py-4 align-top max-w-[200px] sm:max-w-xs">
        <p className="text-xs sm:text-sm leading-snug">
          Connect an existing API to a third-party database using secure methods
          and handle data exchange efficiently.
        </p>
      </td>

      {/* Tags */}
      <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="inline-block rounded-full bg-[#00B2D9CC] px-2 py-0.5 text-[10px] sm:text-xs text-[#F4F5F6]">Web</span>
          <span className="inline-block rounded-full bg-[#8407E6A8] px-2 py-0.5 text-[10px] sm:text-xs text-[#F4F5F6]">Python</span>
          <span className="inline-block rounded-full bg-[#07AC67D6] px-2 py-0.5 text-[10px] sm:text-xs text-[#F4F5F6]">API</span>
        </div>
      </td>

      {/* Priority */}
      <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">
        <span className="text-yellow-300 font-medium text-xs sm:text-sm">High</span>
      </td>

      {/* Options */}
      <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
          <button className="text-red-500 hover:underline text-xs sm:text-sm">Delete</button>
          <button className="text-blue-500 hover:underline text-xs sm:text-sm">Edit</button>
        </div>
      </td>
    </tr>
  );
}

export default TaskRow;
