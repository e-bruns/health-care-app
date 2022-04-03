import React from 'react'
import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth";
import MenuHeaderMain from "../_components/MenuHeaderMain"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../home/index.css'

function ExamNew() {

  const navigate = useNavigate();

  async function handleExamNew(values, { setSubmitting }) {
    try {
      await authService.examNew({ ...values });
      toast.success('Exame adicionado com sucesso!!');
      navigate('/exam')
    } catch (error) {
      if (error.response.data) {
        error.response.data.errors.full_messages.forEach((message) => {
          toast.error(message)
        })
      } else {
        toast.error('Falha ao adicionar Exame')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <MenuHeaderMain />

      <div className='CardLast_Single'>
        <div className='cardLast' >
          <div className='cardLast__title text-center'>ADCIONAR EXAME</div>
        </div>
      </div>

      <div className='container mx-auto'>

        <Formik
          initialValues={{
            title: "",
            date: "",
            exam_location: "",
            
          }}
          validationSchema={yup.object().shape({
            title: yup.string().required("Titulo é um campo obrigatório"),
            date: yup
              .date()
              .default(function () { return new Date(); })
              .required("Data é um campo obrigatório"),
            exam_location: yup.string().required("Local é um campo obrigatório"),
            
          })}
          onSubmit={handleExamNew}
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
                  <div className="form-group mt-3 text-start">
                    <label htmlFor="exam_location">LOCAL DO EXAME</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DIGITE O LOCAL DO EXAME"
                      name="exam_location"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.exam_location}
                    />
                    {errors.exam_location && touched.exam_location ? (
                      <span className="text-danger">{errors.exam_location}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mt-3 text-start">
                    <label htmlFor="files">ADCIONAR ARQUIVO</label>
                    <input
                      className='bg-primary'
                      type="file"
                      name="files"
                      multiple
                      value={values.files}
                    />

                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="my-3 btn btn-lg btn-primary form-size"
                  >
                    CADASTRAR
                  </button>
                </div>
              </form>

            );
          }}
        </Formik>
      </div>

    </>
  )
}

export default ExamNew