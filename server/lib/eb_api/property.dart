import 'package:http/http.dart' as http;

class Property {
  Property({required this.client});

  final http.Client client;

  static Future<String> fromId(int id) {
    throw UnimplementedError();
  }
}
