import React from "react";

export default function SendMessageBtn() {
  function sendMessage() {
    console.log('Done');
  }
  
  return (
    <button
      type="submit"
      className="
                        w-full
                        text-neutral-800
                        bg-white
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        font-bold
                        "
      onClick={() => sendMessage()}
    >
      Envoyer le message
    </button>
  );
}
