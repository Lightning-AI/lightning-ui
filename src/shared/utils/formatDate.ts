const formatDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" });

export default formatDate;
