import { CheckoutFormValidation } from '@components/types';
import { object, string } from 'yup';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

type EmailValidationData = Pick<
  CheckoutFormValidation,
  'emailReq' | 'validEmail'
>;

const emailValidationSchema = (data: EmailValidationData) => {
  const { emailReq, validEmail } = data;
  return object().shape({
    email: string()
      .trim()
      .required(`${emailReq}`)
      .matches(emailRegex, `${validEmail}`),
  });
};

export default emailValidationSchema;
