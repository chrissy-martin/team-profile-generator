const Engineer = require ("../lib/engineer");

//creaete engineer object
describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with name, id, email, and github', () => {
            const engineer = new Engineer('Chrissy', 18, 'chrissy@email.com', 'chrissy-martin');

            expect(engineer.name).toEqual('Chrissy');
            expect(engineer.id).toEqual(18);
            expect(engineer.email).toEqual('chrissy@email.com');
            expect(engineer.github).toEqual('chrissy-martin')
        });
    });

    //tests getGithub
    describe('getGithub', () => {
        it('Should get engineer github', () => {
            const engineer = new Engineer('Chrissy', 18, 'chrissy@email.com', 'chrissy-martin');
            
            expect(engineer.getGithub()).toEqual('chrissy-martin');
        });
    });

    //tests getRole
    describe('getRole', () => {
        it('Should get engineer role', () => {
            const engineer = new Engineer('Chrissy', 18, 'chrissy@email.com', 'chrissy-martin');
            
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
})