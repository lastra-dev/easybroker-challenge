import Properties from "services/Properties";
import propertiesPageOne from "helpers/fixtures/propertiesPageOne";

test("Expect Properties.fetchPublished() to fetch published properties", async () => {
  const tPage = 1;
  expect(await Properties.fetchAllFromPage(tPage)).toStrictEqual(
    propertiesPageOne
  );
});
