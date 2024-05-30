import React, { useRef } from 'react';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';
import { ProductDetails } from '@components/types';
import { useWindowSize } from 'usehooks-ts';

import SearchItem from '../SearchItem/SearchItem';

import styles from './SearchResult.module.scss';

export interface SearchResultProps {
  searchResults: ProductDetails[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResults }) => {
  const SearchWrapper = useRef<HTMLDivElement | null>(null);

  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;
  const maxResultHeight = isLargeScreen ? '385px' : '240px';

  return (
    <div className={styles.customScrollbar}>
      <CustomScrollBar
        root={SearchWrapper}
        maxHeight={maxResultHeight}
        primary="primary-12"
      >
        <ul
          className={`${styles.searchList} ${
            searchResults.length >= 6 ? styles.large : ''
          }`}
        >
          {searchResults.map(result => (
            <SearchItem key={result.id} result={result} />
          ))}
        </ul>
      </CustomScrollBar>
    </div>
  );
};

export default SearchResult;
