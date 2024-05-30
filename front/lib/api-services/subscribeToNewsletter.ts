export const subscribeToNewsletter = async (email: string) => {
  const response = await fetch(`/api/subscription?email=${email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
  });

  if (response.status === 400) throw new Error('Already subscribed!');

  if (!response.ok) {
    throw new Error('Something went wrong...😥 Please try again!');
  }
};
