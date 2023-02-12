import React from "react";
import Card from "./Card";

export default function ErrorModal({ title, message, onConfirm }) {
  return (
    <div>
      <Card>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <button
            className="bg-indigo-500 mt-5 rounded-2xl w-20"
            onClick={onConfirm}
          >
            Okay
          </button>
        </footer>
      </Card>
    </div>
  );
}
