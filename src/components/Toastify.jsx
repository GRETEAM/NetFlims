import { ToastContainer } from "react-toastify";

const Toastify = () => {
  return (
      <div className="container">
        <ToastContainer autoClose={2000} hideProgressBar pauseOnHover role="alert" />
      </div>
  )
};
 
export default Toastify;
