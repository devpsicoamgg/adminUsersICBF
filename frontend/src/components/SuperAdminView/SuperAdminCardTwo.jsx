import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./SuperAdminCardTwo.module.css";
import CreateHumanResource from "./CreateHumanResource";

const SuperAdminCardTwo = ({ onClose }) => {
  const [coordinadorOpen, setCoordinadorOpen] = useState(false);
  const [asistenteAdminOpen, setAsistenteAdminOpen] = useState(false);
  const [psicosocialOpen, setPsicosocialOpen] = useState(false);
  const [nutritionOpen, setNutritionOpen] = useState(false);
  const [cuentameOpen, setCuentameOpen] = useState(false);
  const [teacherOpen, setTeacherOpen] = useState(false);
  

  const toggleCoordinador = () => {
    setCoordinadorOpen(!coordinadorOpen);
  };

  const toggleAsistenteAdmin = () => {
    setAsistenteAdminOpen(!asistenteAdminOpen);
  };

  const togglePsicosocial = () => {
    setPsicosocialOpen(!psicosocialOpen);
  };

  const toggleNutrition = () => {
    setNutritionOpen(!nutritionOpen);
  };

  const toggleCuentame = () => {
    setCuentameOpen(!cuentameOpen);
  };

  const toggleTeacher = () => {
    setTeacherOpen(!teacherOpen);
  };

  const toggleCardContainer = () => {
    onClose();
  };


  return (
    <>
      {coordinadorOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <CreateHumanResource cardName="Coordinador" onClose={onClose}/>
          </div>
        </div>
      )}

      {asistenteAdminOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <CreateHumanResource cardName="Asistente Administrativo" onClose={onClose}/>
          </div>
        </div>
      )}

      {psicosocialOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <CreateHumanResource cardName="Psicosocial" onClose={onClose}/>
          </div>
        </div>
      )}

      {nutritionOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <CreateHumanResource cardName="Nutricionista" onClose={onClose}/>
          </div>
        </div>
      )}

      {cuentameOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <CreateHumanResource cardName="Digitador cuéntame" onClose={onClose}/>
          </div>
        </div>
      )}

      {teacherOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <CreateHumanResource cardName="Docente" onClose={onClose}/>
          </div>
        </div>
      )}

      <div className={styles.containerSuperAdminCardTwo}>
        <AiOutlineCloseCircle
          className={styles.closeIcon}
          onClick={toggleCardContainer}
        />
        <h2>CREACIÓN DE TALENTO HUMANO</h2>
        <ul>
          <li onClick={toggleCoordinador}>CREAR COORDINADOR</li>
          <li onClick={toggleAsistenteAdmin}>CREAR ASISTENTE ADMINISTRATIVO</li>
          <li onClick={togglePsicosocial}>CREAR PROFESIONAL PSICOSOCIAL</li>
          <li onClick={toggleNutrition}>CREAR NUTRICIONISTA</li>
          <li onClick={toggleCuentame}>CREAR DIGITADOR CUÉNTAME</li>
          <li onClick={toggleTeacher}>CREAR DOCENTE</li>
        </ul>
      </div>
    </>
  );
};

export default SuperAdminCardTwo;
