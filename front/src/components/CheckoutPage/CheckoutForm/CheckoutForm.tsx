'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Button from '@components/components/Button/Button';
import Input from '@components/components/Input/Input';
import { buildOrderData } from '@components/helpers/buildOrderData';
import validationSchema from '@components/helpers/formValidationSchema';
import { showToast } from '@components/helpers/showToast';
import { useLangFromPathname, useStatusState } from '@components/hooks';
import { CheckoutFormProps, CheckoutFormValues } from '@components/types';
import { useCartActionsContext, useCartContext } from '@context/CartContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendOrder } from '@lib/api-services/fetchOrder';

import DeliveryForm from './DeliveryForm/DeliveryForm';

import styles from './CheckoutForm.module.scss';

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  dict,
  dictParam,
  toastDict: { failedRequest },
}) => {
  const {
    contactFormTitle,
    firstName,
    lastName,
    email,
    phoneNumber,
    buttonText,
    errorMessages,
  } = dict;

  const { cartTotalPrice, cartProducts } = useCartContext();
  const { clearCartProducts } = useCartActionsContext();
  const router = useRouter();
  const lang = useLangFromPathname();

  const formControl = useForm<CheckoutFormValues>({
    mode: 'onBlur',
    defaultValues: {},
    resolver: yupResolver(validationSchema(errorMessages)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = formControl;

  const { state, handleStatus } = useStatusState({
    isLoading: false,
    hasError: false,
  });

  const onSubmit = async (dataForm: CheckoutFormValues) => {
    const newOrder = buildOrderData({
      dataForm,
      cartProducts,
      cartTotalPrice,
      dictParam
    });

    try {
      handleStatus('isLoading', true);
      await sendOrder(newOrder, lang);
      clearCartProducts();
      router.push(`/${lang}/success-order`);
    } catch (e) {
      handleStatus('hasError', true);
      console.error(e);
      showToast(failedRequest, 'error');
    } finally {
      handleStatus('isLoading', false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.form__group}>
        <legend className={styles.group__title}>{contactFormTitle}</legend>
        <div className={styles.contactInfo__wrapper}>
          <Input
            label={`${firstName} *`}
            placeholder={firstName}
            id="user_firstName"
            required
            errorMessage={errors.firstName?.message}
            error={errors.firstName}
            {...register('firstName')}
          />
          <Input
            label={`${lastName} *`}
            placeholder={lastName}
            id="user_lastName"
            required
            errorMessage={errors.lastName?.message}
            error={errors.lastName}
            {...register('lastName')}
          />
          <Input
            label={`${email} *`}
            type="email"
            placeholder={email}
            id="user_email"
            required
            errorMessage={errors.email?.message}
            error={errors.email}
            {...register('email')}
          />

          <Input
            isPhone
            label={phoneNumber}
            type="tel"
            placeholder="93-000-00-00"
            id="phone"
            errorMessage={errors.phone?.message}
            error={errors.phone}
            {...register('phone')}
          />
        </div>
      </fieldset>

      <DeliveryForm dict={dict} formControl={formControl} />
      <Button
        variant="primary"
        type="submit"
        className={styles.button}
        disabled={!!errors?.email || state.isLoading}
        isLoading={state.isLoading}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default CheckoutForm;
