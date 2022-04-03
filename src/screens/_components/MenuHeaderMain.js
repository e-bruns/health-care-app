import React, { useState } from 'react';
import "./MenuHeaderMain.css";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';

function MenuHeaderMain() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  console.log(menu);

  function handlerLogout() {
    authService.logout();
    dispatch(logout())
    navigate('/')
  }

  return (
    <div>
      <div className={`MenuHeader__Panel ${menu ? '' : 't'}`}>
        <div className="MenuHeader__Logo">HealthCare
        </div>

        <div className="MenuHeader__Submenu">
          <div onClick={() => navigate("/home")}>Home</div>
          <div onClick={() => navigate("/appointment")}>Consultas</div>
          <div onClick={() => navigate("/exam")}>Exames</div>
          <div onClick={() => navigate('/treatment')}>Tratamentos</div>
          <div>Compartilhamentos</div>
          <div onClick={() => handlerLogout()}>Logout</div>
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