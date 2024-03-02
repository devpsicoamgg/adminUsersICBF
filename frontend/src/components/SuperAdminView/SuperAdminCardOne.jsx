import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaTimes } from "react-icons/fa";
import styles from "./SuperAdminCardOne.module.css";

const SuperAdminCardOne = ({ onClose })  => {
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
    areaMisionalIcbf: Yup.string().required("Campo requerido"),
    regional: Yup.string().required("Campo requerido"),
    vigencia: Yup.string().required("Campo requerido"),
    serviceName: Yup.string().required("Campo requerido"),
    supervisor: Yup.string().required("Campo requerido"),
    startDate: Yup.date().required("Campo requerido"),
    endDate: Yup.date().required("Campo requerido"),
    contractNumber: Yup.string().required("Campo requerido"),
    legalRepresentative: Yup.string().required("Campo requerido"),
    spots: Yup.number()
      .required("Campo requerido")
      .positive("Debe ser un número positivo"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log("Valores del formulario:", values);
    setSubmitting(false);
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
            <div className={styles.formGroup}>
              <label htmlFor="areaMisionalIcbf">Área Misional ICBF:</label>
              <Field
                type="text"
                id="areaMisionalIcbf"
                name="areaMisionalIcbf"
              />
              <ErrorMessage
                name="areaMisionalIcbf"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="regional">Regional:</label>
              <Field type="text" id="regional" name="regional" />
              <ErrorMessage
                name="regional"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="vigencia">Vigencia:</label>
              <Field type="text" id="vigencia" name="vigencia" />
              <ErrorMessage
                name="vigencia"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="serviceName">Nombre del Servicio:</label>
              <Field type="text" id="serviceName" name="serviceName" />
              <ErrorMessage
                name="serviceName"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="supervisor">Supervisor:</label>
              <Field type="text" id="supervisor" name="supervisor" />
              <ErrorMessage
                name="supervisor"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="startDate">Fecha de Inicio:</label>
              <Field type="date" id="startDate" name="startDate" />
              <ErrorMessage
                name="startDate"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="endDate">Fecha de Fin:</label>
              <Field type="date" id="endDate" name="endDate" />
              <ErrorMessage
                name="endDate"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contractNumber">Número de Contrato:</label>
              <Field type="text" id="contractNumber" name="contractNumber" />
              <ErrorMessage
                name="contractNumber"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="legalRepresentative">Representante Legal:</label>
              <Field
                type="text"
                id="legalRepresentative"
                name="legalRepresentative"
              />
              <ErrorMessage
                name="legalRepresentative"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="spots">Cupos:</label>
              <Field type="number" id="spots" name="spots" />
              <ErrorMessage
                name="spots"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Crear Contrato"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SuperAdminCardOne;
