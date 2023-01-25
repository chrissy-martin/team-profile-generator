const Intern = require ("../lib/intern");

//creaete intern object
describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object with name, id, email, and school', () => {
            const intern = new Intern('Chrissy', 18, 'chrissy@email.com', 'University of Washington');

            expect(intern.name).toEqual('Chrissy');
            expect(intern.id).toEqual(18);
            expect(intern.email).toEqual('chrissy@email.com');
            expect(intern.school).toEqual('University of Washington')
        });
    });

    //tests getSchool
    describe('getSchool', () => {
        it('Should get intern school', () => {
            const intern = new Intern('Chrissy', 18, 'chrissy@email.com', 'University of Washington');
            
            expect(intern.getSchool()).toEqual('University of Washington');
        });
    });

    //tests getRole
    describe('getRole', () => {
        it('Should get intern role', () => {
            const intern = new Intern('Chrissy', 18, 'chrissy@email.com', 'University of Washington');
            
            expect(intern.getRole()).toEqual('Intern');
        });
    });
})