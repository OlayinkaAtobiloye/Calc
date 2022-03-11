import React from "react";
import "./result.css";
import { connect } from "react-redux";

const Result = (props) => {
  return <div className="result">{props.display}</div>;
};

const mapStatetoProps = (state) => {
  return {
    display: state.display,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onSetTheme: (theme) => dispatch({ type: "SET_THEME", theme: theme }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Result);
