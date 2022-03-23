const formatDate = (isoDate: string) =>
  new Date(isoDate)
    .toLocaleDateString("en-US");

export default formatDate;
