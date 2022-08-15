import 'package:http/http.dart' as http;

/// Handles single property data.
///
/// This can help to manage single properties from the properties API endpoint.
class PropertyData {
  const PropertyData({required this.client});

  final http.Client client;

  /// Returns an [http.Response] containing a single property from a specified ID.
  Future<http.Response> fromId(String id) async {
    var url = Uri.https('api.stagingeb.com', '/v1/properties/$id');

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

    return response;
  }
}
