import React from "react";
import NewUser from "./NewUser";
export default function NewUserList({ users }) {
  return (
    <ul>
      {users.map((eachUser, index) => (
        <li key={index}>
          <NewUser
            key={index}
            userName={eachUser.userName}
            userAge={eachUser.userAge}
          />
        </li>
      ))}
    </ul>
  );
}
