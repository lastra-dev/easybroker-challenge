import Contact from "services/Contact";
import success from "helpers/fixtures/success";

test("Expect Contact.sendMessage() to POST a message", async () => {
  const tBody = {
    name: "Oscar",
    phone: "12345",
    email: "test@example.com",
    property_id: "EB-C6352",
    message: "Test message",
    source: "lastradev.com",
  };
  expect(await Contact.sendMessage(tBody)).toStrictEqual(success);
});
