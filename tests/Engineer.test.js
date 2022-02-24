const Engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {

  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);

});

test("getRole() should return \"Engineer\"", () => {

  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser", testValue);
  expect(e.getRole()).toBe(testValue);

});


