import { ReactElement, useContext } from "react";

import { Bounce, ToastContainer } from "react-toastify";

import { ThemeContext } from "../../context/theme-context";

const Toaster = (): ReactElement => {
    const {theme} = useContext(ThemeContext)

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Bounce}
    /> 
  );
};

export default Toaster;
