const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getName",() => {
        it("should return the 'name' property of the Intern object", () => {
            expect(new Intern('Steve','M','steve@gmail.com','UofA').getName()).toBe('Steve');
        });
    });
    describe("getId",() => {
        it("should return the 'id' property of the Intern object", () => {
            expect(new Intern('Steve','M','steve@gmail.com','UofA').getId()).toBe('M');
        });
    });
    describe("getEmail",() => {
        it("should return the 'email' property of the Intern object", () => {
            expect(new Intern('Steve','M','steve@gmail.com','UofA').getEmail()).toBe('steve@gmail.com');
        });
    });
    describe("getSchool",() => {
        it("should return the 'email' property of the Intern object", () => {
            expect(new Intern('Steve','M','steve@gmail.com','UofA').getSchool()).toBe('UofA');
        });
    });
    describe("getRole",() => {
        it("should return 'Intern'", () => {
            expect(new Intern('Steve','M','steve@gmail.com','UofA').getRole()).toBe('Intern');
        });
    });
});