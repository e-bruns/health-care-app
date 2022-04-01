import React, { useRef, useEffect } from 'react';
import './LoginScreen.css';
import axios from "../axios";
import { login, logout } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  async function fetchData() {

    const request = await axios.post('/auth/sign_in', {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }).then(function (response) {
      navigate("/home");
      console.log(response.headers);
    }).catch(function (error) {
      console.log(error);
    });

    return request;
  }

  return (
    <>
      <div className='HealthCareHome'>
        <div className='HealthCareTitleHome'><div>HealthCare</div></div>
      </div>

      <div className='hrHomeHeader'></div>

      <div className='container p-3'>
        <p className='text-center text-white p-4 textLogin'>Armazene seu histórico de consultas, exames e tratamentos e compartilhe de forma segura com profissionais da saúde!</p>

        <div align="center">
          <form>
            <div className='form-size'>
              <div className="mb-3 mt-3">
                <input type="email" className="form-control" ref={emailRef} id="email" placeholder="DIGITE SEU E-MAIL" name="email" />
              </div>
              <div className="mb-3">
                <input type="password" ref={passwordRef} className="form-control" id="pwd" placeholder="DIGITE SUA SENHA" name="pwd" />
              </div>
            </div>
            <button type="submit" onClick={(e) => {
              e.preventDefault();
              fetchData();
            }} className="mt-3 btn btn-lg btn-primary form-size">ENTRAR</button>
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
  );
}

export default LoginScreen;
