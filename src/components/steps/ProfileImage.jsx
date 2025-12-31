import React from "react";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { Input } from "../ui/Input";
import { Button } from "../Button";
import { validateStepThree } from "@/Utils/validators";

export const ProfileImage = ({
  step,
  handleClick,
  handlePrev,
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  errors,
}) => {
  const handleSubmitThree = () => {
    const { errors, isValid } = validateStepThree(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
  };
  return (
    <div>
      <Header />
      <Input
        LabelName={"Date of Birth"}
        type="date"
        min="1970-01-01"
        max="Date.now"
        onChange={handleChange}
        errors={formErrors}
      />
      <Input
        type="file"
        hidden={true}
        LabelName={"Profile image"}
        placeholderName={"Confirm password "}
      />
      <div className="flex flex-col text-center justify-center items-center w-104 h-45 bg-gray-200 rounded-md ">
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center flex ">
          <img className=" w-3 h-3 " src="./add.png" alt="" />
        </div>
        <p className="pt-2">Add image</p>
      </div>
      <Button
        step={step}
        handleClick={handleSubmitThree}
        handlePrev={handlePrev}
      />
    </div>
  );
};
