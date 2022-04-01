import React, { useState } from 'react';
import "./MenuHeaderMain.css";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function MenuHeaderMain() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  console.log(menu);
  return (
    <div>
      <div className={`MenuHeader__Panel ${menu ? '' : 't'}`}>
        <div className="MenuHeader__Logo">HealthCare
        </div>

        <div className="MenuHeader__Submenu">
          <div onClick={() => navigate("/home")}>Home</div>
          <div onClick={() => navigate("/appointment")}>Consultas</div>
          <div onClick={() => navigate("/exam")}>Exames</div>
          <div>Tratamentos</div>
          <div>Compartilhamentos</div>
          <div>Logout</div>
        </div>

        <div className="closeMenuHeader" onClick={() => {
          (menu) ? setMenu(false) : setMenu(true);
        }}><FaWindowClose /></div>
      </div>

      <div className="MenuHeaderMain">
        <div className="MenuHeaderMain__button" onClick={
          () => {
            (menu) ? setMenu(false) : setMenu(true);
          }
        }>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MenuHeaderMain;