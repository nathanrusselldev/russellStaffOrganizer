const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {

  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);

});

test("can get role via args", () => {

  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", testValue, );
  expect(e.getRole()).toBe(testValue);

});

test("Can get office number via args", () => {

  const officeNumber = 100
  const e = new Manager("Foo", 1, "test@test.com", officeNumber);
  expect(e.getOfficeNumber()).toBe(officeNumber);

});
