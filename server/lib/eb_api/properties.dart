import 'package:http/http.dart' as http;

class Properties {
  const Properties({required this.client});

  final http.Client client;

  Future<String> fromPage(int page) async {
    var queryParameters = {
      'limit': '15',
      'search[statuses][]': 'published',
      'page': page.toString(),
    };
    var url = Uri.https('api.stagingeb.com', '/v1/properties', queryParameters);
    var response = await client.get(
      url,
      headers: {
        'Content-Type': 'application/json',
        // API for tests.
        'x-authorization': 'l7u502p8v46ba3ppgvj5y2aad50lb9'
      },
    );

    if (response.statusCode != 200) {
      throw Exception("Something happened...");
    }

    return response.body;
  }
}
