import { saveFormValues } from "@/Utils/localstorage";
import { validateStepThree } from "@/Utils/validators";
import { Button } from "../Button";
import { Header } from "../ui/Header";
import { Input } from "../ui/Input";

export const ProfileImage = ({
  step,
  handleClick,
  handlePrev,
  handleChange,
  handleChangeProfile,
  formValues,
  formErrors,
  isDragging,
  inputRef,
  handleBrowserClick,
  handleDrop,
  handleDragOver,
  handleDragLeave,
  clearImage,
  setFormErrors,
}) => {
  const handleSubmitThree = () => {
    const { errors, isValid } = validateStepThree(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
    saveFormValues(formValues, step);
  };
  console.log(formValues.profile);
  return (
    <div className="flex flex-col justify-between p-8 bg-white rounded-lg">
      <Header />
      <div className="pt-7 flex flex-col ">
        <Input
          type="date"
          name="birthDay"
          LabelValue={"Date of birth"}
          onChange={handleChange}
          errors={formErrors}
          value={formValues.birthDay}
        />
        <input
          type="file"
          name="profile"
          // la={"Profile image"}
          hidden
          errors={formErrors}
          onChange={handleChangeProfile}
          ref={inputRef}
        />

        <button
          onClick={clearImage}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          x
        </button>
        <div
          onDrop={handleDrop}
          errors={formErrors}
          onChange={handleChange}
          onDragOver={handleDragOver}
          onClick={handleBrowserClick}
          onDragLeave={handleDragLeave}
          style={{
            width: 416,
            height: 180,
            borderRadius: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 14,
            rowGap: 4,
            backgroundColor: "#7F7F800D",
            border: isDragging ? "1px solid black" : "1px solid transparent",
            position: "relative",
          }}
        >
          <div className="flex justify-center items-center rounded-full w-7 h-7 bg-white">
            <img src="/Pinecone.png" alt="" className="w-3 h-3" />
          </div>
          <div>Browse or drop image</div>{" "}
          {formValues.profile && (
            <img
              src={formValues.profile}
              value={formValues.profile}
              alt="image"
              style={{
                width: 416,
                height: 180,
                objectFit: "cover",
                position: "absolute",
              }}
            />
          )}
        </div>
      </div>
      <Button
        step={step}
        handleClick={handleSubmitThree}
        handlePrev={handlePrev}
      />
    </div>
  );
};
