import ContentLoader from 'react-content-loader';

const CartListTabSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={619}
      height={218}
      viewBox="0 0 619 218"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="143" height="143" />
      <rect x="159" y="0" rx="2" ry="2" width="150" height="16" />
      <rect x="159" y="30" rx="2" ry="2" width="200" height="16" />
      <rect x="159" y="60" rx="10" ry="10" width="100" height="25" />
      <rect x="159" y="130" rx="20" ry="20" width="106" height="30" />
      <rect x="300" y="140" rx="2" ry="2" width="70" height="16" />
    </ContentLoader>
  );
};

export default CartListTabSkeleton;
