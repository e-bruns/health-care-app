import React from 'react'
import '../LoginScreen.css'


function ResetPswd() {
  
  return (
    <>
      <div className='HealthCareHome'>
        <div className='HealthCareTitleHome'><div>HealthCare</div></div>
      </div>

      <div className='hrHomeHeader'></div>

      <div className='container p-3'>
        <div align="center">
          <h2 className='text-white'>Esqueceu sua senha?<br />
          Tudo bem, isso acontece!
          </h2>
          <form action=" ">
            <div className='form-size text-white'>
              <div className="form-group mt-3 text-start">
                <label htmlfor="email">INFORME SEU E-MAIL</label>
                <input type="email" className="form-control" placeholder="DIGITE SEU E-MAIL" id="pwd" />
              </div>
              <button type="submit" className="mt-3 btn btn-lg btn-primary form-size">REDEFINIR SENHA</button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPswd