import React from 'react'

export default function Textarea() {
  return (
    <textarea
          rows="6"
          placeholder="Message"
          className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        bg-red-400
                        border border-red-400
                        outline-none
                        placeholder-white
                        focus-visible:shadow-none
                        focus:border-white
                        "
        ></textarea>
  )
}
