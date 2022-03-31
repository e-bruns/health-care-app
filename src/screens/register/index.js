import React from 'react';
import { useState } from "react";
import '../LoginScreen.css';
import MenuHeaderMain from "../_components/MenuHeaderMain";


function Register() {
  const [fields, setFields] = useState({});

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFields({ ...fields, [name]: value });
    console.log(fields['tipo-usuario']);
  }


  return (
    <>
      <div className='HealthCareHome'>
        <div className='HealthCareTitleHome'><div>HealthCare</div></div>
      </div>

      <div className='hrHomeHeader'></div>

      <div className='container p-3'>
        <div align="center">
          <form action=" ">
            <div className='form-size text-white'>
              <div className="form-group mt-3 text-start">
                <label htmlFor="nome">NOME COMPLETO</label>
                <input type="text" className="form-control" placeholder="DIGITE SEU NOME COMPLETO" id="nome" />
              </div>
              <div className="form-group mt-3 text-start">
                <label htmlFor="email">E-MAIL</label>
                <input type="email" className="form-control" placeholder="DIGITE SEU E-MAIL" id="pwd" />
              </div>
              <div className="form-group mt-3 text-start">
                <label htmlFor="whatsapp">WHATSAPP</label>
                <input type="number" className="form-control" placeholder="DIGITE NÚMERO DO WHATSAPP" id="whatsapp" />
              </div>
              <div className="form-group mt-3 mb-3 text-start">
                <label htmlFor="tipo-usuario">TIPO DE USUÁRIO</label><br />
                <select name="tipo-usuario" className="form-control" id="tipo-usuario" onChange={handleChange} value={fields["tipo-usuario"]}>
                  <option disabled selected value="">--selecione uma opção--</option>
                  <option value="paciente">PACIENTE</option>
                  <option value="profissional">PROFISSIONAL DE SAÚDE</option>
                </select>
              </div>

              {fields['tipo-usuario'] === 'profissional' ?
                <>
                  <div className="form-group mb-3 text-start">
                    <label htmlFor="id-profissional">DIGITE SEU ID PROFISSIONAL <span className='small'>(CRM, CRO, ETC)</span></label>
                    <input type="text" className="form-control" placeholder="DIGITE SEU ID PROFISSIONAL" id="whatsapp" />
                  </div>
                </>
                : null
              }

              <button type="submit" className="mt-3 btn btn-lg btn-primary form-size">CADASTRAR</button>
              <div className='text-center mt-1 small'>
                Ao cadastrar, você concorda com nossos<br />
                <a href=''>TERMOS DE SERVIÇOS</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;