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

const Home = () => {
  const [step, setStep] = useState(0);

  const handleclick = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="rounded-2xl bg-white flex flex-col p-8">
        <Container />
        <div className="pt-11 flex text-center justify-center items-center space-x-2">
          <button
            className={`h-11 bg-white border grow rounded-md ${
              step === 0 ? "hidden" : "block"
            } ${step === 3 ? "hidden" : "block"}`}
            onClick={handlePrev}
          >
            Back
          </button>
          <button
            className={`h-11 bg-black border text-white rounded-md grow ${
              step === 3 ? "hidden" : "block"
            }`}
            onClick={handleclick}
          >
            {step === 2 ? `Sumbit ${step + 1} /3 ` : `Continue ${step + 1} / 3`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
