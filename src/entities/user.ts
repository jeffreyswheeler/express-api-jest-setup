export default function buildMakeUser({}) {
    return function makeUser({ id, email, passwordHash } = { id: 0, email: 'user@domain.com', passwordHash: 'password' }) {
        if (!email) {
            throw new Error('Must have valid Email.');
        }
        if (!passwordHash) {
            throw new Error('Need password hash.');
        }

        return Object.freeze({
            getId: () => id,
            getEmail: () => email,
            getPasswordHash: () => passwordHash
        });
    };
}
