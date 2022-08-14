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

// Accept CORS.
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST',
  'Access-Control-Allow-Headers': '*',
  'Content-Type': 'application/json'
};

const badRequest = 'bad_request';

Response _rootHandler(Request req) {
  return Response.ok('EasyBroker API with Dart!');
}

Future<Response> _propertyHandler(Request request) async {
  var property = Property(client: http.Client());
  try {
    var id = request.params['id'];
    return Response.ok(
      await property.fromId(id ?? badRequest),
      headers: corsHeaders,
    );
  } catch (_) {
    return Response.notFound('Route not found');
  }
}

Future<Response> _propertiesHandler(Request request) async {
  var properties = Properties(client: http.Client());
  try {
    var page = int.parse(request.params['page'] ?? badRequest);
    return Response.ok(
      await properties.fromPage(page),
      headers: corsHeaders,
    );
  } catch (_) {
    return Response.notFound('Route not found');
  }
}

void main(List<String> args) async {
  // Use any available host or container IP (usually `0.0.0.0`).
  var ip = InternetAddress.anyIPv4;

  // Configure a pipeline that logs requests.
  var handler = Pipeline().addMiddleware(logRequests()).addHandler(_router);

  // For running in containers, we respect the PORT environment variable.
  var port = int.parse(Platform.environment['PORT'] ?? '8080');
  var server = await serve(handler, ip, port);
  print('Server listening on port ${server.port}');
}
