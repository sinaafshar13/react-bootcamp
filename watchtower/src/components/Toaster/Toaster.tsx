import { ReactElement, useContext } from "react";

import { Bounce, ToastContainer, ToastContainerProps } from "react-toastify";

import { ThemeContext } from "../../context/theme-context";

type Props = Partial<ToastContainerProps>;

const Toaster = (props: Props): ReactElement => {
  const { theme } = useContext(ThemeContext);

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
      {...props}
    />
  );
};

export default Toaster;
