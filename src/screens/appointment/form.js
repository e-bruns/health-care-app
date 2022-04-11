import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import MenuHeaderMain from "../_components/MenuHeaderMain";
import "../home/index.css";
import appointmentsService from "../../services/appointment";
import CardTitle from "../_components/CardTitle";

function AppointmentFormScreen() {
  const [initialValues, setInitialsValues] = useState({
    title: "",
    professional_name: "",
    date: "",
    files: "",
  });

  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const result = await appointmentsService.show(params.id);
        const dateFormatted = result.date.split('/').reverse().join('-')
        if (result) {
          setInitialsValues({...result, date: dateFormatted});
        }
      }
    })();
  }, [params]);

  async function handleRegister(values, { setSubmitting }) {
    try {
      if (params.id) {
        await appointmentsService.update(params.id, { ...values });
        toast.success("Tratamento atualizado com sucesso!!");
      } else {
        await appointmentsService.create({ ...values });
        toast.success("Consulta adicionado com sucesso!!");
      }
      navigate("/appointment");
    } catch (error) {
      if (error.response.data.errors) {
        error.response.data.errors.full_messages.forEach((message) => {
          toast.error(message);
        });
      } else {
        toast.error("Falha ao salvar Consulta");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <MenuHeaderMain />

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <CardTitle title={"ADCIONAR CONSULTA"}></CardTitle>
        </Col>
      </Row>

      <Row className="justify-content-center px-3">
        <Col xs={12} md={4}>
          <Formik
            initialValues={initialValues}
            validationSchema={yup.object().shape({
              title: yup.string().required("Titulo é um campo obrigatório"),
              date: yup
                .date()
                .default(function () {
                  return new Date();
                })
                .required("Data é um campo obrigatório"),
              professional_name: yup
                .string()
                .required("Local é um campo obrigatório"),
            })}
            enableReinitialize={true}
            onSubmit={handleRegister}
          >
            {({
              values,
              setFieldValue,
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
                      <label htmlFor="title">TÍTULO DA CONSULTA</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DIGITE O TÍTULO DA CONSULTA"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                      />
                      {errors.title && touched.title ? (
                        <span className="text-danger">{errors.title}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group mt-3 text-start">
                      <label htmlFor="title">NOME DO PROFISSIONAL</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DIGITE O NOME DO PROFISSIONAL"
                        name="professional_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.professional_name}
                      />
                      {errors.title && touched.title ? (
                        <span className="text-danger">{errors.title}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group mt-3 text-start">
                      <label htmlFor="date">DATA DA CONSULTA</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="DATA DA CONSULTA"
                        name="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date}
                      />
                      {errors.date && touched.date ? (
                        <span className="text-danger">{errors.date}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    <Row className="my-3">
                      <Col xs="6" md="6">
                        <div className="d-grid mt-2">
                          <Link
                            to="/appointment"
                            className="btn btn-secondary mt-1 btn-lg"
                          >
                            Voltar
                          </Link>
                        </div>
                      </Col>
                      <Col xs="6" md="6">
                        <div className="d-grid mt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-1 btn btn-lg btn-primary"
                          >
                            {!params.id ? "CADASTRAR" : "ATUALIZAR"}
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </>
  );
}

export default AppointmentFormScreen;
