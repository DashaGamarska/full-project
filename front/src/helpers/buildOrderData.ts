import { buildOrderDataI } from '@components/types';

export const buildOrderData = ({ dataForm, cartProducts, cartTotalPrice}: buildOrderDataI) => {
  const {
    deliveryArea,
    deliveryCity,
    email,
    firstName,
    lastName,
    notes,
    phone,
    postOfficeBranchNum,
    payment,
    delivery,
  } = dataForm;

  const { decorations, embroidery } = cartProducts;

  const items = [
    ...decorations.map(({id, quantity, price}) => ({id, quantity, price, category: 'decorations'})),
    ...embroidery.map(({id, quantity, price}) => ({id, quantity, price, category: 'embroidery'}))
  ]

  const objectOrder = {
    // id: null,
    customer: {
      firstName,
      lastName,
      phone: `+380${phone}`,
      email,
      address: `${deliveryArea.value} обл., ${deliveryCity.value}, ${postOfficeBranchNum.value}`,
      comment: notes,
      payment,
      delivery,
    },
    items,
    total: cartTotalPrice,
    payed: false,
    date: new Date(),
  };
  return objectOrder;
};
