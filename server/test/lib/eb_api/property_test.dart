import 'package:test/test.dart';
import 'package:mocktail/mocktail.dart';
import 'package:http/http.dart' as http;
import 'package:server/eb_api/property.dart';

import '../../fixtures/fixture_reader.dart';

class MockHttpClient extends Mock implements http.Client {}

void main() {
  late MockHttpClient mockHttpClient;
  late Property dataSource;

  void setUpHttpClientSuccess200(Uri url) {
    when(() => mockHttpClient.get(url, headers: any(named: 'headers')))
        .thenAnswer(
      (_) async => http.Response(
        fixture('property.json'),
        200,
      ),
    );
  }

  setUp(() async {
    // Mock data source.
    mockHttpClient = MockHttpClient();
    dataSource = Property(client: mockHttpClient);
  });
}
