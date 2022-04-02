import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import authService from "../../services/auth";
import { toast } from "react-toastify";

import "../LoginScreen.css";
import { useNavigate } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function Register() {

  const navigate = useNavigate();

  async function handleRegister(values, { setSubmitting }) {
    try {
      await authService.register({...values}); 
      toast.success('Cadastro realizado com sucesso!!');
      navigate('/home')
    } catch (error) {
      if(error.response.data) {
        error.response.data.errors.full_messages.forEach((message) => {
          toast.error(message)
        })
      } else {
        toast.error('Falha ao registrar usuário')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="HealthCareHome">
        <div className="HealthCareTitleHome">
          <div>HealthCare</div>
        </div>
      </div>

      <div className="hrHomeHeader"></div>

      <div className="container p-3">
        <div align="center">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              cell_phone: "",
              kind: "",
              crm: "",
            }}
            validationSchema={yup.object().shape({
              name: yup.string().required("Nome é um campo obrigatório"),
              email: yup.string().required("Email é um campo obrigatório"),
              cell_phone: yup
                .string()
                .matches(phoneRegExp, "O número do telefone não é valido")
                .required("Whatsapp é um campo obrigatório"),
              kind: yup
                .string()
                .required("Tipo de Usuário é um campo obrigatório"),
              crm: yup.string().required("ID Profissional é um campo obrigatório"),
              password: yup.string().required("Senha é um campo obrigatório"),
            })}
            onSubmit={handleRegister}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              touched,
              isSubmitting,
              handleSubmit,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="form-size text-white">
                    <div className="form-group mt-3 text-start">
                      <label htmlFor="nome">NOME COMPLETO</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DIGITE SEU NOME COMPLETO"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name ? (
                        <span className="text-danger">{errors.name}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group mt-3 text-start">
                      <label htmlFor="email">E-MAIL</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="DIGITE SEU E-MAIL"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <span className="text-danger">{errors.email}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group mt-3 text-start">
                      <label htmlFor="whatsapp">WHATSAPP</label>
                      <input
                        className="form-control"
                        placeholder="DIGITE NÚMERO DO WHATSAPP"
                        id="whatsapp"
                        name="cell_phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cell_phone}
                      />
                      {errors.cell_phone && touched.cell_phone ? (
                        <span className="text-danger">{errors.cell_phone}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group mt-3 mb-3 text-start">
                      <label htmlFor="tipo-usuario">TIPO DE USUÁRIO</label>
                      <br />
                      <select
                        name="kind"
                        className="form-control"
                        id="tipo-usuario"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.kind}
                      >
                        <option disabled selected value="">
                          --selecione uma opção--
                        </option>
                        <option value="1">PACIENTE</option>
                        <option value="2">PROFISSIONAL DE SAÚDE</option>
                      </select>

                      {errors.kind && touched.kind ? 
                        <span className="text-danger">{errors.kind}</span>
                        : ''
                      }
                    </div>

                    {values.kind === "2" ? (
                      <>
                        <div className="form-group mb-3 text-start">
                          <label htmlFor="crm">
                            DIGITE SEU ID PROFISSIONAL{" "}
                            <span className="small">(CRM, CRO, ETC)</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="DIGITE SEU ID PROFISSIONAL"
                            id="crm"
                            name="crm"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.crm}
                          />
                          {errors.crm && touched.crm ? (
                        <span className="text-danger">{errors.crm}</span>
                      ) : (
                        ""
                      )}
                        </div>
                      </>
                    ) : null}

                    <div className="form-group mt-3 text-start">
                      <label htmlFor="email">Senha</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DIGITE SUA SENHA"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <span className="text-danger">{errors.password}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-3 btn btn-lg btn-primary form-size"
                    >
                      CADASTRAR
                    </button>
                    <div className="text-center mt-1 small">
                      Ao cadastrar, você concorda com nossos
                      <br />
                      <a href="">TERMOS DE SERVIÇOS</a>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Register;
