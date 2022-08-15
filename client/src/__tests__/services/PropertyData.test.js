import PropertyData from "services/PropertyData";
import property from "helpers/fixtures/property";

test("Expect Properties.fetchPublished() to fetch published properties", async () => {
  const tId = "EB-B5339";
  const response = await PropertyData.fromId(tId);
  expect(response.data).toStrictEqual(property);
});
