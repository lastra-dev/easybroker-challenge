import 'package:server/eb_api/properties.dart';
import 'package:test/test.dart';

import '../../fixtures/fixture_reader.dart';
import '../../mock_http_client.dart';

void main() {
  late MockHttpClient mockHttpClient;
  late Properties dataSource;
  const propertiesFixture = 'properties_page_one.json';
  var jsonProperties = fixture(propertiesFixture);

  const tPage = 1;
  var queryParameters = {
    'limit': '15',
    'search[statuses][]': 'published',
    'page': tPage.toString(),
  };
  var url = Uri.https('api.stagingeb.com', '/v1/properties', queryParameters);

  setUp(() async {
    // Mock data source.
    mockHttpClient = MockHttpClient();
    dataSource = Properties(client: mockHttpClient);
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
    var result = await dataSource.fromPage(tPage);

    // assert
    expect(result, jsonProperties);
  });
}
