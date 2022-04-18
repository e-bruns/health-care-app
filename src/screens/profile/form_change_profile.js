import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";

import authService from "../../services/auth";

const FormChangeProfile = () => {
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    (async () => {
      const user = await authService.me();
      console.log(user);
      setInitialValues(user);
    })();
  }, []);

  const handleChangeProfile = async ({ name }) => {
    try {
      const response = await authService.changeProfile({
        name,
      });
      console.log(response);
      if (response.status === "success") {
        toast.success("Dados atualizado com sucesso");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.data) {
        error.response.data.errors.full_messages.forEach((message) => {
          toast.error(message);
        });
      } else {
        toast.error("Falha ao registrar usuário");
      }
    }
  };

  return (
    <fieldset>
      <legend className="text-white fw-bold text-center">Alterar Meu Dados</legend>
      <Formik
        initialValues={initialValues}
        onSubmit={handleChangeProfile}
        enableReinitialize={true}
        validationSchema={yup.object().shape({
          name: yup.string().required("Nome é um campo obrigatório"),
        })}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label text-white">Email</label>
                <input
                  className="form-control"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  readOnly={true}
                />
              </div>
              <div className="form-group mt-2">
                <label className="form-label text-white">Nome</label>
                <input
                  className="form-control"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <span className="text-warning fw-bold">{errors.name}</span>
                ) : (
                  ""
                )}
              </div>

              <div className="mt-3">
                <button type="submit" className="btn btn-primary">
                  Alterar
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </fieldset>
  );
};

export default FormChangeProfile;
