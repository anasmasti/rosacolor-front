import React from "react";
import InputItem from "./InputItem";

export default function Input() {
  let input = [
    {
      id: 1,
      placeholder: "First Name",
    },
    {
      id: 2,
      placeholder: "Last Name",
    },
    {
      id: 3,
      placeholder: "Email",
    },
    {
      id: 4,
      placeholder: "Phone Number",
    },
  ];

  return (
    <div>
      {input.map((item) => (
        <InputItem key={item.id} {...item} />
      ))}
    </div>
  );
}
