import React, { useEffect } from "react";
import "./header.css";
import { connect } from "react-redux";
import {
  setColorScheme,
  getPreferredColorScheme,
  setTheme1,
  setTheme2,
  setTheme3,
} from "../../store/theme";

const Header = (props) => {
  const setTheme = () => {
    props.onSetTheme(setColorScheme(getPreferredColorScheme()));
  };

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <header className="header flex font-bold">
      <h1 className="text-3xl">calc</h1>
      <div className="flex items-end">
        <p>THEME</p>
        <div className="toggleID">
          <p>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </p>

          <p className="togglebackground">
            <span
              className="togglespan"
              onClick={() => {
                setTheme1();
                props.onSetTheme(1);
              }}
            >
              {props.theme == 1 ? <span className="togglebutton"></span> : null}
            </span>
            <span
              className="togglespan"
              onClick={() => {
                setTheme2();
                props.onSetTheme(2);
              }}
            >
              {props.theme == 2 ? <span className="togglebutton"></span> : null}
            </span>
            <span
              className="togglespan"
              onClick={() => {
                setTheme3();
                props.onSetTheme(3);
              }}
            >
              {props.theme == 3 ? <span className="togglebutton"></span> : null}
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

const mapStatetoProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onSetTheme: (theme) => dispatch({ type: "SET_THEME", theme: theme }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Header);
