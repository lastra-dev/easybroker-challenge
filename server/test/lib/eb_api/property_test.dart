import 'dart:convert';
import 'package:test/test.dart';
import 'package:server/eb_api/property_data.dart';
import '../../mock_http_client.dart';

void main() {
  late MockHttpClient mockHttpClient;
  late PropertyData dataSource;

  const id = 'EB-B5339';
  const responseFixture = 'property.json';
  var url = Uri.https('api.stagingeb.com', '/v1/properties/$id');

  setUp(() async {
    // Mock data source.
    mockHttpClient = MockHttpClient();
    dataSource = PropertyData(client: mockHttpClient);
  });

  test('Property.fromId() should return the Property with that ID', () async {
    // arrange
    setUpGetHttp200(
      url: url,
      mockHttpClient: mockHttpClient,
      responseFixture: responseFixture,
    );

    // act
    var response = await dataSource.fromId(id);
    var jsonProperty = jsonDecode(response.body) as Map<String, dynamic>;

    // assert
    expect(jsonProperty['public_id'], id);
  });
}
