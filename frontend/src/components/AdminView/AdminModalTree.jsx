import React from "react";
import styles from "./Modal.module.css";

const AdminModalOne = ({ onClose, children }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalClose} onClick={onClose}>
          &times;
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminModalOne;
