import 'dart:io';

import 'package:server/eb_api/eb_api.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart';
import 'package:shelf_router/shelf_router.dart';
import 'package:http/http.dart' as http;

// Configure routes.
final _router = Router()
  ..get('/', _rootHandler)
  ..get('/properties/<page>', _propertiesHandler)
  ..get('/property/<id>', _propertyHandler);

Response _rootHandler(Request req) {
  return Response.ok('EasyBroker API with Dart!');
}

Response _propertyHandler(Request request) {
  final message = request.params['message'];
  return Response.ok('$message\n',
      headers: {'Content-Type': 'application/json'});
}

Future<Response> _propertiesHandler(Request request) async {
  var properties = Properties(client: http.Client());
  try {
    final page = int.parse(request.params['page'] ?? '1');
    return Response.ok(
      await properties.getAllFromPage(page),
      headers: {'Content-Type': 'application/json'},
    );
  } catch (_) {
    return Response.notFound('Route not found');
  }
}

void main(List<String> args) async {
  // Use any available host or container IP (usually `0.0.0.0`).
  final ip = InternetAddress.anyIPv4;

  // Configure a pipeline that logs requests.
  final handler = Pipeline().addMiddleware(logRequests()).addHandler(_router);

  // For running in containers, we respect the PORT environment variable.
  final port = int.parse(Platform.environment['PORT'] ?? '8080');
  final server = await serve(handler, ip, port);
  print('Server listening on port ${server.port}');
}
