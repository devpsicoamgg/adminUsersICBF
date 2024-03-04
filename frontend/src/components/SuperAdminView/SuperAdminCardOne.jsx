import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createContract } from "../../redux/Store/Slices/superAdminSlice";
import styles from "./SuperAdminCardOne.module.css";

const SuperAdminCardOne = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const initialValues = {
    areaMisionalIcbf: "",
    regional: "",
    vigencia: "",
    serviceName: "",
    supervisor: "",
    startDate: "",
    endDate: "",
    contractNumber: "",
    legalRepresentative: "",
    spots: "",
  };

  const validationSchema = Yup.object().shape({
    areaMisionalIcbf: Yup.string()
      .matches(/^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, "El campo no puede contener números")
      .required("Campo requerido"),
    regional: Yup.string()
      .matches(/^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, "El campo no puede contener números")
      .required("Campo requerido"),
    vigencia: Yup.string()
      .matches(/^(19|20)\d{2}$/, "El formato de año no es válido")
      .required("Campo requerido"),
    serviceName: Yup.string()
      .matches(/^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, "El campo no puede contener números")
      .required("Campo requerido"),
    supervisor: Yup.string()
      .matches(/^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, "El campo no puede contener números")
      .required("Campo requerido"),
    startDate: Yup.date().required("Campo requerido"),
    endDate: Yup.date()
      .required("Campo requerido")
      .min(
        Yup.ref("startDate"),
        "La fecha debe ser posterior a la fecha de inicio"
      ),
    contractNumber: Yup.string().required("Campo requerido"),
    legalRepresentative: Yup.string()
      .matches(/^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, "El campo no puede contener números")
      .required("Campo requerido"),
    spots: Yup.string()
      .test("is-number", "Debe ser un número", (value) => {
        return !isNaN(value);
      })
      .required("Campo requerido"),
  });

  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("Valores del formulario:", values);
      setLoading(true);
      await dispatch(createContract(values));
      setSubmitting(false);
      setLoading(false);
      setSuccessMessage("¡Contrato creado exitosamente!");
      resetForm();
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error al enviar los datos del formulario:", error);
    }
  };

  return (
    <div className={styles.containerSuperAdminCardOne}>
      <div className={styles.header}>
        <h2>Creación de Contrato</h2>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.formGroupOne}>
              <div>
                <label htmlFor="areaMisionalIcbf">Área Misional ICBF:</label>
                <Field
                  type="text"
                  id="areaMisionalIcbf"
                  name="areaMisionalIcbf"
                />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="areaMisionalIcbf"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="regional">Regional:</label>
                <Field type="text" id="regional" name="regional" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="regional"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="vigencia">Vigencia:</label>
                <Field type="text" id="vigencia" name="vigencia" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="vigencia"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroupOne}>
              <div>
                <label htmlFor="serviceName">Nombre del Servicio:</label>
                <Field type="text" id="serviceName" name="serviceName" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="serviceName"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="supervisor">Supervisor:</label>
                <Field type="text" id="supervisor" name="supervisor" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="supervisor"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="startDate">Fecha de Inicio:</label>
                <Field type="date" id="startDate" name="startDate" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="startDate"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroupOne}>
              <div>
                <label htmlFor="endDate">Fecha de Fin:</label>
                <Field type="date" id="endDate" name="endDate" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="endDate"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contractNumber">Número de Contrato:</label>
                <Field type="text" id="contractNumber" name="contractNumber" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="contractNumber"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="legalRepresentative">
                  Representante Legal:
                </label>
                <Field
                  type="text"
                  id="legalRepresentative"
                  name="legalRepresentative"
                />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="legalRepresentative"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroupOne}>
              <label htmlFor="spots">Cupos:</label>
              <Field type="text" id="spots" name="spots" />
              <div className={styles.ErrorMessageDiv}>
                <ErrorMessage
                  name="spots"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>

              <div className={styles.sending}>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Crear Contrato"}
                </button>

                {loading && <div className={styles.loading}>Cargando...</div>}
                {successMessage && (
                  <div className={styles.successMessage}>{successMessage}</div>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SuperAdminCardOne;
