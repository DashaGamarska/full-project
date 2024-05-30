import { handleErrorWithMessage } from '@components/helpers/handleErrorWithMessage';

export const fetchSearchResults = async (query: string | undefined) => {
  try {
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    handleErrorWithMessage(error);
  }
};
