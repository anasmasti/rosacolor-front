import React from "react";
import InputItem from "./InputItem";

export default function Input() {
  let input = [
    {
      id: 1,
      placeholder: "First Name",
      type:"text"
    },
    {
      id: 2,
      placeholder: "Last Name",
      type:"text"
    },
    {
      id: 3,
      placeholder: "Email",
      type:"email"

    },
    {
      id: 4,
      placeholder: "Phone Number",
      type:"text"

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
