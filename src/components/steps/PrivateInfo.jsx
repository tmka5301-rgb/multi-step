import React from "react";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { Input } from "../ui/Input";
import { Button } from "../Button";
import { validateStepTwo } from "@/Utils/validators";
import { saveFormValues } from "@/Utils/localstorage";

export const PrivateInfo = ({
  step,
  handleClick,
  handlePrev,
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  errors,
}) => {
  const handleSubmitTwo = () => {
    const { errors, isValid } = validateStepTwo(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
    saveFormValues(formValues, step);
  };
  return (
    <div className="flex flex-col justify-between p-8 bg-white rounded-lg">
      <Header />
      <Input
        type="text"
        onChange={handleChange}
        errors={formErrors}
        name="email"
        LabelName={"Email"}
        placeholderName={"Your email"}
        value={formValues.email}
      />
      <Input
        onChange={handleChange}
        errors={formErrors}
        LabelName={"Phone number"}
        placeholderName={"Your number"}
        name="phoneNumber"
        value={formValues.phoneNumber}
      />
      <Input
        type="password"
        onChange={handleChange}
        errors={formErrors}
        LabelName={"Password"}
        placeholderName={"Your password"}
        name="password"
        value={formValues.password}
      />
      <Input
        type="password"
        onChange={handleChange}
        errors={formErrors}
        LabelName={"Confirm password"}
        placeholderName={"Confirm password "}
        name="confirmPassword"
        value={formValues.confirmPassword}
      />
      <Button
        step={step}
        handleClick={handleSubmitTwo}
        handlePrev={handlePrev}
      />
    </div>
  );
};
