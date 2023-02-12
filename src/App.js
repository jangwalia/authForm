import React, { useState } from "react";
import NewUserList from "./components/NewUserList";
import { User } from "./components/User";

function App() {
  const [userList, setUserList] = useState([]);

  const handleNewUser = (name, age) => {
    setUserList((prevState) => [
      ...prevState,
      { userName: name, userAge: age },
    ]);
  };

  return (
    <div>
      <User onAddUser={handleNewUser} />
      <NewUserList users={userList} />
    </div>
  );
}

export default App;
