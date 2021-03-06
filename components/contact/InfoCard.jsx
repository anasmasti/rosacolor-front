import React from "react";
import PropTypes from "prop-types";

export default function InfoCard({ title, src, content}) {
  return (
    <div className="container flex border shadow-md">
    <div className="card bg-red-500 text-white">
      
      <div className="content">
        <div className="imgbox grayscale hover:grayscale-0">
          <img src={src} className="md:"/>
        </div>
        <h2>{title}</h2>
        <p className="p-2">
          {content.map((info) => (
            <React.Fragment key={info.id}>
            {info.header != null && (
              <span> {info.header} :</span>
              )}{" "}
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
