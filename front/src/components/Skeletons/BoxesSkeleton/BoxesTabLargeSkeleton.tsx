import React from 'react';
import ContentLoader from 'react-content-loader';

const BoxesTabLargeSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={720}
      height={794}
      viewBox="0 0 720 794"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="720" height="354" />
      <rect x="0" y="374" rx="2" ry="2" width="245" height="52" />
      <rect x="0" y="436" rx="2" ry="2" width="720" height="20" />
      <rect x="0" y="466" rx="2" ry="2" width="720" height="20" />
      <rect x="0" y="496" rx="2" ry="2" width="720" height="20" />
      <rect x="0" y="526" rx="2" ry="2" width="720" height="20" />
      <rect x="0" y="556" rx="2" ry="2" width="720" height="20" />
      <rect x="0" y="586" rx="2" ry="2" width="720" height="20" />
      <rect x="0" y="616" rx="2" ry="2" width="720" height="20" />
      {/* <rect x="0" y="436" rx="0" ry="0" width="720" height="204" /> */}
      <rect x="0" y="660" rx="2" ry="2" width="161" height="54" />
      <rect x="0" y="734" rx="20" ry="20" width="137" height="60" />
      <rect x="183" y="734" rx="20" ry="20" width="192" height="60" />
    </ContentLoader>
  );
};

export default BoxesTabLargeSkeleton;
