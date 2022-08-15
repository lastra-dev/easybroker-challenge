import 'package:server/eb_api/contact_request.dart';
import 'package:test/test.dart';
import 'package:server/models/contact_body.dart';

import '../../mock_http_client.dart';

void main() {
  late MockHttpClient mockHttpClient;
  late ContactRequest dataSource;
  const successFixture = 'success.json';

  var body = ContactBody(
    name: 'Oscar',
    phone: '1234567890',
    email: 'test@example.com',
    propertyId: 'EB-C6352',
    message: 'test message',
    source: 'lastradev.com',
  );

  var url = Uri.https('api.stagingeb.com', '/v1/contact_requests');
  setUp(() async {
    // Mock data source.
    mockHttpClient = MockHttpClient();
    dataSource = ContactRequest(client: mockHttpClient);
  });

  test('Properties.fromPage() returns all properties from the given page',
      () async {
    // arange
    setUpPostHttp200(
      url: url,
      mockHttpClient: mockHttpClient,
      responseFixture: successFixture,
    );

    // act
    var response = await dataSource.sendMessage(body);

    // assert
    expect(response.statusCode, 200);
  });
}
