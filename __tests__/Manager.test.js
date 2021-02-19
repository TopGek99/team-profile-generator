const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getName",() => {
        it("should return the 'name' property of the Manager object", () => {
            expect(new Manager('Steve','M','steve@gmail.com',1).getName()).toBe('Steve');
        });
    });
    describe("getId",() => {
        it("should return the 'id' property of the Manager object", () => {
            expect(new Manager('Steve','M','steve@gmail.com',1).getId()).toBe('M');
        });
    });
    describe("getEmail",() => {
        it("should return the 'email' property of the Manager object", () => {
            expect(new Manager('Steve','M','steve@gmail.com',1).getEmail()).toBe('steve@gmail.com');
        });
    });
    describe("getRole",() => {
        it("should return 'Manager'", () => {
            expect(new Manager('Steve','M','steve@gmail.com',1).getRole()).toBe('Manager');
        });
    });
});