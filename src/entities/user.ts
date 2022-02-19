export default function buildMakeUser({}) {
    return function makeUser({ id, email, passwordHash } = { id: 0, email: 'user@domain.com', passwordHash: 'password' }) {
        return Object.freeze({
            getId: () => id,
            getEmail: () => email,
            getPasswordHash: () => passwordHash
        });
    };
}
