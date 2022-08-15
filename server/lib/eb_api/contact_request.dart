import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:server/models/contact_body.dart';

class ContactRequest {
  ContactRequest({required this.client});

  final http.Client client;

  Future<http.Response> sendMessage(ContactBody contactBody) async {
    var url = Uri.https('api.stagingeb.com', '/v1/contact_requests');
    var response = await client.post(url,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          // API for tests.
          'x-authorization': 'l7u502p8v46ba3ppgvj5y2aad50lb9'
        },
        body: jsonEncode(contactBody.toJson()));

    if (response.statusCode != 200) {
      throw Exception("Something happened...");
    }

    return response;
  }
}
