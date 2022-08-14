import 'package:test/test.dart';
import 'package:server/eb_api/property.dart';
import '../../mock_http_client.dart';

void main() {
  late MockHttpClient mockHttpClient;
  late Property dataSource;

  setUp(() async {
    // Mock data source.
    mockHttpClient = MockHttpClient();
    dataSource = Property(client: mockHttpClient);
  });
}
