import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContracts,
  fetchCoordinators,
} from "../../redux/Store/Slices/superAdminSlice";
import { createUDS } from "../../redux/Store/Slices/superAdminSlice";
import styles from "./SuperAdminCardThree.module.css";

const SuperAdminCardThree = ({ onClose }) => {
  const dispatch = useDispatch();
  const contracts = useSelector((state) => state.superAdmin.contracts.data);
  const coordinators = useSelector(
    (state) => state.superAdmin.coordinators.data
  );

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    dispatch(fetchContracts());
    dispatch(fetchCoordinators());
  }, [dispatch]);

  const initialValues = {
    groupName: "",
    cuentameCode: "",
    address: "",
    municipality: "",
    neighborhood: "",
    contractId: "",
    coordinatorId: "",
  };

  const validationSchema = Yup.object().shape({
    groupName: Yup.string()
      .matches(/^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, "El campo no puede contener números")
      .required("Campo requerido"),
    cuentameCode: Yup.string()
      .test("is-number", "Debe ser un número", (value) => {
        return !isNaN(value);
      })
      .required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    municipality: Yup.string()
      .matches(/^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, "El campo no puede contener números")
      .required("Campo requerido"),
    neighborhood: Yup.string().required("Campo requerido"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("Valores del formulario:", values);
      setLoading(true);
      await dispatch(createUDS(values));
      setSubmitting(false);
      setLoading(false);
      setSuccessMessage(`🥳 UDS CREADA EXITOSAMENTE`);
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
        <h2>Creación de UDS</h2>
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
              <div className={styles.formGroupOne}>
                <Field
                  as="select"
                  name="contractId"
                  className={styles.selectField}
                >
                  <option value="">Seleccione un contrato</option>
                  {contracts &&
                    contracts.length > 0 &&
                    contracts.map((contract) => (
                      <option key={contract.id} value={contract.id}>
                        {contract.contractNumber} - {contract.serviceName}
                      </option>
                    ))}
                </Field>
                <div className={styles.ErrorMessageDivContract}>
                  <ErrorMessage name="contractId" />
                </div>

                <Field
                  as="select"
                  name="coordinatorId"
                  className={styles.selectField}
                >
                  <option value="">Seleccione un coordinador</option>
                  {coordinators &&
                    coordinators.length > 0 &&
                    coordinators.map((coordinator) => (
                      <option key={coordinator.id} value={coordinator.id}>
                        {coordinator.firstName} {coordinator.secondName}{" "}
                        {coordinator.firstLastName} {coordinator.secondLastName}
                      </option>
                    ))}
                </Field>
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage name="coordinatorId" />
                </div>
              </div>

              <div>
                <label htmlFor="groupName">Nombre de la UDS:</label>
                <Field type="text" id="groupName" name="groupName" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="groupName"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="cuentameCode">Código Cuéntame:</label>
                <Field type="text" id="cuentameCode" name="cuentameCode" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="cuentameCode"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address">Dirección UDS:</label>
                <Field type="text" id="address" name="address" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="address"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="municipality">Municipio:</label>
                <Field type="text" id="municipality" name="municipality" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="municipality"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="neighborhood">Barrio / Ubicación :</label>
                <Field type="text" id="neighborhood" name="neighborhood" />
                <div className={styles.ErrorMessageDiv}>
                  <ErrorMessage
                    name="neighborhood"
                    component="div"
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <div className={styles.sending}>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Crear UDS"}
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

export default SuperAdminCardThree;
