import { Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";

import authService from "../../services/auth";

const FormChangePassword = () => {


  const handleChangePassword = async (
    { current_password, password, password_confirmation },
    { resetForm }
  ) => {
    try {
      const response = await authService.changePassword({
        password,
        password_confirmation,
      });
      if (response.success === true) {
        toast.success(response.message);
        resetForm();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.data) {
        error.response.data.errors.full_messages.forEach((message) => {
          toast.error(message);
        });
      } else {
        toast.error("Puts! Ocorreu um erro inesperado. Verifique seus dados e tente novamente");
      }
    } finally {
    }
  };


  return (
    <fieldset>
      <legend className="text-white fw-bold text-center">Alterar Senha</legend>
      <Formik
        initialValues={{
          password: "",
          password_confirmation: "",
        }}
        validationSchema={yup.object().shape({
          password: yup.string().required("Senha é um campo obrigatório"),

          password_confirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas devem corresponder")
            .required("Confirmação de Senha é um campo obrigatório"),
        })}
        onSubmit={handleChangePassword}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              {/* <div className="form-group">
                <label className="form-label text-white">Senha Atual</label>
                <input
                  type="password"
                  className="form-control"
                  name="current_password"
                  value={values.current_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.current_password && touched.current_password ? (
                  <span className="text-danger">{errors.current_password}</span>
                ) : (
                  ""
                )}
              </div> */}
              <div className="form-group">
                <label className="form-label text-white">Nova Senha</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <span className="text-warning fw-bold">{errors.password}</span>
                ) : (
                  ""
                )}
              </div>

              <div className="form-group">
                <label className="form-label text-white">
                  Confirma Nova Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password_confirmation"
                  value={values.password_confirmation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password_confirmation &&
                touched.password_confirmation ? (
                  <span className="text-warning fw-bold">
                    {errors.password_confirmation}
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="mt-3">
                <button
                  type={"submit"}
                  className="btn btn-primary"
                >
                  Alterar Senha
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </fieldset>
  );
};

export default FormChangePassword