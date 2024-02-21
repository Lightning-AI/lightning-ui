const formatDate = (date: Date | null | undefined, emptyDateStr = "--") => {
  return !date
    ? emptyDateStr
    : date.toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" });
};

export default formatDate;
