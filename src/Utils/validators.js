import { isEmail, isEmpty, isPhoneNumber } from "./validation-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Нэрээ оруулна уу!";
  }
  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Овогоо оруулна уу!";
  }
  if (isEmpty(formValues.userName)) {
    errors.userName = "Хэрэглэгчийн Нэрээ оруулна уу!";
  }
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.email)) {
    errors.email = "Email-ээ оруулна уу!";
  } else {
    if (!isEmail(formValues.email)) {
      errors.email = "zuv Email-ээ оруулна уу!";
    }
  }
  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "Дугаараа оруулна уу!";
  } else {
    if (!isPhoneNumber(formValues.phoneNumber)) {
      errors.phoneNumber = "8 orontoi dugaar оруулна уу!";
    }
  }
  if (isEmpty(formValues.password)) {
    errors.password = "Нууц үгээ оруулна уу!";
  }
  if (formValues.password.length < "6") {
    errors.password = "6orontoi too oruulna uu!";
  } else {
    formValues.password;
  }
  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword = "Нууц үгээ оруулна уу!";
  }
  if (formValues.confirmPassword !== formValues.confirmPassword) {
    errors.confirmPassword = "Нууц үг taarahgui bn!";
  } else {
    formValues.confirmPassword;
  }
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

export const validateStepThree = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.birthDay)) {
    errors.birthDay = "Төрсөн өдөрөө оруулна уу!";
  } else if (formValues.birthDay > new Date()) {
    errors.birthDay = "odoogos ih bhgu!";
  } else if (formValues.birthDay) {
  }
  if (isEmpty(formValues.profile)) {
    errors.profile = "Зурагаа оруулна уу!";
  }

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};
