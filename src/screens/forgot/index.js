import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import "../LoginScreen.css";
import authService from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function ForgotScreen() {
  const navigate = useNavigate();
  const handleForgetPassword = async ({ email }, { setSubmitting }) => {
    try {
      const { status } = await authService.forgot(email);
      toast.success(status);
      navigate("/reset", { state: { email } });
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
        <Row className="justify-content-center">
          <Col md={6}>
            <div align="center">
              <h2 className="text-white">
                Esqueceu sua senha?
                <br />
                Tudo bem, isso acontece!
              </h2>
              <Formik
                initialValues={{
                  email: "",
                }}
                validate={(values) => {
                  let errors = {};
                  if (!values.email) {
                    errors.email = "Campo Obrigatório";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Endereço de Email Inválido";
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
                          <label htmlfor="email">INFORME SEU E-MAIL</label>
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
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ForgotScreen;
