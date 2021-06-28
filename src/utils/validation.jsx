const validationPhone = num => {
  const regexp = /^[0-9]{8}$/;
  return regexp.test(num);
};

const validationEmail = email => {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
};

const validationName = name => {
  const regexp = /^[a-z ,.'-]+$/i;
  return regexp.test(name);
};

const validationPhoto = async url => {
  return new Promise(resolve => {
    const image = new Image();
    image.src = url;

    image.onload = function () {
      resolve(true);
    };
    image.onerror = function () {
      resolve(false)
    };
  });
};

export const validation = async (state, validateParams) => {

  const { name, surname, email, phone, photo } = validateParams;

  const validateObj = {
    name: validationName(name),
    surname: validationName(surname),
    email: validationEmail(email),
    phone: validationPhone(phone),
    photo: await validationPhoto(photo),
  };

  for (let key in validateObj) {
    if(!state[key]) {
      return `Fill ${key} field`;
    } 
    if (!validateObj[key]) {
      return `Use correct ${key} format`;
    }
  }

  return "ok";
}
