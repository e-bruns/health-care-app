import React, { useEffect, useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import authService from "../../services/auth";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import '../home/index.css';
import appointmentsService from '../../services/appointment';


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
        if (result) {
          setInitialsValues(result);
        }
      }
    })();
  }, [params]);

  async function handleRegister(values, { setSubmitting }) {
    try {
      if (params.id) {
        await appointmentsService.update(params.id, { ...values });
        toast.success('Tratamento atualizado com sucesso!!');
      } else {
        await appointmentsService.create({ ...values });
        toast.success('Consulta adicionado com sucesso!!');
      }
      navigate('/appointment');
    } catch (error) {
      if (error.response.data.errors) {
        error.response.data.errors.full_messages.forEach((message) => {
          toast.error(message);
        });
      } else {
        toast.error('Falha ao salvar Consulta');
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <MenuHeaderMain />

      <div className='CardLast_Single'>
        <div className='cardLast' >
          <div className='cardLast__title text-center'>ADCIONAR CONSULTA</div>
        </div>
      </div>

      <div className='container mx-auto'>
        <Formik
          initialValues={initialValues}
          validationSchema={yup.object().shape({
            title: yup.string().required("Titulo é um campo obrigatório"),
            date: yup
              .date()
              .default(function () { return new Date(); })
              .required("Data é um campo obrigatório"),
            professional_name: yup.string().required("Local é um campo obrigatório"),
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="my-3 btn btn-lg btn-primary form-size"
                  >
                    {!params.id ? 'CADASTRAR' : 'ATUALIZAR'}
                  </button>
                </div>
              </form>

            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default AppointmentFormScreen;