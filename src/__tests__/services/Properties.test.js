import Properties from "../../services/Properties";
import propertiesPageOne from "../../helpers/fixtures/propertiesPageOne";

test("Expect Properties.fetchPublished() to fetch published properties", async () => {
  expect(await Properties.fetchPublished()).toBe(propertiesPageOne);
});
