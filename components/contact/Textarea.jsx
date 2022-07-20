import React from 'react'

export default function Textarea() {
  return (
    <textarea
          required
          rows="4"
          placeholder="Message"
          className="   w-full
                        py-3
                        outline-none
                        focus-visible:shadow-none
                        focus:border-red-500
                        "
        ></textarea>
  )
}
