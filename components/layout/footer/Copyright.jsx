import React from "react";

export default function Copyright() {
  let currentYear = new Date().getFullYear();
  return (
    <div className="text-center p-4">
      &copy; {currentYear} Copyright Rosacolor
    </div>
  );
}
