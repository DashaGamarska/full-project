import ContentLoader from 'react-content-loader';

export const BoxesDeskSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={976}
      height={512}
      viewBox="0 0 976 512"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="480" height="480" />
      <rect x="498" y="0" rx="2" ry="2" width="245" height="40" />
      <rect x="498" y="54" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="84" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="114" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="144" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="174" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="204" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="234" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="264" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="294" rx="2" ry="2" width="476" height="20" />
      <rect x="498" y="324" rx="2" ry="2" width="476" height="20" />
      {/* <rect x="498" y="54" rx="2" ry="2" width="476" height="306" /> */}
      <rect x="498" y="378" rx="2" ry="2" width="161" height="54" />
      <rect x="498" y="452" rx="20" ry="20" width="137" height="60" />
      <rect x="657" y="452" rx="20" ry="20" width="192" height="60" />
    </ContentLoader>
  );
};

export const ReversedBoxesDeskSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={976}
      height={512}
      viewBox="0 0 976 512"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="494" y="0" rx="20" ry="20" width="480" height="480" />
      <rect x="0" y="0" rx="2" ry="2" width="245" height="40" />
      <rect x="0" y="54" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="84" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="114" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="144" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="174" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="204" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="234" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="264" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="294" rx="2" ry="2" width="476" height="20" />
      <rect x="0" y="324" rx="2" ry="2" width="476" height="20" />
      {/* <rect x="0" y="54" rx="0" ry="0" width="476" height="306" /> */}
      <rect x="0" y="378" rx="2" ry="2" width="161" height="54" />
      <rect x="0" y="452" rx="20" ry="20" width="137" height="60" />
      <rect x="159" y="452" rx="20" ry="20" width="192" height="60" />
    </ContentLoader>
  );
};
