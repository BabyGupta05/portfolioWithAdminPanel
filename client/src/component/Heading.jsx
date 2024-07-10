import React from "react";

export const Heading = ({ props }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h3 className="text-2xl font-bold text-primary-text">{props.title}</h3>
      <p className="text-sm text-secondary-text italic">{props.subTitle}</p>
    </div>
  );
};
