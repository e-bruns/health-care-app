import { useState } from "react";
import "./style.css";

const CardTitle = ({ title }) => {
  const [value, setValue] = useState()
  return (
    <div className="CardTitle">
      <div className="title">{title}</div>
      <div className="divisor"></div>
    </div>
  );
};

export default CardTitle;
