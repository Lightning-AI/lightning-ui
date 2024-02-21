import formatDate from "./formatDate";

describe("formatDate", () => {
  it("returns -- when date is undefined or null", () => {
    expect(formatDate(undefined)).to.equal("--");
    expect(formatDate(null)).to.equal("--");
  });
  it("returns date formatted in accordance with the designs when date is passed", () => {
    expect(formatDate(new Date("2020-10-01"))).to.equal("10/01/2020");
  });
});
