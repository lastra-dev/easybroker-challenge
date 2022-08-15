import Properties from "services/Properties";
import propertiesPageOne from "helpers/fixtures/propertiesPageOne";

test("Expect Properties.fromPage() to fetch published properties", async () => {
  const tPage = 1;
  expect(await Properties.fromPage(tPage)).toStrictEqual(propertiesPageOne);
});
