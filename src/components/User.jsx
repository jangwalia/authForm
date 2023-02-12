import Card from "./Card";
import { useState } from "react";
export const User = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || +age === 0) {
      return;
    }

    if (+age < 1) {
      return;
    }
    onAddUser(name, age);
    setName("");
    setAge(0);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between p-2">
          <label htmlFor="username">Enter Username</label>
          <input
            onChange={handleName}
            type="text"
            id="username"
            placeholder="Username"
            value={name}
          />
        </div>

        <div className="flex flex-col justify-between p-2">
          <label htmlFor="age">Enter Your Age</label>
          <input
            type="number"
            id="age"
            placeholder="Age"
            onChange={handleAge}
            value={age}
          />
        </div>

        <button type="submit" className="bg-indigo-500 mt-5 rounded-2xl w-20">
          Add User
        </button>
      </form>
    </Card>
  );
};
