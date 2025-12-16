import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";

export const ContactInfo = () => {
  return (
    <div>
      <Header />

      <Input LabelName={"First name"} placeholderName={"Your first name"} />
      <Input LabelName={"Last name"} placeholderName={"Your last name"} />
      <Input LabelName={"Username"} placeholderName={"Your username"} />
    </div>
  );
};
