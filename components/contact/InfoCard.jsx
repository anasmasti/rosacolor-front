import React from "react";
import PropTypes from "prop-types";

export default function InfoCard({ title, src, content }) {
  return (
    <div className="card bg-neutral-100 shadow-sm">
      <div>
        <div className=" grayscale hover:grayscale-0">
          <img src={src} className="" />
        </div>
        <div className="flex flex-col justify-start p-2">
          <h4 className="font-bold text-gray-600 mb-2">{title}</h4>
          <p className="text-gray-500">
            {content.map((info) => (
              <React.Fragment key={info.id}>
                {info.header != null && <span> {info.header} :</span>}{" "}
                {info.body} <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
