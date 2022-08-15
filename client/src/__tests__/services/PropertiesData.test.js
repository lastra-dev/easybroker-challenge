import PropertiesData from "services/PropertiesData";
import propertiesPageOne from "helpers/fixtures/propertiesPageOne";

test("Expect Properties.fromPage() to fetch published properties", async () => {
  const tPage = 1;
  const response = await PropertiesData.fromPage(tPage);
  expect(response.data).toStrictEqual(propertiesPageOne);
});
