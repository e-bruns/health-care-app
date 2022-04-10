import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "../home/index.css";
import examService from "../../services/exam";
import FileUpload from "../_components/FileUploader";
import { Col, Row } from "react-bootstrap";
import CardTitle from "../_components/CardTitle";

function ExamFormScreen() {
  const [initialValues, setInitialsValues] = useState({
    title: "",
    exam_location: "",
    date: "",
    files: [],
  });

  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const result = await examService.show(params.id);
        if (result) {
          const dateFormatted = result.date.split("/").reverse().join("-");
          setInitialsValues({ ...result, date: dateFormatted });
        }
      }
    })();
  }, [params]);

  async function handleRegister(values, { setSubmitting }) {
    try {
      if (params.id) {
        await examService.update(params.id, { ...values });
        toast.success("Exame atualizado com sucesso!!");
      } else {
        await examService.create({ ...values });
        toast.success("Exame adicionado com sucesso!!");
      }
      navigate("/exam");
    } catch (error) {
      if (error.response.data.errors) {
        error.response.data.errors.full_messages.forEach((message) => {
          toast.error(message);
        });
      } else {
        toast.error("Falha ao salvar Exame");
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
          <CardTitle title={`${params.id ? "ATUALIZAR" : "ADICIONAR"} EXAME`} />
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col xs={10} md={4}>
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
              exam_location: yup
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
                      <label htmlFor="title">TÍTULO DO EXAME</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DIGITE O TÍTULO DO EXAME"
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
                      <label htmlFor="title">LOCAL DO EXAME</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DIGITE O LOCAL DO EXAME"
                        name="exam_location"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.exam_location}
                      />
                      {errors.title && touched.title ? (
                        <span className="text-danger">{errors.title}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group mt-3 text-start">
                      <label htmlFor="date">DATA DO EXAME</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="DATA DO EXAME"
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
                    <div className="mt-3 text-start">
                      <FileUpload
                        onUpdate={(files) => {
                          setFieldValue("files", files);
                        }}
                      />
                    </div>

                    <Row className="my-3">
                      <Col sm="6" md="6">
                        <div className="d-grid mt-2">
                          <Link
                            to="/exam"
                            className="btn btn-secondary mt-1 btn-lg"
                          >
                            Voltar
                          </Link>
                        </div>
                      </Col>
                      <Col sm="6" md="6">
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

export default ExamFormScreen;
