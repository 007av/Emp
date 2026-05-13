import React from "react";

const FailedTask = () => {
  return (
    <div className="h-full w-95 shrink-0 p-5 bg-amber-400 rounded-xl">
      <div className=" flex items-center justify-between">
        <h4 className="text-sm">2026-03-15</h4>
      </div>
      <h2 className="text-3xl font-bold mt-7">Make a Youtube Video</h2>
      <p className="text-xm  mt-7">
        Explain the process of creating a successful YouTube video.
      </p>
      <div className="w-full mt-5">
        <button className=" bg-red-500 rounded text-sm p-3">
          Task Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
