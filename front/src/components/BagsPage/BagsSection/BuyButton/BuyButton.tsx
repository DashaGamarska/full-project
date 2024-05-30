'use client';
import Button from '@components/components/Button/Button';
import { useCartActionsContext } from '@context/CartContext';

interface BuyButtonProps {
  product: {
    id: string;
    price: number;
  };
  buyBtn: string;
  toastMessage: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({
  product,
  buyBtn,
  toastMessage,
}) => {
  const { addBoxToCart } = useCartActionsContext();
  const { id, price } = product;
  return (
    <Button
      variant="primary"
      type="button"
      onClick={() =>
        addBoxToCart({
          id,
          toastMessage,
          aroma: 0,
          quantity: 1,
          price,
        })
      }
    >
      {buyBtn}
    </Button>
  );
};

export default BuyButton;
