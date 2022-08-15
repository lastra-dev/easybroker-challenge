import 'package:server/eb_api/properties_data.dart';
import 'package:test/test.dart';

import '../../fixtures/fixture_reader.dart';
import '../../mock_http_client.dart';

void main() {
  late MockHttpClient mockHttpClient;
  late PropertiesData dataSource;

  const propertiesFixture = 'properties_page_one.json';
  var jsonProperties = fixture(propertiesFixture);

  const page = 1;
  var queryParameters = {
    'limit': '15',
    'search[statuses][]': 'published',
    'page': page.toString(),
  };
  var url = Uri.https('api.stagingeb.com', '/v1/properties', queryParameters);

  setUp(() async {
    // Mock data source.
    mockHttpClient = MockHttpClient();
    dataSource = PropertiesData(client: mockHttpClient);
  });

  test('Properties.fromPage() returns all properties from the given page',
      () async {
    // arange
    setUpGetHttp200(
      url: url,
      mockHttpClient: mockHttpClient,
      responseFixture: propertiesFixture,
    );

    // act
    var response = await dataSource.fromPage(page);

    // assert
    expect(response.body, jsonProperties);
  });
}
