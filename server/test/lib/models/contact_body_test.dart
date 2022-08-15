import 'package:server/models/contact_body.dart';
import 'package:test/test.dart';

var tBody = ContactBody(
  name: 'Oscar',
  phone: '1234567890',
  email: 'test@example.com',
  propertyId: 'EB-C6352',
  message: 'test message',
  source: 'lastradev.com',
);

var tBodyJson = {
  'name': tBody.name,
  'phone': tBody.phone,
  'email': tBody.email,
  'property_id': tBody.propertyId,
  'message': tBody.message,
  'source': tBody.source,
};

void main() {
  test('Expect ContactBody.toJson() to return a Json Map', () {
    // act
    expect(tBody.toJson(), tBodyJson);
  });

  test('Expect ContactBody.fromJson() to return a ContactBody object', () {
    // act
    expect(ContactBody.fromJson(tBodyJson), tBody);
  });
}
