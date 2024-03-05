import React from "react";
import "./AppFilter.css";

const AppFilter = () => {
  return (
    <div className="btnGroup d-flex gap-2">
      <button className="btn btn-outline-dark" type="button">
        Barcha kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Mashhur kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Eng ko'p ko'rilgan kinolar
      </button>
    </div>
  );
};

export default AppFilter;
