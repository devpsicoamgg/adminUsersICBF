import React, { useState } from "react";
import AdminModalOne from "./AdminModalOne";
import AdminModalTwo from "./AdminModalTwo";
import styles from "./AdminView.module.css";

const AdministrativeView = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleOpenModal1 = () => {
    setShowModal1(true);
  };

  const handleOpenModal2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  return (
    <>
      <div className={styles.containerAdminView}>
        <div className={styles.card} onClick={handleOpenModal1}>
          Card 1
        </div>
        <div className={styles.card} onClick={handleOpenModal2}>
          Card 2
        </div>
      </div>
      {showModal1 && (
        <AdminModalOne onClose={handleCloseModal1}>
          Contenido del Modal 1
        </AdminModalOne >
      )}
      {showModal2 && (
        <AdminModalTwo onClose={handleCloseModal2}>
          Contenido del Modal 2
        </AdminModalTwo>
      )}
    </>
  );
};

export default AdministrativeView;
