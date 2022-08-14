import 'package:http/http.dart' as http;
import 'package:server/eb_api/properties.dart';
import 'package:test/test.dart';
import 'package:mocktail/mocktail.dart';

import '../../fixtures/fixture_reader.dart';

class MockHttpClient extends Mock implements http.Client {}

void main() {
  late MockHttpClient mockHttpClient;
  late Properties dataSource;

  void setUpHttpClientSuccess200(Uri url) {
    when(() => mockHttpClient.get(url, headers: any(named: 'headers')))
        .thenAnswer(
      (_) async => http.Response(
        fixture('properties_page_one.json'),
        200,
      ),
    );
  }

  var jsonProperties = fixture('properties_page_one.json');

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

  test('Properties.getAllFromPage() returns all properties from the given page',
      () async {
    // arange
    setUpHttpClientSuccess200(url);

    // act
    var result = await dataSource.getAllFromPage(tPage);

    // assert
    expect(result, jsonProperties);
  });
}
