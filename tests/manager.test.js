const Manager = require ("../lib/manager");

//creaete intern object
describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an object with name, id, email, and office number', () => {
            const manager = new Manager ('Chrissy', 18, 'chrissy@email.com', 258);

            expect(manager.name).toEqual('Chrissy');
            expect(manager.id).toEqual(18);
            expect(manager.email).toEqual('chrissy@email.com');
            expect(manager.officeNumber).toEqual(258)
        });
    });

    //tests getOfficeNumber
    describe('getOfficeNumber', () => {
        it('Should get manager office number', () => {
            const manager = new Manager ('Chrissy', 18, 'chrissy@email.com', 258);
            
            expect(manager.getOfficeNumber()).toEqual(258);
        });
    });

    //tests getRole
    describe('getRole', () => {
        it('Should get manager role', () => {
            const manager = new Manager ('Chrissy', 18, 'chrissy@email.com', 258);
            
            expect(manager.getRole()).toEqual('Manager');
        });
    });
})