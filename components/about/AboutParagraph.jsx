import React from "react";

export default function AboutParagraph({ content }) {
  return (
    <p className="text-xl text-neutral-500 px-10 sm:px-5 mt-6 mb-8">
      {content.map((paragraph) => (
        <React.Fragment key={paragraph.id}>
          {paragraph.body}
          <br /> <br />
        </React.Fragment>
      ))}
    </p>
  );
}
