import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import { validateStepOne } from "@/Utils/validators";
import { Button } from "../Button";
import { saveFormValues } from "@/Utils/localstorage";

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
    console.log(isValid);
    if (isValid) {
      handleClick();
    }
    saveFormValues(formValues, step);
  };

  return (
    <div className="flex flex-col justify-between p-8 bg-white rounded-lg">
      <Header />

      <div>
        <Input
          onChange={handleChange}
          errors={formErrors}
          LabelName={"First name"}
          placeholderName={"Your first name"}
          name="firstName"
          value={formValues.firstName}
        />
        <Input
          onChange={handleChange}
          errors={formErrors}
          LabelName={"Last name"}
          placeholderName={"Your last name"}
          name="lastName"
          value={formValues.lastName}
        />
        <Input
          onChange={handleChange}
          errors={formErrors}
          LabelName={"Username"}
          placeholderName={"Your username"}
          name="userName"
          value={formValues.userName}
        />
      </div>
      <Button step={step} handleClick={handleSubmit} handlePrev={handlePrev} />
    </div>
  );
};
