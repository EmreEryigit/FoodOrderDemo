import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModaOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModaOverlay>{props.children}</ModaOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
}

export default Modal;
