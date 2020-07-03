import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { showAlert, alertMsg } = alertContext;

  return (
    <div className="alert-msg" style={{ textAlign: "center" }}>
      {showAlert && alertMsg}
    </div>
  );
};

export default Alert;
