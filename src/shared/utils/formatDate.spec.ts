import formatDate from "./formatDate";

describe("formatDate", () => {
  it("returns date formatted in accordance with the designs when date is passed", () => {
    expect(formatDate("2020-10-01")).to.equal("10/01/2020");
  });
});
