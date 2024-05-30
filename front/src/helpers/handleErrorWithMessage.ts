import { extractErrorMessage } from './extractErrorMessage';

export const handleErrorWithMessage = (error: unknown): void => {
  const errorMessage = extractErrorMessage(error);
  throw { error: errorMessage }; // Re-throw the error with the extracted message
};
