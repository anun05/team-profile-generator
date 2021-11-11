
const Engineer = require('../lib/Engineer');

test('Does this return a gitHub', ()=>{
    const github = "anun05";
    const emp = new Engineer("test", "test ", "email" , github)
    expect(emp.github).toBe(github);
});

test('Does this return a gitHub', ()=>{
    const github = "anun05";
    const emp = new Engineer("test", "test ", "email" , github)
    expect(emp.getGithub()).toBe(github);
});


test('Does this return a the Role', ()=>{
    const role = "Engineer";
    const emp = new Engineer("test", "test", "email", "github")
    expect(emp.getRole()).toBe(role);
});