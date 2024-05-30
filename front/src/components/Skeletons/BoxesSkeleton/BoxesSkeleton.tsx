'use client';
import { useWindowSize } from 'usehooks-ts';

import {
  BoxesDeskLargeSkeleton,
  ReversedBoxesDeskLargeSkeleton,
} from './BoxesDeskLargeSkeleton';
import {
  BoxesDeskSkeleton,
  ReversedBoxesDeskSkeleton,
} from './BoxesDeskSkeleton';
import BoxesMobSkeleton from './BoxesMobSkeleton';
import BoxesTabLargeSkeleton from './BoxesTabLargeSkeleton';
import BoxesTabSmallSkeleton from './BoxesTabSmallSkeleton';

import styles from './BoxesSkeleton.module.scss';

const BoxesSkeleton = () => {
  const { width } = useWindowSize();
  const mob = width < 667;
  const smallTab = width >= 667 && width < 768;
  const largeTab = width >= 768 && width < 1024;
  const desk = width >= 1024 && width < 1230;
  const largeDesk = width >= 1230;
  const isDesktop = width >= 1024;

  return (
    <ul className={styles.wrapper}>
      {!isDesktop ? (
        [...Array(4)].map((_, index) => (
          <li key={index}>
            {mob && <BoxesMobSkeleton />}
            {smallTab && <BoxesTabSmallSkeleton />}
            {largeTab && <BoxesTabLargeSkeleton />}
          </li>
        ))
      ) : (
        <>
          {desk && (
            <>
              <li>
                <BoxesDeskSkeleton />
              </li>
              <li>
                <ReversedBoxesDeskSkeleton />
              </li>
              <li>
                <BoxesDeskSkeleton />
              </li>
              <li>
                <ReversedBoxesDeskSkeleton />
              </li>
            </>
          )}
          {largeDesk && (
            <>
              <li>
                <BoxesDeskLargeSkeleton />
              </li>
              <li>
                <ReversedBoxesDeskLargeSkeleton />
              </li>
              <li>
                <BoxesDeskLargeSkeleton />
              </li>
              <li>
                <ReversedBoxesDeskLargeSkeleton />
              </li>
            </>
          )}
        </>
      )}
    </ul>
  );
};

export default BoxesSkeleton;
