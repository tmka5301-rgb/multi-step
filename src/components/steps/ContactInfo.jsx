import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import { validateStepOne } from "@/Utils/validators";
import { Button } from "../Button";
import { ErrorMessage } from "../ui/ErrorMessage";

export const ContactInfo = ({
  step,
  handleClick,
  handlePrev,
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  errors,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
  };

  return (
    <div>
      <Header />

      <div>
        <Input
          onChange={handleChange}
          errors={formErrors}
          LabelName={"First name"}
          placeholderName={"Your first name"}
          name="firstName"
        />
        <Input
          onChange={handleChange}
          errors={formErrors}
          LabelName={"Last name"}
          placeholderName={"Your last name"}
          name="lastName"
        />
        <Input
          onChange={handleChange}
          errors={formErrors}
          LabelName={"Username"}
          placeholderName={"Your username"}
          name="userName"
        />
      </div>
      <Button step={step} handleClick={handleSubmit} handlePrev={handlePrev} />
    </div>
  );
};
