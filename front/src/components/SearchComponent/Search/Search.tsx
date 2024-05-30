import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import Typography from '@components/components/Typography/Typography';
import { showToast } from '@components/helpers/showToast';
import { ProductDetails } from '@components/types';
import { fetchSearchResults } from '@lib/api-services/fetchSearchResults';
import debounce from 'lodash.debounce';

import Input from '../../Input/Input';
import SearchResult from '../SearchResult/SearchResult';

import styles from './Search.module.scss';

interface SearchProps {
  closeModal?: () => void;
  dict: DictSearchI;
  toastMessage: string;
}

const Search: React.FC<SearchProps> = ({ closeModal, dict, toastMessage }) => {
  const resultWrapperRef = useRef<HTMLDivElement | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ProductDetails[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (value: string) => {
    setSearchQuery(value);
    handleSearch(value);
  };

  const handleSearch = debounce(async searchQuery => {
    if (searchQuery.trim().length < 3) {
      setSearchResults([]);
      return;
    }
    try {
      setIsLoading(true);
      const results = await fetchSearchResults(
        searchQuery.toLowerCase().trim()
      );
      setIsLoading(false);
      setSearchResults(results);
      setShowNoResults(results.length === 0);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showToast(toastMessage, 'error');
    }
  }, 500);

  return (
    <div
      className={`${styles.modalWrapper} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.searchWrapper}>
        <AiOutlineSearch
          style={{ strokeWidth: '2px' }}
          className={styles.searchIcon}
          color="var(--cl-gray-700)"
          onClick={handleSearch}
        />
        <Input
          type="text"
          placeholder={dict.search}
          value={searchQuery}
          onChange={e => handleChange(e.target.value)}
          className={styles.searchInput}
        />
        <AiOutlineClose
          style={{ strokeWidth: '4px' }}
          className={styles.closeIcon}
          color="var(--cl-gray-700)"
          onClick={closeModal}
        />
        {isLoading && (
          <div className={styles.loaderWrapper}>
            <span className={styles.loader}></span>
          </div>
        )}
      </div>

      {showNoResults && (
        <Typography
          variant="bodyS"
          color="var(--cl-gray-400)"
          className={styles.noResults}
        >
          {dict.noResults}
        </Typography>
      )}

      {!showNoResults && searchResults?.length > 0 && (
        <div ref={resultWrapperRef} className={styles.resultWrapper}>
          <SearchResult searchResults={searchResults} />
        </div>
      )}
    </div>
  );
};

export default Search;
