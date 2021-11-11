const Employee =  require('../lib/Employee');

test('Does a new instance create an object', ()=>{
    expect(typeof(new Employee())).toBe("object");
});

test('Does this return a name', ()=>{
    const name = 'Chris';
    const emp = new Employee(name)
    expect(emp.name).toBe(name);
});

test('Does this return a number', ()=>{
    const num = 101;
    const emp = new Employee("test", num)
    expect(emp.id).toBe(num);
});

test('Does this return a email', ()=>{
    const email = "chris101@gmail.com";
    const emp = new Employee("test", "test ", email)
    expect(emp.email).toBe(email);
});

test('Does the getName() return a name', ()=>{
    const name ="Chris";
    const emp = new Employee(name)
    expect(emp.getName()).toBe(name);
});

test('Does this return a number', ()=>{
    const num = 101;
    const emp = new Employee("test", num)
    expect(emp.getId()).toBe(num);
});

test('Does this return a email', ()=>{
    const email = "chris101@gmail.com";
    const emp = new Employee("test", "test", email)
    expect(emp.getEmail()).toBe(email);
});

test('Does this return a the Role', ()=>{
    const role = "Employee";
    const emp = new Employee("test", "test", "email")
    expect(emp.getRole()).toBe(role);
});