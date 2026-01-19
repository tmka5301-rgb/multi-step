import { use, useEffect, useRef, useState } from "react";
import {
  ContactInfo,
  PrivateInfo,
  ProfileImage,
  Success,
} from "@/components/steps";
// import { Header } from "@/components/ui/Header";
// import { Input } from "@/components/ui/Input";

import { AnimatePresence } from "framer-motion";

import { retrieveFormValues } from "@/Utils/localstorage";
import { initialValues } from "@/components/constant/initial";

export const Home = () => {
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  const handleBrowserClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUploadImage = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setFormValues((previous) => ({ ...previous, profile: imageUrl }));
  };
  const handleChangeProfile = (event) => {
    const uploadedImage = Array.from(event.target.files).at(0);
    handleUploadImage(uploadedImage);
    setIsDragging(false);
  };

  const clearImage = () => {
    inputRef.current.value = "";
    setImageUrl("");
    setFormValues((previous) => ({ ...previous, profile: "" }));
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedImage = Array.from(event.dataTransfer.files).at(0);
    handleUploadImage(uploadedImage);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);

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
  useEffect(() => {
    const valueFromLocalStorage = retrieveFormValues();
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-sky-200 p-10 rounded-md">
        <Container
          handleChange={handleChange}
          handleClick={handleClick}
          handlePrev={handlePrev}
          step={step}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          isDragging={isDragging}
          imageUrl={imageUrl}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
          inputRef={inputRef}
          clearImage={clearImage}
          handleChangeProfile={handleChangeProfile}
          handleBrowserClick={handleBrowserClick}
        />
      </div>
    </div>
  );
};

export default Home;
