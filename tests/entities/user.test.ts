import { makeUser } from '../../src/entities';

describe('users entity', () => {
    it('test', () => {
        const newUser = makeUser({ id: 1111, email: 'test@test.com', passwordHash: 'password' });
        expect(newUser.getId()).toBe(1111);
    });
    it('test2', () => {
        expect(() => {
            makeUser({ id: 1111, email: '', passwordHash: 'password' });
        }).toThrow('Must have valid Email');
    });
});
