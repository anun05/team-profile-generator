const Intern = require("../lib/Intern");

test('Does this return a school', ()=>{
    const school = "UCLA";
    const emp = new Intern("test", "test ", "email" , school)
    expect(emp.school).toBe(school);
});

test('Does this return a school', ()=>{
    const school = "UCLA";
    const emp = new Intern("test", "test ", "email" , school)
    expect(emp.getSchool()).toBe(school);
});


test('Does this return a the Role', ()=>{
    const role = "Intern";
    const emp = new Intern("test", "test", "email", "school")
    expect(emp.getRole()).toBe(role);
});