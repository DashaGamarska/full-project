import React from 'react';
import ContentLoader from 'react-content-loader';

const BoxesMobSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={326}
      height={570}
      viewBox="0 0 326 570"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="326" height="185" />
      <rect x="0" y="195" rx="2" ry="2" width="164" height="34" />
      <rect x="0" y="239" rx="2" ry="2" width="327" height="20" />
      <rect x="0" y="269" rx="2" ry="2" width="327" height="20" />
      <rect x="0" y="299" rx="2" ry="2" width="327" height="20" />
      <rect x="0" y="329" rx="2" ry="2" width="327" height="20" />
      <rect x="0" y="359" rx="2" ry="2" width="327" height="20" />
      <rect x="0" y="389" rx="2" ry="2" width="327" height="20" />
      <rect x="0" y="419" rx="2" ry="2" width="327" height="20" />
      {/* <rect x="0" y="239" rx="0" ry="0" width="327" height="192" /> */}
      <rect x="0" y="451" rx="2" ry="2" width="118" height="39" />
      <rect x="0" y="510" rx="20" ry="20" width="137" height="60" />
      <rect x="159" y="510" rx="20" ry="20" width="168" height="60" />
    </ContentLoader>
  );
};

export default BoxesMobSkeleton;
