import authReducer from '../../reducers/auth';

test('it should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({})
})

test('it should set uid for login', () => {
    const userState = {};
    const action = {
        type: 'LOGIN',
        uid: '123zbc'
    }
    const state = authReducer(userState, action);
    expect(state.uid).toEqual('123zbc')
});

test('it should clear uid', () => {
    const userState = { uid: '123zbc' };
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer(userState, action);
    expect(state.uid).toBeFalsy();
})