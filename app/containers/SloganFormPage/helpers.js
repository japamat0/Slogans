export const statusCheck = (error, sending, addedSlogan, slogan) => {
  let message = 'No Slogans Added Yet';
  if (sending) message = 'Hold on a sec...';
  if (addedSlogan) message = `${addedSlogan} has been successfully added.`;
  if (error) {
    if (error.message === 'Bad Request') {
      message = slogan.length
        ? 'Slogan must be less than 75 characters'
        : 'Please enter a slogan!';
    } else {
      message = 'Oops, something went wrong 😵';
    }
  }
  return message;
};
