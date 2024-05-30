import ContentLoader from 'react-content-loader';

const CartListDeskSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={480}
      height={218}
      viewBox="0 0 480 218"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="107" height="107" />
      <rect x="123" y="0" rx="2" ry="2" width="150" height="16" />
      <rect x="380" y="0" rx="10" ry="10" width="100" height="25" />
      <rect x="123" y="30" rx="2" ry="2" width="200" height="16" />
      <rect x="123" y="60" rx="2" ry="2" width="200" height="16" />
      <rect x="123" y="100" rx="20" ry="20" width="106" height="44" />
      <rect x="300" y="120" rx="2" ry="2" width="70" height="16" />
    </ContentLoader>
  );
};

export default CartListDeskSkeleton;
