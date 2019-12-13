import React from "react";
import { ToastContainer , Zoom, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotifyContainer = () => (
  <ToastContainer position="top-right"
  autoClose={2000}
  hideProgressBar
  newestOnTop
  closeButton={false}
  closeOnClick
  draggable
  pauseOnHover
  pauseOnVisibilityChange
  rtl={false}
  transition={Zoom}/>
);

export default NotifyContainer;
