import React from 'react';
import './LoginScreen.css'

function LoginScreen() {
  return (
    <>
      <div className='HealthCareHome'>

        <div className='HealthCareTitleHome'><div>HealthCare</div></div>
      </div>

      <div className='hrHomeHeader'> </div>

      <div className='container p-3'>
        <p className='text-center text-white display-6 p-4'>Armazene seu histórico de consultas, exames e tratamentos e compartilhe de forma segura com profissionais da saúde!</p>

        <div align="center">
          <form action=" ">
            <div className='form-size'>
              <div className="mb-3 mt-3">
                <input type="email" className="form-control" id="email" placeholder="DIGITE SEU E-MAIL" name="email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="pwd" placeholder="DIGITE SUA SENHA" name="pwd" />
              </div>
            </div>
            <button type="submit" className="mt-3 btn btn-lg btn-primary form-size">ENTRAR</button>
          </form>
          <div className='mt-3'>
            <a href='/register' className="btn btn-sm btn-outline-primary text-white form-size">NÃO TENHO CADASTRO</a>
          </div>
          <div className='mt-3'>
            <a href='/resetpswd' className="text-white form-size">Esqueci minha senha</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginScreen;
