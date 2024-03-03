import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="test" className={styles.navBar}>
      <Link to="/" className={styles.title}>
        <FaSignOutAlt className={styles.logoutIcon} />
      <span className={styles.logoutText}>Cerrar Sesión</span>
      </Link>

      <div className={styles.menu} onClick={toggleMenu}>
        <span></span>
        <span> </span>
        <span></span>
      </div>

      <ul style={menuOpen ? { display: "flex" } : {}}>
        <li>
          <Link
            to="https://www.icbf.gov.co/planeacion/modelo-de-operacion-por-procesos"
            className={styles.link}
          >
            INTRANET ICBF
          </Link>
        </li>
        <li>
          <Link
            to="https://www.icbf.gov.co/system/files/procesos/lm5.pp_lineamiento_tecnico_para_la_atencion_a_la_primera_infancia_v7.pdf"
            className={styles.link}
          >
            LINEAMIENTO TÉCNICO
          </Link>
        </li>
      
      </ul>
    </nav>
  );
};

export default NavBar;
