import React from "react";

export default function InfoCard({ title, content }) {
  return (
    <div className="p-5 space-y-1 border-2 border-red-400 rounded-md">
      <h3 className="text-xl font-semibold text-neutral-700 capitalize ">
        {title}
      </h3>

      <p className="text-neutral-500">
        {content.map((info) => (
          <React.Fragment key={info.id}>
            { info.header != null && <span className="text-red-500"> {info.header} :</span> } {info.body}{" "}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
