import { useState } from "react";
import "./PasswordEntryForm.css";

const PasswordEntryForm = ({ onSuccessfulSubmit }) => {
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const checkPasswordValidity = (formEl) => {
      const passwordEl = formEl.password[0];
      const confirmPasswordEl = formEl.password[formEl.password.length - 1];

      // Check if passwords match
      if (password !== confirmPassword) {
         confirmPasswordEl.setCustomValidity("Passwords do not match.");
         formEl.reportValidity();
         return false;
      }

      // Check if password meets the requirements. This Regex can be added as pattern attribute on the password input.
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={[}\]|:;"'<,>.]).{6,}$/;
      if (!passwordRegex.test(password)) {
         passwordEl.setCustomValidity(
            "Password must contain at least 1 uppercase character, 1 lowercase character, 1 number, and 1 special character, and be at least 6 characters long."
         );
         formEl.reportValidity();
         return false;
      }

      return true;
   };

   const handlePasswordChange = (e) => {
      emptyCustomValidity(e.target.form);
      setPassword(e.target.value);
   };

   const handleConfirmPasswordChange = (e) => {
      emptyCustomValidity(e.target.form);
      setConfirmPassword(e.target.value);
   };

   const emptyCustomValidity = (formEl) => {
      const inputs = formEl.password;
      inputs.forEach((input) => input.validity.customError && input.setCustomValidity(""));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (checkPasswordValidity(e.target)) {
         resetForm();
         onSuccessfulSubmit();
      }
   };

   const resetForm = () => {
      setPassword("");
      setConfirmPassword("");
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="form-item">
               <label htmlFor="password">Password</label>
               <input
                  id="password"
                  type="password"
                  name="password"
                  minLength={6}
                  value={password}
                  placeholder="Please enter new password"
                  onChange={handlePasswordChange}
                  title="Password must contain at least 1 uppercase character, 1 lowercase character, 1 number, and 1 special character, and be at least 6 characters long."
                  autoComplete="new-password"
                  required
               />
            </div>
            <div className="form-item">
               <label htmlFor="confirm-password">Confirm Password</label>
               <input
                  id="confirm-password"
                  type="password"
                  name="password"
                  value={confirmPassword}
                  placeholder="Please confirm new password"
                  onChange={handleConfirmPasswordChange}
                  autoComplete="new-password"
                  required
               />
            </div>
            <button type="submit">Submit</button>
         </form>
      </>
   );
};

export default PasswordEntryForm;
