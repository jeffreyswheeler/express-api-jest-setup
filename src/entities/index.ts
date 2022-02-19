import buildMakeUser from './user';

const makeUser = buildMakeUser({});

const entityService = Object.freeze({
    makeUser
});

export default entityService;
export { makeUser };
