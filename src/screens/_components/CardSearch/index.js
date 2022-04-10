import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const CardSearch = ({ onSearch, title, placeholder='PESQUISAR' }) => {
  const [value, setValue] = useState()
  return (
    <div className="CardTitle">
      <div className="title">{title}</div>
      <div className="divisor"></div>
      <div className="body p-2">
        <input placeholder={placeholder} className="form-control" onChange={(e) => setValue(e.target.value)} />
        <button className="btn btn-primary d-flex gap-2" onClick={() => onSearch && onSearch(value)}>
          <FontAwesomeIcon size={'lg'} icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default CardSearch;
