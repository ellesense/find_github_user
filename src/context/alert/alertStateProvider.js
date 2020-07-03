import React, { useReducer } from "react";
import alertReducer from "./alertReducer";
import AlertContext from "./alertContext";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// create context component
const AlertStateProvider = (props) => {
  const initState = {
    showAlert: false,
    alertMsg: "",
  };

  const [state, dispatch] = useReducer(alertReducer, initState);

  const setAlert = (alertMsg) => {
    dispatch({
      type: SET_ALERT,
      payload: { alertMsg },
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: false,
      });
    }, 2500);
  };

  return (
    <AlertContext.Provider
      value={{
        alertMsg: state.alertMsg,
        showAlert: state.showAlert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertStateProvider;
