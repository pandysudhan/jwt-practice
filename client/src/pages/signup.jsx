
import { useState } from "react";
import FormFields from "../components/loginComponents/formFields";
import FormHeader from "../components/loginComponents/formHeader";
import FormSubmissionArea from "../components/loginComponents/formSubmissionArea";


const signupFields = [
  {
    labelText: "Name",
    labelFor: "name",
    id: "name",
    name: "name",
    type: "text",
    autoComplete: "name",
    isRequired: true,
    placeholder: "Name",
  },
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

let fieldState = {};
signupFields.forEach((field) => (fieldState[field.id] = ""));

function SignUp() {
  const [signupState, setSignupState] = useState(fieldState);
  function handleSignUpSubmit() {
    console.log("signup details");
    console.log(signupState)
  }

  const handleSignUpChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <FormHeader formType="SignUp" alternateUrl="/login"></FormHeader>
      <FormFields formTypeState = {signupState} fields={signupFields} handleChange={handleSignUpChange}></FormFields>
      <FormSubmissionArea
        formType="SignUp"
        handleSubmit={handleSignUpSubmit}
      ></FormSubmissionArea>
    </div>
  );
}

export default SignUp;
