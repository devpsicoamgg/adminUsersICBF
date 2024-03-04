import React, { useState, useEffect } from "react";
import AdminModalOne from "./SuperAdminCardOne";
import AdminModalTwo from "./SuperAdminCardTwo";
import AdminModalThree from "./SuperAdminCardThree";
import { FaFileContract } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import styles from "./SuperAdminView.module.css";
import NavBar from "../NavBar/NavBar";

const SuperAdminView = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleOpenModal1 = () => {
    setShowModal1(true);
    setShowModal2(false);
    setShowModal3(false);
    sessionStorage.setItem("showModal1", "true");
    sessionStorage.removeItem("showModal2");
    sessionStorage.removeItem("showModal3");
  };

  const handleOpenModal2 = () => {
    setShowModal2(true);
    setShowModal1(false);
    setShowModal3(false);
    sessionStorage.setItem("showModal2", "true");
    sessionStorage.removeItem("showModal1");
    sessionStorage.removeItem("showModal3");
  };

  const handleOpenModal3 = () => {
    setShowModal3(true);
    setShowModal1(false);
    setShowModal2(false);
    sessionStorage.setItem("showModal3", "true");
    sessionStorage.removeItem("showModal1");
    sessionStorage.removeItem("showModal2");
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
    sessionStorage.removeItem("showModal1");
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
    sessionStorage.removeItem("showModal2");
  };

  const handleCloseModal3 = () => {
    setShowModal3(false);
    sessionStorage.removeItem("showModal3");
  };

  useEffect(() => {
    const storedModal1 = sessionStorage.getItem("showModal1");
    const storedModal2 = sessionStorage.getItem("showModal2");
    const storedModal3 = sessionStorage.getItem("showModal3");
    if (storedModal1 === "true") {
      setShowModal1(true);
    }
    if (storedModal2 === "true") {
      setShowModal2(true);
    }
    if (storedModal3 === "true") {
      setShowModal3(true);
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.containerAdminView}>
        <div className={styles.card} onClick={handleOpenModal1}>
          <p className={styles.titles}> CREACIÓN DE CONTRATO </p>
          <FaFileContract className={styles.contractIcon} />
        </div>
        <div className={styles.card} onClick={handleOpenModal2}>
          <p className={styles.titles}> CREACIÓN DE TALENTO HUMANO </p>
          <GrUserWorker className={styles.workerIcon} />
        </div>
        <div className={styles.card} onClick={handleOpenModal3}>
          <p className={styles.titles}> CREAR UDS </p>
          <SiGoogleclassroom className={styles.createIcon} />
        </div>
      </div>
      {showModal1 && (
        <AdminModalOne onClose={handleCloseModal1}>
          Contenido del Modal 1
        </AdminModalOne>
      )}
      {showModal2 && (
        <AdminModalTwo onClose={handleCloseModal2}>
          Contenido del Modal 2
        </AdminModalTwo>
      )}
      {showModal3 && (
        <AdminModalThree onClose={handleCloseModal3}>
          Contenido del Modal 3
        </AdminModalThree>
      )}
    </>
  );
};

export default SuperAdminView;
