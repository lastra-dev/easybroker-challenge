import 'dart:convert';
import 'package:test/test.dart';
import 'package:server/eb_api/property.dart';
import '../../mock_http_client.dart';

void main() {
  late MockHttpClient mockHttpClient;
  late Property dataSource;

  const tId = 'EB-B5339';
  const responseFixture = 'property.json';
  var url = Uri.https('api.stagingeb.com', '/v1/properties/$tId');

  setUp(() async {
    // Mock data source.
    mockHttpClient = MockHttpClient();
    dataSource = Property(client: mockHttpClient);
  });

  test('Property.fromId() should return the Property with that ID', () async {
    // arrange
    setUpHttpClientSuccess200(
      url: url,
      mockHttpClient: mockHttpClient,
      responseFixture: responseFixture,
    );

    // act
    var encodedProperty = await dataSource.fromId(tId);
    var jsonProperty = jsonDecode(encodedProperty) as Map<String, dynamic>;

    // assert
    expect(jsonProperty['public_id'], tId);
  });
}
