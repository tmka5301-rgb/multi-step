import React from "react";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { Input } from "../ui/Input";
import { Button } from "../Button";
import { validateStepTwo } from "@/Utils/validators";

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
  };
  return (
    <div>
      <Header />
      <Input
        onChange={handleChange}
        errors={formErrors}
        name="email"
        LabelName={"Email"}
        placeholderName={"Your email"}
      />
      <Input
        onChange={handleChange}
        errors={formErrors}
        LabelName={"Phone number"}
        placeholderName={"Your number"}
        name="phoneNumber"
      />
      <Input
        onChange={handleChange}
        errors={formErrors}
        LabelName={"Password"}
        placeholderName={"Your password"}
        name="password"
      />
      <Input
        onChange={handleChange}
        errors={formErrors}
        LabelName={"Confirm password"}
        placeholderName={"Confirm password "}
        name="confirmPassword"
      />
      <Button
        step={step}
        handleClick={handleSubmitTwo}
        handlePrev={handlePrev}
      />
    </div>
  );
};
