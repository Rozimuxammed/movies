import React from "react";
import "./MoviesItem.css";
import { FaCookie } from "react-icons/fa";
import { BsFillTrash2Fill } from "react-icons/bs";
// import { IoStarSharp } from "react-icons/io5";

const MoviesItem = ({ movies }) => {
  return movies.map((item) => {
    return (
      <li
        key={item.id}
        className="list-group-item  d-flex  justify-content-between align-items-center border-bottom"
      >
        <span className="list-group-item-label">{item.name}</span>
        <div className="inputBtn pb-3">
          <input
            type="number"
            className="list-group-item-input"
            defaultValue={item.view}
          />
          <div className="btnGroup">
            <button onClick={()=>{console.log("click");}} className="btn">
              <FaCookie />
            </button>
            <button className="btn">
              <BsFillTrash2Fill />
            </button>
            {/* <IoStarSharp className="icon m-lg-1" /> */}
          </div>
        </div>
      </li>
    );
  });
};

export default MoviesItem;
