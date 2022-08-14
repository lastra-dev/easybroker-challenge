import Property from "services/Property";
import property from "helpers/fixtures/property";

test("Expect Properties.fetchPublished() to fetch published properties", async () => {
  const tId = "EB-B5339";
  expect(await Property.fromId(tId)).toStrictEqual(property);
});
