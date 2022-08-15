import 'package:http/http.dart' as http;
import 'package:mocktail/mocktail.dart';
import './fixtures/fixture_reader.dart';

class MockHttpClient extends Mock implements http.Client {}

void setUpGetHttp200({
  required Uri url,
  required MockHttpClient mockHttpClient,
  required String responseFixture,
}) {
  when(() => mockHttpClient.get(
        url,
        headers: any(named: 'headers'),
      )).thenAnswer(
    (_) async => http.Response(
      fixture(responseFixture),
      200,
    ),
  );
}

void setUpPostHttp200({
  required Uri url,
  required MockHttpClient mockHttpClient,
  required String responseFixture,
}) {
  when(() => mockHttpClient.post(
        url,
        headers: any(named: 'headers'),
        body: any(named: 'body'),
      )).thenAnswer(
    (_) async => http.Response(
      fixture(responseFixture),
      200,
    ),
  );
}
