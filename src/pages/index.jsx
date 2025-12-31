import { useState } from "react";
import {
  ContactInfo,
  PrivateInfo,
  ProfileImage,
  Success,
} from "@/components/steps";
import { Header } from "@/components/ui/Header";
import { Input } from "@/components/ui/Input";
import { Footer } from "@/components/ui/Footer";
import { initialValues } from "@/components/constant/initial";

export const Home = () => {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  const handleClick = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormErrors((previous) => ({ ...previous, [name]: "" }));
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };
  const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="rounded-2xl bg-white flex flex-col p-8">
        <Container
          handleChange={handleChange}
          handleClick={handleClick}
          handlePrev={handlePrev}
          step={step}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
        />
      </div>
    </div>
  );
};

export default Home;
