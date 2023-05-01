import React from "react";
import spinner from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto"
        alt="loading"
        width={180}
        src={spinner}
      />
    </div>
  );
};

export default Spinner;
