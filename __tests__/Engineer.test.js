const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getName",() => {
        it("should return the 'name' property of the Engineer object", () => {
            expect(new Engineer('Steve','M','steve@gmail.com','stevegit').getName()).toBe('Steve');
        });
    });
    describe("getId",() => {
        it("should return the 'id' property of the Engineer object", () => {
            expect(new Engineer('Steve','M','steve@gmail.com','stevegit').getId()).toBe('M');
        });
    });
    describe("getEmail",() => {
        it("should return the 'email' property of the Engineer object", () => {
            expect(new Engineer('Steve','M','steve@gmail.com','stevegit').getEmail()).toBe('steve@gmail.com');
        });
    });
    describe("getGithub",() => {
        it("should return the 'email' property of the Engineer object", () => {
            expect(new Engineer('Steve','M','steve@gmail.com','stevegit').getGithub()).toBe('stevegit');
        });
    });
    describe("getRole",() => {
        it("should return 'Engineer'", () => {
            expect(new Engineer('Steve','M','steve@gmail.com','stevegit').getRole()).toBe('Engineer');
        });
    });
});