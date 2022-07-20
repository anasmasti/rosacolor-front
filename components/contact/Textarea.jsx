import React from 'react'

export default function Textarea() {
  return (
    <textarea
          required
          rows="4"
          placeholder="Message"
          className="   w-full
                        py-3
                        px-[14px]
                        text-body-color text-base
                        outline-none
                        focus-visible:shadow-none
                        focus:border-white
                        "
        ></textarea>
  )
}
