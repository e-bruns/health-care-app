import React, {useState} from 'react'
import "./MenuHeaderMain.css"

function MenuHeaderMain() {
  const [menu,setMenu] = useState(false);
  

  console.log(menu);
  return (
    <div>
      <div className={`MenuHeader__Panel ${menu ? '':'t'}`}>
        <div className="MenuHeader__Logo">HealthCare</div>


        <div className="MenuHeader__Submenu">
          <div>Consultas</div>
          <div>Exames</div>
          <div>Tratamentos</div>
          <div>Compartilhamentos</div>
          <div>Logout</div>
        </div>

        <div onClick={() => {
              (menu) ? setMenu(false) : setMenu(true);
            }}>Fechar [temporariamente]</div>
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
  )
}

export default MenuHeaderMain