import PropertiesData from "services/PropertiesData";
import propertiesPageOne from "helpers/fixtures/propertiesPageOne";

test("Expect Properties.fromPage() to fetch published properties", async () => {
  const tPage = 1;
  expect(await PropertiesData.fromPage(tPage)).toStrictEqual(propertiesPageOne);
});
