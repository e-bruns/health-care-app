import React, {useState} from 'react'
import "./MenuHeaderMain.css"

function MenuHeaderMain() {
  const [menu,setMenu] = useState(false);
  

  console.log(menu);
  return (
    <div>
      <div className={`MenuHeader__Panel ${menu ? '':'t'}`}>
        <h1 onClick={()=>{
          setMenu(false)
        }}>Fechar</h1>
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