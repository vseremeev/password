import { useEffect, useRef } from "react";
import "./SuccessDialog.css";

const SuccessDialog = ({ message, open, onSubmit }) => {
   const dialog = useRef();

   useEffect(() => {
      if (open) {
         dialog.current.showModal();
      }
   }, [open]);

   const handleSubmit = () => {
      onSubmit();
   };

   return (
      <dialog ref={dialog}>
         <h1>{message}</h1>
         <form method="dialog" onSubmit={handleSubmit}>
            <button>Ok</button>
         </form>
      </dialog>
   );
};

export default SuccessDialog;
