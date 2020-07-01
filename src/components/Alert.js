import React from "react";

const Alert = ({ showAlert, alertMsg }) => {
  return (
    <div className="alert-msg" style={{ textAlign: "center" }}>
      {showAlert && alertMsg}
    </div>
  );
};

export default Alert;
