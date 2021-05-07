import { login, logout } from '../../actions/auth';

//testing login

test('it should set up the login action object with correct data', () => {
    const action = login('123zbc');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123zbc'
    })
})


test('it should set up the logout action correctly', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' })
})