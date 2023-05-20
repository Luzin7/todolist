const formatDate = (date) => {
  const opt = { dateStyle: 'short', timeStyle: 'short' };
  const formatedDate = new Date(date).toLocaleDateString(opt);
  return formatedDate;
};

export default formatDate;
