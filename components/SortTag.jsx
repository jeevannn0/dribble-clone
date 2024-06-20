import React from 'react';

function SortTag({ sortType, setSortType }) {
  return (
    <div className="mb-4 flex items-center justify-center bg-white rounded-md p-2 shadow-lg">
      <select
        className="p-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="all" className="border border-gray-300">All</option>
        <option value="new" className="border border-gray-300">New</option>
        <option value="popular" className="border border-gray-300">Popular</option>
        <option value="noteworthy" className="border border-gray-300">NoteWorthy</option>
      </select>
    </div>
  );
}

export default SortTag;
