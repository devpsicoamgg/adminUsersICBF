import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ADRES } from "../../helpers/Routes.helper";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContracts,
  fetchCoordinators,
} from "../../redux/Store/Slices/superAdminSlice";
import moment from "moment";
import styles from "./CreateHumanResource.module.css";

const CreateHumanResource = ({ cardName, onClose }) => {
  const dispatch = useDispatch();
  const contracts = useSelector((state) => state.superAdmin.contracts.data);
  const coordinators = useSelector(
    (state) => state.superAdmin.coordinators.data
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(fetchContracts());
    dispatch(fetchCoordinators());
  }, [dispatch]);

  const initialValues = {
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    kindDoc: "",
    numberDoc: "",
    nataleDate: "",
    role: "",
    gender: "",
    entryDate: "",
    phone: "",
    email: "",
    contractId: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "El nombre no puede contener números")
      .required("El nombre es requerido"),
    secondName: Yup.string().matches(
      /^[A-Za-z]+$/,
      "El segundo nombre no puede contener números"
    ),
    firstLastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "El primer apellido no puede contener números")
      .required("El primer apellido es requerido"),
    secondLastName: Yup.string().matches(
      /^[A-Za-z]+$/,
      "El segundo apellido no puede contener números"
    ),
    kindDoc: Yup.string().required("El tipo de documento es requerido"),
    numberDoc: Yup.string()
      .matches(/^[0-9]+$/, "El número de documento debe contener solo números")
      .required("El número de documento es requerido"),
    nataleDate: Yup.date()
      .nullable()
      .required("La fecha de nacimiento es requerida"),
    role: Yup.string().required("El rol es requerido"),
    gender: Yup.string().required("El género es requerido"),
    entryDate: Yup.date().required("La fecha de ingreso es requerida"),
    phone: Yup.string()
      .matches(/^[0-9()+-]+$/, "El número de teléfono no es válido")
      .required("El número de teléfono es requerido"),
    email: Yup.string()
      .email("El correo electrónico no es válido")
      .required("El correo electrónico es requerido"),
    contractId: Yup.string().required("El ID del contrato es requerido"),
  });

  const handleSubmit = async (values, actions) => {
    console.log(values);
    try {
      const formattedValues = { ...values };
      formattedValues.nataleDate = moment(values.nataleDate).format(
        "YYYY-MM-DD"
      );
      formattedValues.entryDate = moment(values.entryDate).format("YYYY-MM-DD");
      let url = "";

      switch (cardName) {
        case "Coordinador":
          url = `${ADRES.TO}/admin/coordinators/`;
          break;
        case "Nutricionista":
          url = `${ADRES.TO}/admin/nutritionist/`;
          break;
        case "Psicosocial":
          url = `${ADRES.TO}/admin/psysocial/`;
          break;
        case "Docente":
          url = `${ADRES.TO}/admin/teachers/`;
          break;
        default:
          break;
      }


      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedValues),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        onClose();
      }, 2000);
    } catch (error) {
      setErrorMessage(
        "Error en el envío, correo y número de documento podrían estar repetidos, verificar"
      );
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div>
      <div className={styles.closeButton} onClick={onClose}>
        <AiOutlineCloseCircle />
      </div>
      <h1>Creación perfil - {cardName} </h1>{" "}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form>
            <div className={styles.containerHumanResources}>
              <div className={styles.selectContract}>
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

                {["Psicosocial", "Nutricionista", "Docente"].includes(
                  cardName
                ) && (
                  <div className={styles.selectCoordinator}>
                    <Field
                      className={styles.selectFieldMore}
                      as="select"
                      name="coordinatorId"
                    >
                      <option value="">Seleccione el coordinador/a</option>
                      {cardName === "Psicosocial" && (
                        <>
                          {coordinators &&
                            coordinators.length > 0 &&
                            coordinators.map((coordinator) => (
                              <option
                                key={coordinator.id}
                                value={coordinator.id}
                              >
                                {coordinator.firstName} {coordinator.secondName}{" "}
                                {coordinator.firstLastName}{" "}
                                {coordinator.secondLastName}
                              </option>
                            ))}
                        </>
                      )}
                      {cardName === "Nutricionista" && (
                        <>
                          {coordinators &&
                            coordinators.length > 0 &&
                            coordinators.map((coordinator) => (
                              <option
                                key={coordinator.id}
                                value={coordinator.id}
                              >
                                {coordinator.firstName} {coordinator.secondName}{" "}
                                {coordinator.firstLastName}{" "}
                                {coordinator.secondLastName}
                              </option>
                            ))}
                        </>
                      )}
                    </Field>
                    <div className={styles.ErrorMessageDiv}>
                      <ErrorMessage name="coordinador" />
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.row}>
                <div>
                  <label htmlFor="firstName">Primer Nombre</label>
                  <Field type="text" name="firstName" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="firstName" />
                  </div>
                </div>

                <div>
                  <label htmlFor="secondName">Segundo Nombre</label>
                  <Field type="text" name="secondName" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="secondName" />
                  </div>
                </div>

                <div>
                  <label htmlFor="firstLastName">Primer Apellido</label>
                  <Field type="text" name="firstLastName" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="firstLastName" />
                  </div>
                </div>

                <div>
                  <label htmlFor="secondLastName">Segundo Apellido</label>
                  <Field type="text" name="secondLastName" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="secondLastName" />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <label htmlFor="kindDoc">Tipo de Documento</label>
                  <Field
                    className={styles.selectFieldMore}
                    as="select"
                    name="kindDoc"
                  >
                    <option value="">Seleccione el tipo de documento</option>
                    <option value="CC">Cédula de ciudadanía</option>
                    <option value="CN">Certificado de Nacido Vivo</option>
                    <option value="MS">Menor sin identificación</option>
                    <option value="RC">Registro civil</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CE">Cédula de extranjería</option>
                    <option value="SC">Salvoconducto de permanencia.</option>
                    <option value="PA">Pasaporte</option>
                    <option value="CD">Carné diplomático.</option>
                    <option value="AS">Adulto sin documento.</option>
                    <option value="PPT">Permiso de Protección TemporalI</option>
                    <option value="PEP">Permiso Especial de Permanencia</option>
                  </Field>
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="kindDoc" />
                  </div>
                </div>

                <div>
                  <label htmlFor="numberDoc">Número de Documento</label>
                  <Field type="text" name="numberDoc" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="numberDoc" />
                  </div>
                </div>

                <div>
                  <label htmlFor="nataleDate">Fecha de Nacimiento</label>
                  <Field type="date" name="nataleDate" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="nataleDate" />
                  </div>
                </div>

                <div>
                  <label htmlFor="role">Rol</label>
                  <Field
                    as="select"
                    name="role"
                    className={styles.selectFieldMore}
                  >
                    <option value="">Seleccione un rol</option>
                    <option value="COORDINADOR/A">Coordinador/a</option>
                    <option value="PSICOSOCIAL">Psicosocial</option>
                    <option value="AUXILIAR ADMINISTRATIVO/A">
                      Auxiliar Administrativo/a
                    </option>
                    <option value="APOYO SALUD Y NUTRICION">
                      Apoyo Salud y Nutrición
                    </option>
                    <option value="RESPONSABLE CUENTAME">
                      Responsable CUÉNTAME
                    </option>
                    <option value="DOCENTE">Docente</option>
                  </Field>
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="role" />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <label htmlFor="gender">Género</label>
                  <Field
                    className={styles.selectFieldMore}
                    as="select"
                    name="gender"
                  >
                    <option value="">Seleccione un género</option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMENINO">Femenino</option>
                    <option value="LGTBIQ+">LGTBIQ+</option>
                    <option value="INTERSEXUAL">Intersexual</option>
                    <option value="OTROS">Otros</option>
                  </Field>
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="gender" />
                  </div>
                </div>

                <div>
                  <label htmlFor="entryDate">Fecha de Ingreso</label>
                  <Field type="date" name="entryDate" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="entryDate" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone">Teléfono</label>
                  <Field type="text" name="phone" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="phone" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email">Correo Electrónico</label>
                  <Field type="text" name="email" />
                  <div className={styles.ErrorMessageDiv}>
                    <ErrorMessage name="email" />
                  </div>
                </div>
              </div>

              <div className={styles.toDisplay}>
                {showSuccessMessage && (
                  <div className={styles.successMessage}>
                    ¡El formulario se envió con éxito!
                  </div>
                )}

                {errorMessage && (
                  <div className={styles.errorMessage}>{errorMessage}</div>
                )}

                <button type="submit" disabled={formikProps.isSubmitting}>
                  Enviar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateHumanResource;
