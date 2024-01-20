
import { useState } from "react";
import FormFields from "../components/loginComponents/formFields";
import FormHeader from "../components/loginComponents/formHeader";
import FormSubmissionArea from "../components/loginComponents/formSubmissionArea";

const loginFields = [
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
];
let fieldState = {};
loginFields.forEach((field) => (fieldState[field.id] = ""));

function Login() {
  const [loginState, setLoginState] = useState(fieldState);
  function handleLoginSubmit() {
    console.log("login details");
    console.log(loginState)
    
  }

  const handleLoginChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <FormHeader formType="Login" alternateUrl="/signup"></FormHeader>
      <FormFields
        formTypeState={loginState}
        fields={loginFields}
        handleChange={handleLoginChange}
      ></FormFields>
      <FormSubmissionArea
        formType="Login"
        handleSubmit={handleLoginSubmit}
      ></FormSubmissionArea>
    </div>
  );
}

export default Login;
