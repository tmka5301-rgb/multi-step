import { isEmail, isEmpty, isPhoneNumber } from "./validation-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Нэрээ оруулна уу!";
  }
  if (isEmpty(formValues.lastName)) {
    errors.firstName = "Овогоо оруулна уу!";
  }
  if (isEmpty(formValues.userName)) {
    errors.firstName = "Хэрэглэгчийн Нэрээ оруулна уу!";
  }
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

export const validateStepTwo = (formValues) => {
  const errors2 = {};

  if (isEmpty(formValues.email)) {
    errors.firstName = "Email-ээ оруулна уу!";
  }
  if (isEmpty(formValues.phoneNumber)) {
    errors.firstName = "Дугаараа оруулна уу!";
  }
  if (isEmpty(formValues.password)) {
    errors.firstName = "Нууц үгээ оруулна уу!";
  }
  if (isEmpty(formValues.confirmPassword)) {
    errors.firstName = "Нууц үгээ давтаж оруулна уу!";
  }
  const isValid2 = Object.keys(errors2).length === 0;
  return { errors, isValid };
};

export const validateStepThree = (formValues) => {
  const errors3 = {};

  if (isEmpty(formValues.birthday)) {
    errors.firstName = "Төрсөн өдөрөө оруулна уу!";
  }
  if (isEmpty(formValues.profileImage)) {
    errors.firstName = "Зурагаа оруулна уу!";
  }

  const isValid3 = Object.keys(errors3).length === 0;
  return { errors, isValid };
};
