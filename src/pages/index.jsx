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
        {/* <button onClick={handlePrev}>Prev</button>
        <button onClick={handleclick}>Conti</button> */}
      </div>
    </div>
  );
};

export default Home;
