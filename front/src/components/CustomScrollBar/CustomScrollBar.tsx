import { useEffect } from 'react';
import { UseScrollbarProps } from '@components/types';
import { OverlayScrollbars } from 'overlayscrollbars';

import './overlayscrollbars.min.css';
import './custom-scrollbar-theme-primary.css';


const CustomScrollBar = ({
  root,
  children,
  maxHeight,
  primary = 'gray',
}: UseScrollbarProps) => {
  useEffect(() => {
    let scrollbars: OverlayScrollbars | undefined;

    if (root.current) {
      scrollbars = OverlayScrollbars(root.current, {
        scrollbars: {
          theme: `custom-scrollbar-theme-${primary}`,
        },
      });
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    };
  }, [root]);

  return (
    <div
      ref={root as React.MutableRefObject<HTMLDivElement>}
      style={{
        width: '100%',
        height: '100%',
        maxHeight: maxHeight || '100%',
        overflow: 'hidden',
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default CustomScrollBar;
