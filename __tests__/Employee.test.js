const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName",() => {
        it("should return the 'name' property of the Employee object", () => {
            expect(new Employee('Steve','M','steve@gmail.com').getName()).toBe('Steve');
        });
    });
    describe("getId",() => {
        it("should return the 'id' property of the Employee object", () => {
            expect(new Employee('Steve','M','steve@gmail.com').getId()).toBe('M');
        });
    });
    describe("getEmail",() => {
        it("should return the 'email' property of the Employee object", () => {
            expect(new Employee('Steve','M','steve@gmail.com').getEmail()).toBe('steve@gmail.com');
        });
    });
    describe("getRole",() => {
        it("should return 'Employee'", () => {
            expect(new Employee('Steve','M','steve@gmail.com').getRole()).toBe('Employee');
        });
    });
});