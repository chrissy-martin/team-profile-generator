const Employee = require ("../lib/employee");

//creaete employee object
describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with name, id, email, and role', () => {
            const employee = new Employee('Chrissy', 18, 'chrissy@email.com');

            expect(employee.name).toEqual('Chrissy');
            expect(employee.id).toEqual(18);
            expect(employee.email).toEqual('chrissy@email.com');
        });
    });

    //tests getName
    describe('getName', () => {
        it('Should get employee name', () => {
            const employee = new Employee('Chrissy', 18, 'chrissy@email.com');
            
            expect(employee.getName()).toEqual('Chrissy');
        });
    });

    //tests getId
    describe('getId', () => {
        it('Should get emplyee ID', () => {
            const employee = new Employee('Chrissy', 18, 'chrissy@email.com');
            
            expect(employee.getId()).toEqual(18);
        });
    });

    //tests getEmail
    describe('getEmail', () => {
        it('Should get employee email', () => {
            const employee = new Employee('Chrissy', 18, 'chrissy@email.com');
            
            expect(employee.getEmail()).toEqual('chrissy@email.com');
        });
    });

    //tests getRole
    describe('getRole', () => {
        it('Should get employee role', () => {
            const employee = new Employee('Chrissy', 18, 'chrissy@email.com');
            
            expect(employee.getRole()).toEqual("Employee");
        });
    });
})