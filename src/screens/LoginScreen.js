import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { toast } from "react-toastify";

import { login } from "../features/userSlice";
import authService from "../services/auth";

import "./LoginScreen.css";

function LoginScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState();

  async function handleLogin(value) {
    try {
      setLoading(true);
      const sessionUser = await authService.login(value.email, value.password);
      dispatch(login(sessionUser));
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Falha ao realizar login! Tente novamente");
    } finally {
      setLoading(false);
    }
  }

  if (user) {
    return <Navigate to="/home" replace />;
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
        <p className="text-center text-white p-4 textLogin">
          Armazene seu histórico de consultas, exames e tratamentos e
          compartilhe de forma segura com profissionais da saúde!
        </p>

        <div align="center">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.email) {
                errors.email = "Campo Obrigatório";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Endereço de Email Inválido";
              }

              if (!values.password) {
                errors.password = "Campo Obrigatório";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              handleLogin(values);
              setSubmitting(false);
            }}
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
                  <div className="form-size">
                    <div className="mb-3 mt-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="DIGITE SEU E-MAIL"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <span className="text-danger text-bold">
                          {errors.email}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="DIGITE SUA SENHA"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <span className="text-danger text-bold">
                          Campo Obrigatório
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-3 btn btn-lg btn-primary form-size"
                  >
                    {loading ? "Entrando..." : "ENTRAR"}
                  </button>
                </form>
              );
            }}
          </Formik>

          <div className="mt-3">
            <a
              href="/register"
              className="btn btn-sm btn-outline-primary text-white form-size"
            >
              NÃO TENHO CADASTRO
            </a>
          </div>
          <div className="mt-3">
            <Link
              className="text-white form-size"
              to="forgot"
            >
              Esqueci minha senha
            </Link>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
