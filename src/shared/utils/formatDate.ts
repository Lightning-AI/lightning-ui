const formatDate = (date: Date | undefined) => {
  if (typeof date === "undefined") return "--";
  return date.toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" });
};

export default formatDate;
