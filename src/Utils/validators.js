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
  } else if (!isEmail(formValues.email)) {
    errors.email = "Зөв Email-ээ оруулна уу!";
  }

  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "Дугаараа оруулна уу!";
  } else if (!isPhoneNumber(formValues.phoneNumber)) {
    errors.phoneNumber = "8 оронтой дугаар оруулна уу!";
  }

  if (isEmpty(formValues.password)) {
    errors.password = "Нууц үгээ оруулна уу!";
  } else if (formValues.password.length < 6) {
    errors.password = "6-аас дээш тэмдэгт оруулна уу!";
  }

  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword = "Нууц үгээ давтан оруулна уу!";
  } else if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Нууц үг таарахгүй байна!";
  }

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

export const validateStepThree = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.birthDay)) {
    errors.birthDay = "Төрсөн өдөрөө оруулна уу!";
  } else {
    const birthDate = new Date(formValues.birthDay);
    const today = new Date();

    // 18 насны огноо тооцоолох
    const age18Date = new Date(
      birthDate.getFullYear() + 18,
      birthDate.getMonth(),
      birthDate.getDate(),
    );

    if (birthDate > today) {
      errors.birthDay = "Өнөөдрөөс их байж болохгүй!";
    } else if (age18Date > today) {
      errors.birthDay = "18 насанд хүрсэн байх ёстой!";
    }
  }

  if (!formValues.profile) {
    errors.profile = "Зурагаа оруулна уу!";
  }

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};
export const validateStepSuccess = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.birthDay)) {
    errors.firstName = "Нэрээ оруулна уу!";
  }
  if (isEmpty(formValues.profile)) {
    errors.lastName = "Zuraga oruul";
  }
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};
