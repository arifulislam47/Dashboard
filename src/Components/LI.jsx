import React from "react";
import { Link } from "react-router-dom";

const LI = ({ litext, to, className }) => {
  return (
    <ul>
      <li>
        <Link className={className} to={to}>
          {litext}
        </Link>
      </li>
    </ul>
  );
};

export default LI;
