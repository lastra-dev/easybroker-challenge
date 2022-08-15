import Contact from "services/Contact";
import success from "helpers/fixtures/success";

const tBody = {
  name: "Oscar",
  phone: "12345",
  email: "test@example.com",
  property_id: "EB-C6352",
  message: "Test message",
  source: "lastradev.com",
};

test("Expect Contact.sendMessage() to POST a message", async () => {
  // act
  const response = await Contact.sendMessage(tBody)

  // assert
  expect(response.data).toStrictEqual(success);
});
