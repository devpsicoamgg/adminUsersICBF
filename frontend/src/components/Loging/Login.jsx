import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ADRES, ROUTES } from "../../helpers/Routes.helper.js";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setUserProfile } from "../../redux/Store/Slices/userSlice.js";
import styles from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato de correo electrónico inválido")
      .required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const encodedPassword = encodeURIComponent(values.password);
      const response = await axios.get(
        `${ADRES.TO}/acces/validate?email=${values.email}&password=${encodedPassword}`
      );
      console.log("Respuesta del servidor:", response.data);
      const { success, message, profile } = response.data;

      if (!success) {
        setErrorMessage(message);
      } else {
        setErrorMessage("");
        dispatch(setUserProfile(profile));
        console.log("Perfil del usuario autenticado:", profile);

        switch (profile) {
          case "profileCoordinator":
            console.log("Redirigiendo a coordinador");
            navigate(ROUTES.COORDINATOR);
            break;
          case "profileAdministrative":
            console.log("Redirigiendo a administrativo");
            navigate(ROUTES.ADMIN);
            break;
          case "profileTeachers":
            console.log("Redirigiendo a la vista de profesores");
            navigate(ROUTES.TEACHERS);
            break;
          case "profileCuentame":
            console.log("Redirigiendo a la vista de cuentame");
            navigate(ROUTES.CUENTAME);
            break;
          case "profileSuperAdmin":
            console.log("Redirigiendo a la vista de superAdmin");
            navigate(ROUTES.SUPERADMIN);
            break;
          default:
            console.log("Redirigiendo a la página de inicio");
            navigate(ROUTES.LOGIN);
            break;
        }
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error.message);
      setErrorMessage(
        "Error al enviar la solicitud. Por favor, intenta nuevamente."
      );
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2> SISTEMA GESTOR USUARIOS </h2>
      </div>

      <div className={styles.header}>
        <p>
          {" "}
          <b> PERFIL ASIST-ADMIN:</b> pepitocontreras212@uncorreox.com /
          T%qLdfTOi <br />
          <b> PERFIL COORDINADOR: </b> otro@estecorreo.com / s7RFfs-!y <br />
          <b> PERFIL SUPER-ADMIN: </b> superadmin@gmail.com / H5ygNjcEp <br />
          <b> PERFIL NUTRI: </b> cualquiermail@gmail.com / _?&=#(cb@ <br />
          <b> PERFIL CUENTAME: </b> uncorreo.delcuentame@gmail.com / M3#THG$WT{" "}
          <br />
          <b> PERFIL PSYSOC: </b> psy.social@gmail.com / Yz20Fk079 <br />
          <b> PERFIL DOCENTE: </b> docente@gmail.com / hd_ueWIp7 <br />
        </p>
      </div>

      <div className={styles.formContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  onBlur={() => setErrorMessage("")}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña:</label>
                <div className={styles.passwordField}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    onBlur={() => setErrorMessage("")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.eyeIcon}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>

              {errorMessage && (
                <div className={styles.ErrorMessage}>{errorMessage}</div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.btn}
              >
                {isSubmitting ? "Iniciando Sesión..." : "Iniciar Sesión"}
              </button>
              <div className={styles.links}>
                <Link to={ROUTES.POLICY} className={styles.link}>
                  Política de Privacidad
                </Link>
                <Link to={ROUTES.TERMS} className={styles.link}>
                  Términos y Condiciones
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
