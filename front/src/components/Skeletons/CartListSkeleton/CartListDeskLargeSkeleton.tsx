import ContentLoader from 'react-content-loader';

const CartListDeskLargeSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={588}
      height={178}
      viewBox="0 0 588 178"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="78" height="78" />
      <rect x="102" y="0" rx="2" ry="2" width="150" height="16" />
      <rect x="488" y="0" rx="5" ry="5" width="100" height="25" />
      <rect x="102" y="30" rx="2" ry="2" width="200" height="16" />
      <rect x="102" y="65" rx="20" ry="20" width="106" height="30" />
      <rect x="510" y="75" rx="2" ry="2" width="70" height="16" />
    </ContentLoader>
  );
};

export default CartListDeskLargeSkeleton;
