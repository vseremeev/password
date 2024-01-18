import { useState } from "react";
import PasswordEntryForm from "components/PasswordEntryFrom/PasswordEntryForm";
import SuccessDialog from "components/SuccessDialog/SuccessDialog";
import "./PasswordEntry.css";

const PasswordEntry = () => {
   const [showDialog, setShowDialog] = useState(false);

   const handleSuccessfulPasswordSubmit = () => {
      setShowDialog(true);
   };

   const handleDialogSubmit = () => {
      setShowDialog(false);
   };

   return (
      <>
         <PasswordEntryForm onSuccessfulSubmit={handleSuccessfulPasswordSubmit} />
         <SuccessDialog message="Successful password entry!" open={showDialog} onSubmit={handleDialogSubmit} />
      </>
   );
};

export default PasswordEntry;
