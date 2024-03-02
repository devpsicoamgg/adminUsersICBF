import React, { useState, useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Err404.module.css";
import { useDispatch } from "react-redux";
import { clearUserProfile } from "../../redux/Store/Slices/userSlice";
import { ROUTES } from "../../helpers/Routes.helper";

const Err404 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); 

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearUserProfile()); 
      navigate(ROUTES.LOGIN); 
    }, countdown * 1000);

    // Actualizar el contador cada segundo
    const interval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [dispatch, navigate, countdown]);

  return (
    <div className={styles.containerErr404}>
      <FaExclamationTriangle className={styles.icon} />
      <h1>Error 404</h1>
      <p>
        La página que estás buscando no se pudo encontrar o no tienes
        autorización para su ingreso.
      </p>
      <p>Por favor, verifica la URL e intenta nuevamente.</p>
      <p>Redirigiendo en {countdown} segundos...</p>
    </div>
  );
};

export default Err404;
