import React from "react";
import aboutStyle from "../../styles/about.module.scss";

const blockOpacity = (sectionProgress, blockNo) => {
  let progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

export default function AboutParagraph({ content, progress }) {
  return (
    <>
      {content.map((paragraph, index) => (
        <React.Fragment key={paragraph.id}>
          <p
            className={`${aboutStyle.about_us_text} text-3xl font-bold`}
            style={{ opacity: blockOpacity(progress, index) }}
          >
            {paragraph.body}
            <br /> <br />
          </p>
        </React.Fragment>
      ))}
    </>
  );
}
