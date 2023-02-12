import React from "react";
import Card from "./Card";

export default function NewUser({ userName, userAge }) {
  return (
    <Card>
      <h2>
        {userName} - {userAge} years old
      </h2>
    </Card>
  );
}
