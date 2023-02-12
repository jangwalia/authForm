import React from "react";

export default function Card({ children }) {
  return (
    <div className="m-auto p-10 rounded-2xl mt-12 w-1/2 bg-slate-200  flex flex-col justify-between">
      {children}
    </div>
  );
}
