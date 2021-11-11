const Manager = require('../lib/Manager');

test('Does this return a number', ()=>{
    const officeNumber = 101;
    const emp = new Manager("test", "test ", "test" , officeNumber)
    expect(emp.officeNumber).toBe(officeNumber);
});


test('Does this return a the Role', ()=>{
    const role = "Manager";
    const emp = new Manager("test", "test", "email", "officeNumber")
    expect(emp.getRole()).toBe(role);
});