import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import "../LoginScreen.css";
import authService from "../../services/auth";
import { useLocation, useNavigate } from "react-router-dom";

function ResetScreen() {

  const navegate = useNavigate();
  const { state } = useLocation();
  const { email } = state;

  const handleForgetPassword = async ({ email, token, password }, { setSubmitting }) => {
    try {
      const { status } = await authService.reset(email, token, password);
      toast.success(status);
      navegate('/')
    } catch (error) {
      if (error.response.data.error) {
        const msgError = error.response.data.error;
        toast.error(msgError[0]);
      } else {
        toast.error("Puts!!, Algo deu errado! Tente novamente!");
      }
    } finally {
      setSubmitting(false);
    }
  };

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
          <h2 className="text-white">
            Redefinir sua senha?
          </h2>
          <Formik
            initialValues={{
              email: email ?? '',
              token: "",
              password: ""
            }}
            validate={(values) => {
              let errors = {};
              if (!values.email) {
                errors.email = "Campo Obrigatório";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Endereço de Email Inválido";
              }

              if (!values.token) {
                errors.token = "Token é um campo obrigatório"
              }

              if (!values.password) {
                errors.password = "Senha é um campo obrigatório"
              } else if (values.password.length < 6) {
                errors.password = "Senha fraca"
              }


              return errors;
            }}
            onSubmit={handleForgetPassword}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              errors,
              touched,
              isSubmitting,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="form-size text-white">
                    <div className="form-group mt-3 text-start">
                      <label htmlFor="email">INFORME SEU E-MAIL</label>
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
                      <label htmlFor="token">TOKEN</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DIGITE SEU TOKEN"
                        id="token"
                        name="token"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.token}
                      />
                      {errors.token && touched.token ? (
                        <span className="text-danger">{errors.token}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group mt-3 text-start">
                      <label htmlFor="token">Nova Senha</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Nova Senha"
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
                      REDEFINIR SENHA
                    </button>
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

export default ResetScreen;
