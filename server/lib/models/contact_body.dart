import 'package:equatable/equatable.dart';

/// Body of contact request model.
///
/// Model class for ContactRequest API endpoint.
class ContactBody extends Equatable {
  const ContactBody({
    required this.name,
    required this.phone,
    required this.email,
    required this.propertyId,
    required this.message,
    required this.source,
  });

  final String name;
  final String phone;
  final String email;
  final String propertyId;
  final String message;
  final String source;

  /// Creates a ContactBody object from a Json Map.
  ContactBody.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        phone = json['phone'],
        email = json['email'],
        propertyId = json['property_id'],
        message = json['message'],
        source = json['source'];

  /// Creates a Json Map from this object.
  Map<String, dynamic> toJson() => {
        'name': name,
        'phone': phone,
        'email': email,
        'property_id': propertyId,
        'message': message,
        'source': source,
      };

  @override
  List<Object?> get props => [
        name,
        phone,
        email,
        propertyId,
        message,
        source,
      ];
}
