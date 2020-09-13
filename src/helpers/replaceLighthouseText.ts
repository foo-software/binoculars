export default (text: string): string => {
  let updatedText = text;
  if (updatedText.includes('Lighthouse')) {
    updatedText = updatedText.replace(
      new RegExp('Lighthouse', 'g'),
      'Binoculars',
    );
  }
  return updatedText;
};
