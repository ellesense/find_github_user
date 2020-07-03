import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = ({ showAlert, alertMsg }) => {
  const alertContext = useContext(AlertContext);

  return (
    <div className="alert-msg" style={{ textAlign: "center" }}>
      {alertContext.showAlert && alertContext.alertMsg}
    </div>
  );
};

export default Alert;
