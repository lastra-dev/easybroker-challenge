import 'dart:io';

/// Reads JSON files as strings for testing purposes.
String fixture(String name) => File('test/fixtures/$name').readAsStringSync();
