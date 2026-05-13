import React from "react";

const NewTask = () => {
  return (
    <div className="h-full w-95 shrink-0 p-5 bg-red-400 rounded-xl">
      <div className=" flex items-center justify-between">
        <h3 className=" bg-red-600 px-3 py-1 text-sm rounded">High</h3>
        <h4 className="text-sm">2026-03-15</h4>
      </div>
      <h2 className="text-3xl font-bold mt-7">Make a Youtube Video</h2>
      <p className="text-xm  mt-7">
        Explain the process of creating a successful YouTube video.
      </p>
      <div className=" w-full mt-5">
        <button className=" bg-green-500 rounded text-sm p-3">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
