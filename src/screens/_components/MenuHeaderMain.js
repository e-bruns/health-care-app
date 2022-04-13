import React, { useState } from "react";
import "./MenuHeaderMain.css";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";

import Logo from "../../assets/img/logo.png";

function MenuHeaderMain() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(menu);

  function handlerLogout() {
    authService.logout();
    dispatch(logout());
    navigate("/");
  }

  const user = useSelector((state) => state.user.user)

  console.log(user)

  return (
    <div>
      <div className={`MenuHeader__Panel ${menu ? "" : "t"}`}>
        <div className="MenuHeader__Logo">HealthCare</div>

        <div className="MenuHeader__Submenu">
          <div onClick={() => navigate("/home")}>Home</div>
          <div onClick={() => navigate("/appointment")}>Consultas</div>
          <div onClick={() => navigate("/exam")}>Exames</div>
          <div onClick={() => navigate("/treatment")}>Tratamentos</div>
          <div onClick={() => navigate("/share")}>Compartilhamentos</div>
          <div onClick={() => handlerLogout()}>Logout</div>
        </div>

        <div
          className="closeMenuHeader"
          onClick={() => {
            menu ? setMenu(false) : setMenu(true);
          }}
        >
          <FaWindowClose />
        </div>
      </div>

      <div className="MenuHeaderMain">
        <div
          className="MenuHeaderMain__button"
          onClick={() => {
            menu ? setMenu(false) : setMenu(true);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'end', marginTop: '0px', marginLeft: '-2px', display: 'flex', justifyContent: 'end', alignItems: 'center',gap: '6px' }}>
          <p className="mt-3">Olá, <strong style={{ color: '#0a6eb7'}}>{user.name ?? 'Não informado'}</strong></p>
          <img src={Logo} width={40} />
        </div>
      </div>
    </div>
  );
}

export default MenuHeaderMain;
