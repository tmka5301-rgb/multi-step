import React from "react";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { Input } from "../ui/Input";

export const PrivateInfo = () => {
  return (
    <div>
      <Header />
      <Input LabelName={"Email"} placeholderName={"Your email"} />
      <Input LabelName={"Phone number"} placeholderName={"Your number"} />
      <Input LabelName={"Password"} placeholderName={"Your password"} />
      <Input
        LabelName={"Confirm password"}
        placeholderName={"Confirm password "}
      />
    </div>
  );
};
