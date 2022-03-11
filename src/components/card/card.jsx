import React from "react";
import "./card.css";
import Button from "../button/button";
import { connect } from "react-redux";

const Card = (props) => {
  return (
    <div className="card">
      <Button onClick={() => props.onSetOperand("7")}>7</Button>
      <Button onClick={() => props.onSetOperand("8")}>8</Button>
      <Button onClick={() => props.onSetOperand("9")}>9</Button>
      <Button className="darkbluebutton" onClick={props.onDelete}>
        DEL
      </Button>
      <Button onClick={() => props.onSetOperand("4")}>4</Button>
      <Button onClick={() => props.onSetOperand("5")}>5</Button>
      <Button onClick={() => props.onSetOperand("6")}>6</Button>
      <Button onClick={() => props.onSetOperator("+")}>+</Button>
      <Button onClick={() => props.onSetOperand("1")}>1</Button>
      <Button onClick={() => props.onSetOperand("2")}>2</Button>
      <Button onClick={() => props.onSetOperand("3")}>3</Button>
      <Button onClick={() => props.onSetOperator("-")}>-</Button>
      <Button onClick={() => props.onSetOperand(".")}>.</Button>
      <Button onClick={() => props.onSetOperand("0")}>0</Button>
      <Button onClick={() => props.onSetOperator("/")}>/</Button>
      <Button onClick={() => props.onSetOperator("*")}>*</Button>
      <Button className="darkbluebutton col-span-2" onClick={props.onReset}>
        RESET
      </Button>
      <Button className="redbutton col-span-2" onClick={props.onShowResult}>
        =
      </Button>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onSetOperand: (operand) =>
      dispatch({ type: "SET_OPERAND", value: operand }),
    onSetOperator: (operator) =>
      dispatch({ type: "SET_OPERATOR", operator: operator }),
    onShowResult: () => dispatch({ type: "SHOW_RESULT" }),
    onReset: () => dispatch({ type: "RESET" }),
    onDelete: () => dispatch({ type: "DELETE" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Card);
